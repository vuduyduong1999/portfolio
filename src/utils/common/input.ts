export const isValidPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber === undefined || phoneNumber === null) {
    return false;
  }
  if (phoneNumber.charAt(0) !== '0') {
    return false;
  }
  if (phoneNumber.length < 10) {
    return false;
  }
  return true;
};

export const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export const isNotNull = (text?: string) => {
  if (text === undefined || text === null || text.length === 0) {
    return false;
  }
  return true;
};
