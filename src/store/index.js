import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";
import createSagaMiddleware from "redux-saga";
import { loginSaga } from "../action/loginSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ user: loginReducer }),
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(loginSaga);

export default store;
