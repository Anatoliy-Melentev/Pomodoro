import React, { ChangeEvent, useEffect, useState } from 'react';
import { EColor, Text } from '../../Text';
import styles from './range.sass';

interface IRangeProps {
  id: string;
  children: string;
  interval: [number, number],
  current: number;
  unit: string;
  onChange: (value: number) => void;
}

export function Range({
  id, children, interval: [min, max], current, unit, onChange,
}: IRangeProps) {
  const [value, setValue] = useState(current);
  useEffect(() => onChange(value), [value]);
  return (
    <form className={styles.form}>
      <div className={styles.setter}>
        <label className={styles.label} htmlFor={id}>
          {`${children}: `}
        </label>
        <br />
        <div className={styles.line}>
          <Text className={styles.text} color={EColor.greyD9} bold size={24}>{min}</Text>
          <input
            type="range"
            className={styles.range}
            name={id}
            id={id}
            min={min}
            max={max}
            step="1"
            value={value}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => setValue(Number(target.value))}
          />
          <Text className={styles.text} color={EColor.greyD9} bold size={24}>{max}</Text>
        </div>
      </div>
      <div className={styles.value}>
        <input
          type="text"
          className={styles.output}
          name={id}
          value={value}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => setValue(Number(target.value))}
        />
        <span className={styles.unit}>{unit}</span>
      </div>
    </form>
  );
}
