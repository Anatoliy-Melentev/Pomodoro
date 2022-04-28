import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPreferences } from '../../store/preferences/selectors';
import {
  setAddTime, setBreakTime, setCountBreaks, setLongTime, setWorkTime,
} from '../../store/preferences/actions';
import { EColor, Text } from '../Text';
import { Range } from './Range';
import { Break } from '../Break';
import { Radio } from './Radio';
import { RadioItem } from './Radio/RadioItem';
import { CheckBox } from './CheckBox';
import { setBaseCountBreaks } from '../../store/timer/actions';
import { sounds } from '../../utils/js/playSound';
import styles from './preferences.sass';

export function Preferences() {
  const {
    workTimeOut, breakTimeOut, longTimeOut, additingTime, countBreaks, sound, notify,
  } = useSelector(getPreferences);

  const dispatch = useDispatch();

  const handleCountBreaks = (time: number) => {
    dispatch(setBaseCountBreaks(time));
    dispatch(setCountBreaks(time));
  };

  return (
    <div className={styles.allpref}>
      <div className={styles.head}>
        <Text size={24} color={EColor.black} As="h2">Настройки</Text>
      </div>
      <Break size={18} top />
      <div className={styles.preferences}>
        <div className={styles.content}>
          <div className={styles.range}>
            <Range
              id="workTimeOut"
              unit="мин"
              interval={[15, 60]}
              current={workTimeOut}
              onChange={(time) => dispatch(setWorkTime(time))}
            >
              Рабочий интервал
            </Range>
            <Range
              id="additingTime"
              interval={[1, 15]}
              unit="мин"
              current={additingTime}
              onChange={(time) => dispatch(setAddTime(time))}
            >
              Добавочное время
            </Range>
            <Range
              id="breakTimeOut"
              interval={[1, 15]}
              unit="мин"
              current={breakTimeOut}
              onChange={(time) => dispatch(setBreakTime(time))}
            >
              Короткий перерыв
            </Range>
            <Range
              id="longTimeOut"
              interval={[15, 60]}
              unit="мин"
              current={longTimeOut}
              onChange={(time) => dispatch(setLongTime(time))}
            >
              Длинный перерыв
            </Range>
            <Range
              id="countBreaks"
              interval={[1, 10]}
              unit="раза"
              current={countBreaks}
              onChange={(time) => handleCountBreaks(time)}
            >
              Кол-во коротких перерывов
            </Range>
            <div className={styles.notify}>
              <div className={styles.notifyHeader}>
                <span className={styles.title}>Уведомление:</span>
                <CheckBox name="notify" active={notify}>Уведомление</CheckBox>
              </div>
              <Radio>
                {Object.values(sounds).map(([id, name]) => (
                  <RadioItem key={id} name="sounds" active={sound === id} id={id}>
                    {name}
                  </RadioItem>
                ))}
              </Radio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
