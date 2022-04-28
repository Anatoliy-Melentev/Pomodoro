import React from 'react';
import classNames from 'classnames';
import styles from './btn.sass';
import { emptyFn } from '../../utils/js/emptyFn';

interface IBtnProps {
  type?: 'button' | 'submit' | 'reset';
  children: string;
  disabled?: boolean;
  isCancel?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Btn({
  type, children, disabled, isCancel, onClick, className,
}: IBtnProps) {
  const classes = classNames(
    styles.btn,
    { [styles.red]: isCancel },
    { [styles.disabled]: disabled },
    className,
  );

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

Btn.defaultProps = {
  type: 'button',
  disabled: false,
  isCancel: false,
  onClick: emptyFn,
  className: undefined,
};
