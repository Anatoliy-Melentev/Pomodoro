import React from 'react';
import { useSelector } from 'react-redux';
import { checkLight } from '../../../store/preferences/selectors';
import { EIcon, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import { Break } from '../../Break';
import styles from './logo.sass';

export function Logo() {
  const light = useSelector(checkLight);
  const [icon, size] = light ? [EIcon.tomato, 40] : [EIcon.pumpkin, 60];

  return (
    <div className={styles.logo}>
      <Icon name={icon} className={styles.tomato} size={size} />
      <Break size={12} inline />
      <Text size={24} color={EColor.red}>pomodoro_box</Text>
    </div>
  );
}
