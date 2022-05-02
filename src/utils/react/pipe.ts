export function pipe<U>(...fns: any[]) {
  return (initialValue: any): U => fns
    .reduce((previsionValue, fn) => fn(previsionValue), initialValue);
}
