import React from 'react';
import { Rules } from './Rules';
import { Form } from '../Form';
import { TaskList } from '../TaskList';
import { Break } from '../Break';
import styles from './taskblock.sass';

export function TaskBlock() {
  return (
    <div className={styles.taskblock}>
      <Rules />
      <Break size={25} top />
      <Form />
      <Break size={25} top />
      <TaskList />
    </div>
  );
}
