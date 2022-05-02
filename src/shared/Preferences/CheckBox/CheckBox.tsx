import React from 'react';
import { useDispatch } from 'react-redux';
import { setNotify } from '../../../store/preferences/actions';
import { sendNotify } from '../../../utils/js/sendNotify';
import ok from '../../../ok.png';
import no from '../../../no.png';
import styles from './checkbox.sass';

interface ICheckBoxProps {
  children: string;
  name: string;
  active: boolean;
}

export function CheckBox({ children, name, active }: ICheckBoxProps) {
  const dispatch = useDispatch();
  const handlerChange = () => {
    if (active) {
      sendNotify('Всплывающие уведомления отключены!', no);
      dispatch(setNotify(false));

      return;
    }

    if (!('Notification' in window)) {
      alert('Этот браузер не поддерживает всплывающие уведомления!');
      dispatch(setNotify(false));
    }

    if (Notification.permission === 'granted') {
      sendNotify('Всплывающие уведомления включены!', ok);
      dispatch(setNotify(true));
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        if (permission === 'granted') {
          sendNotify('Всплывающие уведомления включены!', ok);
        } else {
          alert('Не получено разрешение на всплывающие уведомления!');
        }
        dispatch(setNotify(permission === 'granted'));
      });
    } else {
      alert('Отправка уведомлений запрещена для данного сайта! '
        + 'Для получения уведомлений с данного сайта измените условия доступа в настройках браузера');
    }
  };

  return (
    <form className={styles.form}>
      <input className={styles.checkbox} onChange={handlerChange} type="checkbox" id={name} checked={active} />
      <label className={styles.label} htmlFor={name}>{children}</label>
    </form>
  );
}
