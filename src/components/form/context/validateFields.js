export const isValidName = (value) => {
  if (
    value === "" ||
    value.length < 3 ||
    value.length > 30 ||
    !/^[a-zA-Z ]+$/.test(value)
  ) {
    return false;
  } else {
    return true;
  }
};

export const isValidEmail = (value) => {
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
    return false;
  } else {
    return true;
  }
};

export const isValidPhoneNumber = (value) => {
  if (
    value === "" ||
    value.length < 10 ||
    /^([0-9]{3}-)?([0-9]{3})([0-9]{4})(\/[0-9]{4})?$/.test(value)
  ) {
    return false;
  } else {
    return true;
  }
};

export function isValidPassword(value) {
  if (value === "" || value.indexOf(" ") >= 0) {
    return false;
  } else {
    return true;
  }
}

export function passwordsMatch(value, password) {
  if (value !== password.value) {
    return false;
  }
  return true;
}
