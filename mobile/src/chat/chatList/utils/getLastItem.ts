export function getLastItem<T>(arr: T[] | null | undefined) {
  if (typeof arr === 'undefined' || arr === null) {
    return undefined;
  }
  return arr.slice(-1).pop();
}
