import { RefObject } from 'react';

export const setElementOffset = (
  el: RefObject<HTMLDivElement>,
  [top, left]: [number, number],
): void => {
  if (el.current) {
    el.current.style.top = `${top}px`;
    el.current.style.left = `${left}px`;
  }
};
