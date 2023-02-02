// to było z redux, ale nie redux toolkit - nie mozna mutowac stanu!
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "ADD") {
//     return { ...state, counter: state.counter + 1 };
//   }
//   if (action.type === "REMOVE") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "INCREASE") {
//     return { ...state, counter: state.counter + action.amount };
//   }
//   if (action.type === "TOGGLE") {
//     return { ...state, visible: !state.visible };
//   }
//   return state;
// };

// jesli byloby wiecej reducerow to: reducer: {counter: counter.redcer, auth: auth.reducer} itd....

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;
