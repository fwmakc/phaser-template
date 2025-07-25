export function loadStorage(
  name: string,
  parameters: Array<string>,
  state: { [key: string]: any },
): boolean {
  try {
    const storedValue = localStorage.getItem(name);

    if (storedValue) {
      const parsedValue = JSON.parse(storedValue || '{}') || {};
      for (const key in parsedValue) {
        if (parameters.includes(key)) {
          state[key] = parsedValue[key];
        }
      }
    }

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
