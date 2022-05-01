import React from 'react';
import { useSelector } from 'react-redux';
import { checkLight } from '../../../store/preferences/selectors';
import { EIcon, Icon } from '../../Icon';
import { Text, EColor } from '../../Text';
import { Break } from '../../Break';
import styles from './logo.sass';

export function Logo() {
  const light = useSelector(checkLight);

  return (
    <div className={styles.logo}>
      {light
        ? <Icon name={EIcon.tomato} className={styles.tomato} size={40} />
        : <Icon name={EIcon.pumpkin} className={styles.tomato} size={70} />}
      <Break size={12} inline />
      <Text size={24} color={EColor.red}>pomodoro_box</Text>
    </div>
  );
}
