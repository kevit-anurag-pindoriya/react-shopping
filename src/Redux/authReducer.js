const init = false;

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case "login": {
      return (state = true);
    }
    case "logout": {
      return (state = false);
    }
    default: {
      return state;
    }
  }
};
