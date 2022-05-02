import React from 'react';
import classNames from 'classnames';
import styles from './break.sass';

type TBreakSize = 4 | 8 | 9 | 12 | 16 | 18 | 20 | 25;

interface IBreakProps {
  size: TBreakSize;
  inline?: boolean;
  top?: boolean;
}
export function Break({ inline = false, top = false, size }: IBreakProps) {
  return (
    <div className={classNames(styles[`s${size}`], { [styles.inline]: inline }, { [styles.top]: top })} />
  );
}

Break.defaultProps = {
  inline: false,
  top: false,
};
