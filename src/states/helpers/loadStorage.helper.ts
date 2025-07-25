export function loadStorage(
  name: string,
  parameters: Array<string>,
  state: any,
): boolean {
  try {
    const storedValue = localStorage.getItem(name);

    if (storedValue) {
      const parsedValue = JSON.parse(storedValue || '{}') || {};

      for (const key in parsedValue) {
        if (
          parameters.includes(key) &&
          Object.prototype.hasOwnProperty.call(parsedValue, key)
        ) {
          (state as any)[key] = parsedValue[key];
        }
      }
    }

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
