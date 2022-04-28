import React from 'react';
import { EIcon, Icon } from '../Icon';
import styles from './plus.sass';

export function Plus({ onClick }: { onClick: () => void; }) {
  return (
    <button type="button" onClick={onClick} className={styles.btn}>
      <Icon className={styles.icon} size={16} name={EIcon.plus} />
    </button>
  );
}
