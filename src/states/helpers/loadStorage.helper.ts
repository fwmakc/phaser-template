export function loadStorage(
  name: string,
  storageParameters: Array<string>,
  object: any,
): boolean {
  try {
    const storedValue = localStorage.getItem(name);

    if (storedValue) {
      const parsedValue = JSON.parse(storedValue || '{}') || {};

      for (const key in parsedValue) {
        if (
          storageParameters.includes(key) &&
          Object.prototype.hasOwnProperty.call(parsedValue, key)
        ) {
          (object as any)[key] = parsedValue[key];
        }
      }
    }

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
