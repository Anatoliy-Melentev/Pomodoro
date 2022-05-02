import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext, Droppable, Draggable, OnDragEndResponder,
} from 'react-beautiful-dnd';
import { StyleSheet, css } from 'aphrodite';
import { rubberBand, bounceOutRight as to, bounceInRight as from } from 'react-animations';
import classNames from 'classnames';
import { taskContext } from '../context/taskContext';
import { selectTasks } from '../../store/task/selectors';
import { selectSort } from '../../store/editMode/selectors';
import { setSort } from '../../store/editMode/actions';
import { getPreferences } from '../../store/preferences/selectors';
import { Task } from './Task';
import styles from './tasklist.sass';

const style = StyleSheet.create({
  came: {
    animationName: rubberBand,
    animationDuration: '1000ms',
  },
  gone: {
    animationName: to,
    animationDuration: '600ms',
  },
  go: {
    animationName: from,
    animationDuration: '600ms',
  },
});

export function TaskList() {
  const { addCompleted, addDelete, addTask } = useContext(taskContext);
  const { workTimeOut } = useSelector(getPreferences);
  const [total, setTotal] = useState(0);
  const tasks = useSelector(selectTasks);
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const hours = () => Math.trunc(total / 60);
  const minuts = () => total % 60;

  useEffect(() => {
    if (sort && sort[0]) {
      setTotal(
        sort.reduce(
          (result, i) => !tasks[i].isCompleted ? result + tasks[i].count : result,
          0,
        ) * workTimeOut,
      );
    }
  }, [tasks, sort]);

  const onDragEnd: OnDragEndResponder = ({ destination, draggableId }) => {
    if (destination) {
      dispatch(setSort(Number(draggableId), destination.index));
    }
  };

  return (
    <div className={styles.taskList}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {sort && sort.filter((id) => !tasks[id].isCompleted).map((id, i, arr) => (
                <Draggable key={id} draggableId={id.toString()} index={i}>
                  {({ innerRef, dragHandleProps, draggableProps }) => (
                    <div
                      className={classNames({
                        [css(style.came)]: i === arr.length - 1 && addTask,
                        [css(style.gone)]: i === 0 && addDelete,
                      })}
                      ref={innerRef}
                      {...dragHandleProps}
                      {...draggableProps}
                      style={draggableProps.style}
                    >
                      <Task id={id} params={tasks[id]} />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {sort && sort
        .filter((id) => tasks[id].isCompleted).slice(0).reverse()
        .map((id, i, arr) => (
          <div
            key={id}
            className={classNames({ [css(style.go)]: i === arr.length - 1 && addCompleted })}
          >
            <Task id={id} params={tasks[id]} />
          </div>
        ))}
      {!!total && (
        <div className={styles.time}>
          {!!hours() && `${hours()} час `}
          {!!minuts() && `${minuts()} мин`}
        </div>
      )}
    </div>
  );
}
