import React from 'react';
import styles from './container.sass';

interface IContainerProps {
  children: React.ReactNode;
}

export function Container({ children = '' }: IContainerProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
