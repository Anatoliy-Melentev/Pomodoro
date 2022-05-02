import React, { useState } from 'react';
import { EColor, Text } from '../../Text';
import { EIcon, Icon } from '../../Icon';
import { DropDown } from '../../DropDown';
import { Action } from '../../Action';
import styles from './menu.sass';

interface IMenu {
  [n: number]: [number, string];
}

const menu: IMenu = [
  [0, 'Эта неделя'],
  [1, 'Прошедшая неделя'],
  [2, '2 недели назад'],
];

interface IMenuProps {
  setWeekCount: (weekCount: number) => void
}

export function Menu({ setWeekCount }: IMenuProps) {
  const [name, setName] = useState('Эта неделя');
  const handleClick = (idx: number, week: string) => {
    setName(week);
    setWeekCount(idx);
  };

  return (
    <div className={styles.allmenu}>
      <Text className={styles.header} size={24} color={EColor.black} As="h2">Ваша активность</Text>
      <div className={styles.wmenu}>
        <DropDown
          className={styles.dropdown}
          button={(
            <div className={styles.menuBtn}>
              <Text size={16} className={styles.menuText}>{name}</Text>
              <Icon name={EIcon.check} size={16} className={styles.check} />
            </div>
          )}
        >
          <div className={styles.menu}>
            {Object.values(menu).map(([id, week]) => (
              <Action onClick={() => handleClick(id, week)} key={id} className={styles.item}>
                {week}
              </Action>
            ))}
          </div>
        </DropDown>
      </div>
    </div>
  );
}
