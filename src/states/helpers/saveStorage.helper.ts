export function saveStorage(
  name: string,
  storageParameters: Array<string>,
  object: any,
): boolean {
  try {
    const stateObject: { [key: string]: any } = {};

    for (const key of storageParameters) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        stateObject[key] = (object as any)[key];
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
