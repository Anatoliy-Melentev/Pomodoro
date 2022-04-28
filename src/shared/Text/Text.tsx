import React from 'react';
import classNames from 'classnames';
import styles from './text.sass';

export enum EColor {
  red = 'red',
  darkred = 'darkred',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyEC = 'greyEC',
  greyE5 = 'greyE5',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
  black = 'black',
}

type TSizes = 28 | 24 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  color?: EColor;
  bold?: boolean;
  className?: string;
}
export function Text({
  As = 'span', color = EColor.black, children, size, bold = false, className,
}: ITextProps) {
  const classes = classNames(styles[`s${size}`], styles[color], { [styles.bold]: bold }, className);

  return (
    <As className={classes}>
      {children}
    </As>
  );
}

Text.defaultProps = {
  As: 'span',
  children: '',
  color: EColor.black,
  bold: false,
  className: '',
};
