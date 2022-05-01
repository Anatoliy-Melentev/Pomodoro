import React, { useState } from 'react';
import classNames from 'classnames';
import { EColor, Text } from '../../Text';
import { EIcon, Icon } from "../../Icon";
import styles from './rules.sass';

interface IRules {
  [n: number]: [number, string];
}

const rules: IRules = [
  [0, 'Выберите категорию и напишите название текущей задачи'],
  [1, 'Запустите таймер («помидор»)'],
  [2, 'Работайте пока «помидор» не прозвонит'],
  [3, 'Сделайте короткий перерыв (3-5 минут)'],
  [4, 'Продолжайте работать «помидор» за «помидором», пока задача не будет выполнена. '
    + 'Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).'],
];

export function Rules() {
  return (
    <div className={styles.rules}>
      <div className={styles.text}>
        <Text className={styles.h2} size={24} color={EColor.black} As="h2">
          Ура! Теперь можно начать работать:
        </Text>
        <ul className={styles.ul}>
          {Object.values(rules).map(([i, rule]) => (
            <li key={i} className={styles.li}>
              <span className={styles.span}>
                {rule}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
