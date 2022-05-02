import React from 'react';
import classNames from 'classnames';
import { Action } from '../../Action';
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
    tooltip: string;
    getUnit: (value: number) => string;
  }
}

const config: IConfig = {
  focus: {
    title: 'Фокус',
    color: 'orange',
    tooltip: 'Отношение времени работы с таймером ко врмени, потраченному на законченные помидорки',
    getUnit: (value) => `${value}%`,
  },
  pause: {
    title: 'Время на паузе',
    color: 'purple',
    tooltip: 'Время затраченное на паузы',
    getUnit: (value) => `${
      hours(value) ? `${hours(value)}ч ` : ''
    }${
      minuts(value) ? `${minuts(value)}м` : ''
    }` || '0',
  },
  stop: {
    title: 'Остановки',
    color: 'blue',
    tooltip: 'Количество остановок',
    getUnit: (value) => `${value}`,
  },
  inactive: {
    title: '',
    color: 'grey',
    tooltip: '',
    getUnit: () => '&nbsp;',
  },
};

export function Card({ type, value = 0 }: ICardProps) {
  const classes = classNames(styles.card, styles[config[value ? type : 'inactive'].color]);
  return (
    <div className={classes}>
      <div className={styles.text}>
        <div className={styles.header}>
          <Text color={EColor.black} className={styles.h3} As="h3" size={24} bold>
            {config[type].title}
          </Text>
          <Action icon={EIcon.info} size={24} className={styles.info} />
        </div>
        <span className={styles.value}>
          {config[type].getUnit(value)}
        </span>
      </div>
      <Icon className={styles.icon} name={EIcon[type]} size={115} />
      <div className={styles.tooltip}>
        <span>
          {config[type].tooltip}
        </span>
      </div>
    </div>
  );
}
