export function saveStorage(
  name: string,
  parameters: Array<string>,
  state: { [key: string]: any },
): boolean {
  try {
    const stateObject: { [key: string]: any } = {};

    for (const key of parameters) {
      stateObject[key] = state[key];
    }

    const jsonString = JSON.stringify(stateObject);
    localStorage.setItem(name, jsonString);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
