export const handleNullObject = <T>(object?: T) => {
  if (object) {
    let result: T = {} as T;
    for (let key in object) {
      if (object[key]) {
        result[key] = object[key];
      }
    }
    return result;
  }
  return undefined;
};
