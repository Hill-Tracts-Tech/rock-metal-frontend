export const isSameUser = (loggedinUer, storedUser) => {
  if (loggedinUer === storedUser) {
    return true;
  } else {
    return false;
  }
};
