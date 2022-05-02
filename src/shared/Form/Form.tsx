import React, {
  ChangeEvent, useContext, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './form.sass';
import { Btn } from '../Btn';
import { useMountEffect } from '../../hooks/useMountEffect';
import { preventDefault } from '../../utils/react/preventDefault';
import { addTask, editTask } from '../../store/task/actions';
import { selectEditingId } from '../../store/editMode/selectors';
import { selectTasks } from '../../store/task/selectors';
import { setEditMode, setSort } from '../../store/editMode/actions';
import { between } from '../../utils/js/between';
import { taskContext } from '../context/taskContext';

export function Form() {
  const { setAddTask } = useContext(taskContext);

  const [value, setValue] = useState('');
  const [error, setError] = useState('Ошибка');
  const [touch, setTouch] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const editId = useSelector(selectEditingId);
  const tasks = useSelector(selectTasks);

  const dispatch = useDispatch();

  const cancelEdit = () => {
    dispatch(setEditMode(0));
    setValue('');
  };

  const checkError = () => {
    if (touch && value.length > 50) {
      setError('Максимально допустимое значение 50 символов');
    } else if (touch && value.length < 3) {
      setError('Минимально допустимое значение 3 символа');
    } else if (touch && !/^[А-Яа-яA-Za-z0-9\-\_\ \.\,\:\;\?\!]+$/g.test(value)) {
      setError('Использованы не допустимые символы');
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (!between(2, value.length, 51)) {
      setTouch(true);
      checkError();

      return;
    }

    if (editId) {
      dispatch(editTask(editId, value));
      dispatch(setEditMode(0));
    } else {
      const id = new Date().getTime();
      dispatch(addTask(id, value));
      dispatch(setSort(id));
    }

    if (setAddTask) {
      setAddTask(true);
    }

    setValue('');
    setTouch(false);
  };

  useMountEffect(() => ref.current?.focus());

  useEffect(() => {
    if (editId) {
      setValue(tasks[editId].name);
    }
  }, [editId]);

  useEffect(() => checkError(), [value, error, touch]);

  return (
    <form className={styles.form} onSubmit={preventDefault(handleSubmit)}>
      <input
        ref={ref}
        className={styles.input}
        type="text"
        placeholder="Название задачи"
        value={value}
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value)}
      />
      <span className={styles.error}>{!!error && error}</span>
      <Btn disabled={touch && !!error} type="submit">
        {editId ? 'Изменить' : 'Добавить'}
      </Btn>
      {!!editId && <Btn onClick={cancelEdit} isCancel>Отмена</Btn>}
    </form>
  );
}
