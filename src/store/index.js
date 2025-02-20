import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";
// import createSagaMiddleware from "redux-saga";
import createSagaMiddleware from "../saga-nut";

import { loginSaga } from "../action/loginSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ user: loginReducer }),
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(loginSaga);

export default store;

// function* generator() {
//   yield 2;
//   yield 3;
//   const x = yield 4;
//   console.log(x / 2, "x");

//   return 5;
// }

// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next(100));
