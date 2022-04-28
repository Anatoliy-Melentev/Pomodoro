import React from 'react';
import { EIcon, Icon } from '../../Icon';
import { Text, EColor } from '../../Text';
import { Break } from '../../Break';
import styles from './logo.sass';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Icon name={EIcon.tomato} size={40} />
      <Break size={12} inline />
      <Text size={24} color={EColor.red}>pomodoro_box</Text>
    </div>
  );
}
