import React from 'react';
import icons from './icons.svg';

interface IIcon {
  size?: number;
  name: string;
  className?: string;
}

export enum EIcon {
  ok = 'ok',
  stat = 'stat',
  stop = 'stop',
  menu = 'menu',
  plus = 'plus',
  edit = 'edit',
  lamp = 'lamp',
  info = 'info',
  eyes = 'eyes',
  focus = 'focus',
  pause = 'pause',
  check = 'check',
  timer = 'timer',
  close = 'close',
  tomato = 'tomato',
  delete = 'delete',
  topmenu = 'topmenu',
  pumpkin = 'pumpkin',
  increase = 'increase',
  decrease = 'decrease',
  bigtomato = 'bigtomato',
  preferences = 'preferences',
  angrytomato = 'angrytomato',
};

interface IBaseSizes {
  [n: string]: [number, number];
};

const baseSizes: IBaseSizes = {
  menu: [26, 6],
};

const enum ESizes {
  width,
  height,
}

function countSize(type: number, name: string, size: number): number {
  return ((baseSizes[name] ? baseSizes[name][type] : 20) * size) / 20;
}

function getWidth(name: string, size: number): number {
  return countSize(ESizes.width, name, size);
}

function getHeight(name: string, size: number): number {
  return countSize(ESizes.height, name, size);
}

export function Icon({ name, size = 20, className = '' }: IIcon) {
  return (
    <svg className={className} width={getWidth(name, size)} height={getHeight(name, size)}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
}

Icon.defaultProps = {
  size: 20,
  className: '',
};
