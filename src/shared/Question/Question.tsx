import React from 'react';
import { Btn } from '../Btn';
import { Text } from '../Text';
import { Icon, EIcon } from '../Icon';
import styles from './question.sass';

export interface IQuestionProps {
  onClose: () => void;
  onDelete: () => void;
}

export function Question({ onClose, onDelete }: IQuestionProps) {
  return (
    <div className={styles.cover}>
      <div className={styles.window}>
        <button type="button" onClick={onClose} className={styles.icon}>
          <Icon size={16} name={EIcon.close} />
        </button>
        <Text size={24} bold>Удалить задачу?</Text>
        <Btn onClick={onDelete} className={styles.btn} isCancel>Удалить</Btn>
        <button type="button" onClick={onClose} className={styles.link}>Отмена</button>
      </div>
    </div>
  );
}
