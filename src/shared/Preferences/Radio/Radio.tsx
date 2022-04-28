import React from 'react';
import styles from './radio.sass';

export function Radio({ children }: { children: React.ReactNode }) {
  return (
    <form className={styles.form}>
      <ul className={styles.ul}>
        {children}
      </ul>
    </form>
  );
}
