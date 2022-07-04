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
      // console.log("***************Error-state**********", state);
      // console.log("This is a state of action 'ADD-state'", state);
      // console.log("This is a obj of action 'Obj'", obj);
      // console.log(
      //   "state.map((object) => object.data.data.id).indexOf(obj.data.id) ",
      //   state.map((object) => object.data.data.id).indexOf(obj.data.id),
      //   index
      // );
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

        // return [(state[index] = { data: { ...obj } })];

        return [...state.slice(0, index), { data: { ...obj } }, ...state.slice(index + 1)]
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
      //============================================================ADD-ONE====================================================================
      console.log("payload recive ", action.payload);

      console.log("state is ", state);
      console.log("using map ");
      console.log("state[index].data.data.count + 1", state[1].data.count + 1)
      const temp = state.map(e => e.data.data.id)
      console.log("Temp is  ", temp);
      //==================================================================================================================================
      // console.log([...state.slice(0, temp.findIndex(e => e === action.payload.data.data.data.id)), ...state[temp.findIndex(e => e === action.payload.data.data.data.id)].data.count += 1, ...state.slice(temp.findIndex(e => e.data.data.id === action.payload.data.data.data.id) + 1)]);
      return state.map((e, index) => {
        // console.log("e.data.count", e.data.count)
        // console.log("action.payload.data.data.data.id", action.payload)
        if (e.data.data.id === action.payload) {
          return { data: { ...e.data, count: e.data.count + 1 } }
        }
        return e
      })
      // return state;
    }
    case "REMOVEONE": {
      return state.map((e, index) => {
        // console.log("e.data.count", e.data.count)
        // console.log("action.payload.data.data.data.id", action.payload)
        if (e.data.data.id === action.payload) {
          return { data: { ...e.data, count: e.data.count - 1 } }
        }
        return e
      })
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
