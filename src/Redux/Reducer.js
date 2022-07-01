const init = [];

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "ADD": {
      //   console.log(action);
      let obj = action.payload;
      obj["key"] = Math.random(10);
      obj["count"] = 1;
      let index = state
        .map((object) => object.data.data.id)
        .indexOf(obj.data.id);
      console.log("***************Error-state**********", state);
      console.log("This is a state of action 'ADD-state'", state);
      console.log("This is a obj of action 'Obj'", obj);
      console.log(
        "state.map((object) => object.data.data.id).indexOf(obj.data.id) ",
        state.map((object) => object.data.data.id).indexOf(obj.data.id),
        index
      );
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
        // console.log(
        //   "this is a index whis we find a same record ID = ",
        //   state[state.map((object) => object.data.data.id).indexOf(obj.data.id)].data.count,
        //   "and obj is",
        //   obj.count
        // );

        return [(state[index] = { data: { ...obj } })];
        // return (state[
        //   state.map((object) => object.data.data.id).indexOf(obj.data.id)
        // ] = { data: { ...obj } });
      }

      // if(state.map(object => object.data.data.id).indexOf(obj.data.id); )
      // console.log("This is unic key ", obj.key);
      // console.log("This is  count ", obj.count);
      // return [...state, { data: { ...obj } }];
    }
    case "ADDONE": {
      console.log(action.type);
      // return state.map((e) => {
      //   return e.data.data.id === action.payload ? e.data.count + 1 : e;
      // });
      return state;
    }
    case "REMOVEONE": {
      console.log(action.type);
      // return state.map((e) => {
      //   return e.data.data.id === action.payload
      //     ? e.data.count == 0
      //       ? e.data.count
      //       : e.data.count - 1
      //     : e;
      // });
      return state;
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
