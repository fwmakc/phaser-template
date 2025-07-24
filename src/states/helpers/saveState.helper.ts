export function saveState(name: string, object: any): boolean {
  try {
    const stateObject: { [key: string]: any } = {};
    const keys = Object.keys(object);

    for (const key of keys) {
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
