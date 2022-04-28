import { assoc } from '../js/assoc';

export const generateRandomNumber = (id: number) => Number(
  new Date().getTime().toString() + id,
);
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
