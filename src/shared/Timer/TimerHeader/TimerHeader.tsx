import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { EColor, Text } from '../../Text';
import { selectTasks } from '../../../store/task/selectors';
import styles from './timerheader.sass';

export function TimerHeader({ taskId, color = 'grey' }: { taskId: number | undefined; color: string; }) {
  const tasks = useSelector(selectTasks);
  const classes = classNames(styles.header, styles[color]);

  return (
    <div className={classes}>
      {taskId && tasks[taskId] && (
        <>
          <Text size={16} bold color={EColor.white}>
            {tasks[taskId].name}
          </Text>
          <Text size={16} color={EColor.white}>
            Помидор&nbsp;
            {tasks[taskId].countCompleted + 1}
          </Text>
        </>
      )}
    </div>
  );
}
