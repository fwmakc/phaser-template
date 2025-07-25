export function matchPatternInArray(
  pattern: RegExp,
  array: Array<string>,
): boolean {
  if (array.some((item) => pattern.test(item))) {
    return true;
  }
  return false;
}
