export const getDay: (seconds: number) => number = (seconds) => Math.trunc(
  seconds / (24 * 60 * 60),
);