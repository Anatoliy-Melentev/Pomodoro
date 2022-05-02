import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { deleteTask, changeTimeTask, setCompleted } from '../../../store/task/actions';
import { deleteSort, setEditMode } from '../../../store/editMode/actions';
import { DropDown } from '../../DropDown';
import { EIcon, Icon } from '../../Icon';
import { Action } from '../../Action';
import { Question } from '../../Question';
import styles from './task.sass';

export interface ITask {
  id: number;
  params: {
    isCompleted: boolean;
    count: number;
    name: string;
  }
}

export function Task({ id, params: { count, name, isCompleted } }: ITask) {
  const [showWind, setShowWind] = useState(false);
  const btnClass = classNames(styles.count, styles[isCompleted ? 'completed' : 'empty']);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
    dispatch(deleteSort(id));
    setShowWind(false);
  };

  const menu = [{
    idx: 0,
    icon: EIcon.increase,
    text: 'Увеличить',
    onClick: () => dispatch(changeTimeTask(id, count + 1)),
  }, {
    idx: 1,
    icon: EIcon.decrease,
    text: 'Уменьшить',
    onClick: () => dispatch(count - 1 ? changeTimeTask(id, count - 1) : setShowWind(true)),
  }, {
    idx: 2,
    icon: EIcon.edit,
    text: 'Редактировать',
    onClick: () => dispatch(setEditMode(id)),
  }, {
    idx: 3,
    icon: EIcon.delete,
    text: 'Удалить',
    onClick: () => setShowWind(true),
  }];

  const node = document.querySelector('#question-root');
  if (!node) return null;

  return (
    <>
      <div className={styles.task}>
        <div className={styles.taskName}>
          <button type="button" onClick={() => dispatch(setCompleted(id))} className={btnClass}>
            {isCompleted ? <Icon className={styles.ok} name={EIcon.ok} size={10} /> : count}
          </button>
          <span>{name.length < 31 ? name : `${name.substring(0, 30)}...`}</span>
        </div>
        {!isCompleted
        && (
          <div>
            <DropDown
              className={styles.dropDown}
              button={(
                <div className={styles.button}>
                  <Icon name={EIcon.menu} size={16} />
                </div>
              )}
            >
              <div className={styles.menu}>
                {menu.map(({
                  idx, icon, text, onClick,
                }) => (
                  <Action
                    onClick={onClick}
                    key={idx}
                    className={styles.item}
                    size={20}
                    icon={icon}
                  >
                    {text}
                  </Action>
                ))}
              </div>
            </DropDown>
          </div>
        )}
      </div>
      {showWind
        && createPortal(
          <Question onClose={() => setShowWind(false)} onDelete={handleDelete} />,
          node,
        )}
    </>
  );
}
