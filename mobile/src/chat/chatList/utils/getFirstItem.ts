export function getFirstItem<T>(arr: T[] | null | undefined) {
  if (typeof arr === 'undefined' || arr === null) {
    return undefined;
  }
  const newArr = [...arr];
  return newArr.shift();
}
