type TGetCurSeconds = (time?: number) => number;

export const getCurSeconds: TGetCurSeconds = (time) => Math.trunc(
  (time || new Date().getTime()) / 1000,
);
