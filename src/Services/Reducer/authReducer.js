const init = false;

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case "login": {
      return true;
    }
    case "logout": {
      return false;
    }
    default: {
      return state;
    }
  }
};
