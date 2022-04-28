import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { emptyFn } from '../../../../utils/js/emptyFn';
import styles from './column.sass';

interface IColumnProps {
  size?: number;
  active?: boolean;
  onClick?: () => void
}

export function Column({ size = 5, active = false, onClick }: IColumnProps) {
  const classes = classNames(styles.column, { [styles.full]: size }, { [styles.active]: active });
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (div.current) {
      div.current.style.height = `${size < 5 ? 5 : size}px`;
    }
  }, [size, active]);

  return (
    <div ref={div} className={styles.allcolumn}>
      <button type="button" onClick={onClick} className={classes}>&nbsp;</button>
    </div>
  );
}

Column.defaultProps = {
  size: 5,
  active: false,
  onClick: emptyFn,
};
