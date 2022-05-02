import React from 'react';
import styles from './levelline.sass';

export function LevelLine({ time }: { time: number }) {
  const hours = () => Math.trunc(time / 60);
  const minuts = () => time % 60;

  return (
    <div className={styles.level}>
      <div className={styles.line} />
      <div className={styles.value}>
        {!!hours() && `${hours()} час`}
        {!!minuts() && ` ${minuts()} мин`}
      </div>
    </div>
  );
}
