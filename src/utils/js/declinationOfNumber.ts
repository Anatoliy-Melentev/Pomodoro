import { between } from './between';

const rules = [
  (num: number) => between(4, Math.abs(num) % 100, 21),
  (num: number) => between(1, Math.abs(num) % 10, 5),
  (num: number) => Math.abs(num) % 10 === 1,
];

export const declinationOfNumber = (number: number, [one, few, many]: string[]): string => {
  const idx = rules.findIndex((fn) => fn(number));
  return `${number}${[one, few, many][idx === -1 ? 2 : 2 - idx]}`;
};

interface IDateNames {
  [n: number]: [string, string, string];
};

const DateNames: IDateNames = [
  ['год', 'года', 'лет'],
  ['месяц', 'месяца', 'месяцев'],
  ['день', 'дня', 'дней'],
  ['час', 'часа', 'часов'],
  ['минута', 'минуты', 'минут'],
  ['секунда', 'секунды', 'секунд'],
];

export const enum EDateNames {
  year,
  month,
  day,
  hour,
  minut,
  second,
}

export const declOfDate = (
  value: number,
  type: number,
): string => declinationOfNumber(value, DateNames[type]);
