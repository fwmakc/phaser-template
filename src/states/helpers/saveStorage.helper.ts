export function saveStorage(
  name: string,
  parameters: Array<string>,
  state: any,
): boolean {
  try {
    const stateObject: { [key: string]: any } = {};

    for (const key of parameters) {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        stateObject[key] = (state as any)[key];
      }
    }

    const jsonString = JSON.stringify(stateObject);
    localStorage.setItem(name, jsonString);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
