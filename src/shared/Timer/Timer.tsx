import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskContext } from '../context/taskContext';
import { selectTasks } from '../../store/task/selectors';
import { selectSort } from '../../store/editMode/selectors';
import { checkStatistics } from '../../store/statistics/selectors';
import { getPreferences } from '../../store/preferences/selectors';
import {
  selectBreakType, selectPauseTime, selectStage, selectStartTime,
} from '../../store/timer/selectors';
import {
  addMoreTime, addStartTime, changeStage, clearAllTime, setPauseTime, setStartTime,
} from '../../store/timer/actions';
import {
  addPauseTime, addStop, addTomatoTime, addTotalTime, createRecordStat,
} from '../../store/statistics/actions';
import { addCompletedCount, setCompleted } from '../../store/task/actions';
import { setSort } from '../../store/editMode/actions';
import { getCurSeconds } from '../../utils/js/getCurSeconds';
import { useMountEffect } from '../../hooks/useMountEffect';
import { sendNotify } from '../../utils/js/sendNotify';
import { playSound } from '../../utils/js/playSound';
import { Btn } from '../Btn';
import { TimeString } from './TimeString';
import { TimerHeader } from './TimerHeader';
import tomato from '../../tomato.png';
import styles from './timer.sass';

const toSec = (min: number) => min/* * 60*/;

export function Timer() {
  const { setAddCompleted, setAddDelete } = useContext(taskContext);
  const dispatch = useDispatch();

  const sort = useSelector(selectSort);
  const tasks = useSelector(selectTasks);
  const startTime = useSelector(selectStartTime);
  const pauseTime = useSelector(selectPauseTime);
  const workStage = useSelector(selectStage);
  const longBreak = useSelector(selectBreakType);
  const isCurState = useSelector(checkStatistics);
  const {
    workTimeOut, breakTimeOut, longTimeOut, additingTime, countBreaks, notify, sound,
  } = useSelector(getPreferences);

  const [seconds, setSeconds] = useState(0);
  const [countTime, setCountTime] = useState(toSec(workTimeOut));
  const [allAdditingTime, setAllAdditingTime] = useState(0);
  const needDo = sort.find((id) => !tasks[id].isCompleted);

  const timeOut = longBreak ? longTimeOut : breakTimeOut;
  const getTimeOut = (): number => toSec(workStage ? workTimeOut : timeOut);
  const workStageColor = workStage ? 'red' : 'green';
  const getColor = (colored: boolean) => colored ? workStageColor : 'grey';

  const handleStart = (): void => {
    if (!startTime) {
      dispatch(setStartTime());
    } else if (!pauseTime) {
      dispatch(addTotalTime(getCurSeconds() - startTime - allAdditingTime));
      dispatch(setPauseTime());
    } else {
      dispatch(addPauseTime(getCurSeconds() - pauseTime));
      dispatch(addStartTime());
    }
  };

  const handleStop = (): void => {
    dispatch(clearAllTime());
    setCountTime(getTimeOut());
    if (pauseTime) {
      dispatch(addTomatoTime(getCurSeconds() - startTime - allAdditingTime));
      if (setAddDelete) {
        setAddDelete(true);
      }

      setTimeout(() => {
        dispatch(setSort(needDo));
        dispatch(setCompleted(needDo));
        if (setAddDelete) {
          setAddDelete(false);
        }
        if (setAddCompleted) {
          setAddCompleted(true);
        }
      }, 500);
    } else {
      dispatch(addStop());
      dispatch(addTotalTime(getCurSeconds() - startTime - allAdditingTime));
    }
  };

  const addTime = () => {
    if (startTime) {
      dispatch(addMoreTime(toSec(additingTime)));
    } else {
      setAllAdditingTime((prev) => prev + toSec(additingTime));
      setCountTime((prev) => prev + toSec(additingTime));
    }
  };

  setInterval(() => setSeconds(new Date().getTime()), 1000);

  useEffect(() => {
    if (!startTime) {
      return;
    }

    if (!pauseTime) {
      const totalTime = startTime + allAdditingTime + getTimeOut() - getCurSeconds();
      if (totalTime < 0) {
        if (workStage) {
          dispatch(addTomatoTime(getCurSeconds() - startTime + toSec(additingTime)));
          if (notify) {
            sendNotify('Время работы над задачей закончилось, пора отдохнуть!', tomato);
            playSound(sound);
          }
        }

        dispatch(changeStage(countBreaks));
        dispatch(clearAllTime());
        setAllAdditingTime(0);

        if (!workStage) {
          dispatch(addTotalTime(getCurSeconds() - startTime + toSec(additingTime)));
          dispatch(addCompletedCount(needDo));
          if (notify) {
            sendNotify('Перерыв закончился, пора продолжить работу!', tomato);
            playSound(sound);
          }
        }
      } else {
        setCountTime(totalTime);
      }
    } else {
      setCountTime(startTime + getTimeOut() - pauseTime);
    }
  }, [seconds]);

  useEffect(() => setCountTime(getTimeOut()), [workStage]);
  useEffect(() => {
    if (needDo && tasks[needDo].countCompleted >= tasks[needDo].count) {
      if (setAddDelete) {
        setAddDelete(true);
      }

      setTimeout(() => {
        dispatch(setSort(needDo));
        dispatch(setCompleted(needDo));
        if (setAddDelete) {
          setAddDelete(false);
        }
        if (setAddCompleted) {
          setAddCompleted(true);
        }
      }, 500);
    }
  }, [tasks]);

  useMountEffect(() => !isCurState && dispatch(createRecordStat()));

  const isStarted = !!startTime;
  const isPaused = !!pauseTime;
  const startFirstBtnName = !isPaused ? 'Пауза' : 'Продожить';
  const startSecondBtnName = !isPaused ? 'Стоп' : 'Сделано';

  return (
    <div className={styles.timer}>
      <TimerHeader color={getColor(isStarted)} taskId={needDo} />
      <div className={styles.content}>
        {needDo && (
          <>
            <TimeString
              addTime={addTime}
              color={getColor(isStarted && !isPaused)}
              countTime={countTime}
            />
            <div className={styles.task}>
              <span className={styles.listStyle}>
                Задача&nbsp;
                {sort.indexOf(needDo) + 1}
                &nbsp;-&nbsp;
              </span>
              <span className={styles.taskName}>{tasks[needDo].name}</span>
            </div>
            <div className={styles.btns}>
              <Btn onClick={handleStart}>
                {!isStarted ? 'Старт' : startFirstBtnName}
              </Btn>
              <Btn disabled={!isStarted} onClick={handleStop} isCancel>
                {workStage ? startSecondBtnName : 'Пропустить'}
              </Btn>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
