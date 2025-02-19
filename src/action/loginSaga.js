import * as ACTIONS from "../store/const";
// import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import { call, fork, put, take } from "../saga-nut/effects";
import LoginService from "../service/login";

function* handleLogin(action) {
  const putRes = put({ type: ACTIONS.REQUEST });
  console.log(putRes, "putRes");
  yield putRes;
  try {
    // call 第二个参数传递给第一个函数作为参数 put就相当于dispatch
    const res1 = yield call(LoginService.login, action.payload);
    const res2 = yield call(LoginService.getMoreUserInfo, res1);
    yield put({ type: ACTIONS.LOGIN_SUCCESS, payload: res2 });
  } catch (err) {
    yield put({ type: ACTIONS.LOGIN_FAILURE, payload: err });
  }
}

export function* loginSaga() {
  //   yield takeEvery(ACTIONS.LOGIN_SAGA, handleLogin);
  //   console.log("takeEvery");
  // 使用take替代takeEvery
  while (true) {
    const action = yield take(ACTIONS.LOGIN_SAGA);
    console.log(action, "take");

    console.log("fork");
    // yield call(handleLogin, action);
    // fork不会阻塞后面代码的执行 （打印action）
    yield fork(handleLogin, action);
    console.log(action, "action");
  }
}
