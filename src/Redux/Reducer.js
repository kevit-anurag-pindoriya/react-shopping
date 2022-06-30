const init = [];

export const reducer = (state = init, action) => {
  
  switch (action.type) {
    case "ADD": {
      //   console.log(action);
      let obj = action.payload;
      obj["key"] = Math.random(10);

      console.log("This is unic key " + obj.unic);
      return [...state, { data: { ...obj } }];
    }
    case "REMOVE": {
      console.log("REMOVE click--Index is ---" + action.payload);
      //   .filter((data) => !data.data.key);
      return state.filter((data) => data.data.key !== action.payload);
    }
    default: {
      return state;
    }
  }
};
