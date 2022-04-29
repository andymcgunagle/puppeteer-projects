export function filterDuplicateObjects<T>(arr: T[], key: string) {
  return [...new Map(arr.map((item) => [item[key as keyof T], item])).values()];
};