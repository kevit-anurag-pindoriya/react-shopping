const init = [];

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "ADD": {
      let obj = action.payload;
      obj["key"] = Math.random(10);
      obj["count"] = 1;
      let index = state
        .map((object) => object.data.data.id)
        .indexOf(obj.data.id);

      console.log("this is a index ", state[0]);
      if (state.map((object) => object.data.data.id).indexOf(obj.data.id) < 0) {
        console.log(
          "true trigard+++++++++++++++++++++++++++++++++++++++++++++++++++++"
        );
        return [...state, { data: { ...obj } }];
      } else {
        console.log(
          "false trigard----------------------------------------------------"
        );
        console.log("state[index].data.count", state[index].data.count);
        obj["count"] += state[index].data.count;
        console.log("After update value of count obj is =====", obj);
        console.log("After update value of count state is =====", state);

        return [
          ...state.slice(0, index),
          { data: { ...obj } },
          ...state.slice(index + 1),
        ];
      }
    }
    case "ADDONE": {
      console.log(action);
      return state.map((e, index) => {
        if (e.data.data.id === action.payload) {
          return { data: { ...e.data, count: e.data.count + 1 } };
        }
        return e;
      });
    }
    case "REMOVEONE": {
      console.log(action);
      return state.map((e, index) => {
        if (e.data.data.id === action.payload) {
          return { data: { ...e.data, count: e.data.count - 1 } };
        }
        return e;
      });
    }
    case "REMOVE": {
      console.log("REMOVE click--Index is ---" + action.payload);

      return state.filter((data) => data.data.key !== action.payload);
    }
    default: {
      return state;
    }
  }
};
