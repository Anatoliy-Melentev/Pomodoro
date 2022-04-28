import React from 'react';
import classNames from 'classnames';
import { EIcon, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import styles from './card.sass';

const hours = (time: number) => Math.trunc(time / 60);
const minuts = (time: number) => time % 60;

interface ICardProps {
  type: 'focus' | 'pause' | 'stop';
  value: number;
}

interface IConfig {
  [n: string]: {
    title: string;
    color: string;
    getUnit: (value: number) => string;
  }
}

const config: IConfig = {
  focus: {
    title: 'Фокус',
    color: 'orange',
    getUnit: (value) => `${value}%`,
  },
  pause: {
    title: 'Время на паузе',
    color: 'purple',
    getUnit: (value) => `${
      hours(value) ? `${hours(value)}ч ` : ''
    }${
      minuts(value) ? `${minuts(value)}м` : ''
    }` || '0',
  },
  stop: {
    title: 'Остановки',
    color: 'blue',
    getUnit: (value) => `${value}`,
  },
  inactive: {
    title: '',
    color: 'grey',
    getUnit: () => '&nbsp;',
  },
};

export function Card({ type, value = 0 }: ICardProps) {
  const classes = classNames(styles.card, styles[config[value ? type : 'inactive'].color]);
  return (
    <div className={classes}>
      <div className={styles.text}>
        <Text color={EColor.black} className={styles.h3} As="h3" size={24} bold>{config[type].title}</Text>
        <span className={styles.value}>
          {config[type].getUnit(value)}
        </span>
      </div>
      <Icon className={styles.icon} name={EIcon[type]} size={115} />
    </div>
  );
}
