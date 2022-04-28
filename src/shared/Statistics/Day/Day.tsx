import React from 'react';
import { declinationOfNumber } from '../../../utils/js/declinationOfNumber';
import { EColor, Text } from '../../Text';
import { EIcon, Icon } from '../../Icon';
import styles from './day.sass';

const tomatoName = [' помидор', ' помидора', ' помидоров'];
const hourName = [' часа', '-х часов', ' часов'];
const minutName = [' минуты', '-х минут', ' минут'];

interface IDayProps {
  active: number,
  tomato: number,
  tomatoDT: number
}

export function Day({ active, tomato, tomatoDT }: IDayProps) {
  const hours = () => Math.trunc(tomatoDT / 60) && Math.trunc(tomatoDT / 60);
  const tomatoDTName = `${hours() ? declinationOfNumber(hours(), hourName) : ''} `
    + `${declinationOfNumber(tomatoDT % 60, minutName)}`;

  return (
    <div className={styles.daycolumn}>
      <div className={styles.day}>
        <Text color={EColor.black} className={styles.h3} As="h3" size={24} bold>
          {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'][active]}
        </Text>
        <Text color={EColor.black} className={styles.span} As="span" size={16}>
          {tomatoDT
            ? (
              <span>
                Вы работали над задачами в течение
                <span className={styles.red}>{tomatoDTName}</span>
              </span>
            )
            : <span>Нет данных</span> }
        </Text>
      </div>
      <div className={styles.tomato}>
        {tomato ? (
          <div className={styles.datatomato}>
            <Icon className={styles.tIcon} name={EIcon.tomato} size={81} />
            <Text className={styles.x} color={EColor.grey99} size={24}>
              {`x ${tomato}`}
            </Text>
            <div className={styles.footer}>
              <Text color={EColor.white} size={24}>{declinationOfNumber(tomato, tomatoName)}</Text>
            </div>
          </div>
        ) : (
          <div className={styles.bigtomato}>
            <Icon name={EIcon.bigtomato} size={115} />
          </div>
        )}
      </div>
    </div>
  );
}
