export function getLastItem<T>(arr: T[] | null | undefined) {
  if (typeof arr === 'undefined' || arr === null) {
    return undefined;
  }

  const newArr = [...arr];
  return newArr.slice(-1).pop();
}
