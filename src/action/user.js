import * as ACTIONS from "../store/const";
import LoginService from "../service/login";
import LogoutService from "../service/logout";

// export const login = (userInfo) => ({
//   type: ACTIONS.LOGIN_SUCCESS,
//   payload: userInfo,
// });

// 模拟异步请求 good ...
// export const login = (userInfo) => (dispatch) => {
//   dispatch({ type: ACTIONS.REQUEST });
//   LoginService.login(userInfo).then(
//     (res) => {
//       // dispatch({
//       //   type: ACTIONS.LOGIN_SUCCESS,
//       //   payload: res,
//       // });
//       // 嵌套调用 查询用户积分接口
//       getMoreUserInfo(dispatch, res);
//     },
//     (err) => {
//       dispatch({
//         type: ACTIONS.LOGIN_FAILURE,
//         payload: err,
//       });
//     }
//   );
// };

function getMoreUserInfo(dispatch, userInfo) {
  LoginService.getMoreUserInfo(userInfo).then(
    (res) => {
      dispatch({
        type: ACTIONS.LOGIN_SUCCESS,
        payload: res,
      });
    },
    (err) => {
      dispatch({
        type: ACTIONS.LOGIN_FAILURE,
        payload: err,
      });
    }
  );
}

export const logout = () => (dispatch) => {
  LogoutService.logout({ id: 123 }).then((res) => {
    dispatch({
      type: ACTIONS.LOGOUT_SUCCESS,
      payload: res,
    });
  });
};

// 使用redux-saga处理复杂的异步逻辑

export const login = (userInfo) => ({
  type: ACTIONS.LOGIN_SAGA,
  payload: userInfo,
});
