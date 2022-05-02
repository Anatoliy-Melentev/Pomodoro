import { assoc } from '../js/assoc';

const curTime = () => new Date().getTime();
export const generateRandomNumber = (id: number) => Number(
  curTime().toString() + id + Math.floor(Math.random() * 9),
);
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
