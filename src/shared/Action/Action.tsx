import React from 'react';
import styles from './action.sass';
import { Icon } from '../Icon';
import { Break } from '../Break';
import { emptyFn } from '../../utils/js/emptyFn';

interface IActionProps {
  children?: string;
  size?: number;
  icon?: string;
  onClick?: () => void;
  className?: string;
}

export function Action({
  children, size, icon, onClick, className,
}: IActionProps) {
  return (
    <button type="button" className={`${styles.btn} ${className}`} onClick={onClick}>
      {icon && <Icon size={size} name={icon} />}
      <Break size={9} inline />
      <span>{children}</span>
    </button>
  );
}

Action.defaultProps = {
  children: '',
  size: 15,
  icon: '',
  onClick: emptyFn,
  className: '',
};
