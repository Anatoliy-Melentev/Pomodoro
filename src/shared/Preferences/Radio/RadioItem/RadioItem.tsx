import React from 'react';
import { useDispatch } from 'react-redux';
import { setSound } from '../../../../store/preferences/actions';
import { playSound } from '../../../../utils/js/playSound';
import styles from './radioitem.sass';

interface IRadioItemProps {
  id: number;
  children: string;
  name: string;
  active: boolean;
  disabled: boolean;
}

export function RadioItem({
  id, children, name, active, disabled,
}: IRadioItemProps) {
  const dispatch = useDispatch();
  const handleChange = () => {
    playSound(id);
    dispatch(setSound(id));
  };

  return (
    <li className={styles.li}>
      <input
        className={styles.radio}
        onChange={handleChange}
        type="radio"
        name={name}
        id={`${name}-${id}`}
        defaultChecked={active}
        disabled={disabled}
      />
      <label className={styles.label} htmlFor={`${name}-${id}`}>{children}</label>
    </li>
  );
}
