import React from 'react';
import classNames from 'classnames';
import { generateRandomNumber } from '../../../utils/react/generateRandomIndex';
import { LevelLine } from './LevelLine';
import { Column } from './Column';
import { between } from '../../../utils/js/between';
import styles from './week.sass';

const baseTime = [1, 2, 5, 25, 50, 75, 100, 125, 150, 175, 200];

interface IWeekProps {
  total: number[],
  active: number,
  setActive: (active: number) => void
}

export function Week({ total, active, setActive }: IWeekProps) {
  const getClass = (i: number) => classNames(styles.textDay, { [styles.active]: active === i });
  const getMax = () => Math.max(...total);
  const getCounts = () => baseTime.find((v) => between(3, Math.ceil(getMax() / v), 10)) || 25;
  const getCountLines = () => Math.ceil(getMax() / getCounts());

  return (
    <div className={styles.weekWrp}>
      <div className={styles.week}>
        <div className={styles.lines}>
          {Array(getCountLines()).fill(null).map((_, i) => (
            <LevelLine key={generateRandomNumber(i)} time={(i + 1) * getCounts()} />
          ))}
        </div>
        <div className={styles.footer}>
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((name, i) => (
            <button type="button" key={generateRandomNumber(i)} onClick={() => setActive(i)} className={getClass(i)}>
              {name}
            </button>
          ))}
        </div>
        <div className={styles.columns}>
          {total.map((size, i) => (
            <Column
              onClick={() => setActive(i)}
              key={generateRandomNumber(i)}
              size={(size * (100 / (getCountLines() || 1))) / getCounts()}
              active={active === i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
