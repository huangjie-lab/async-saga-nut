import * as ACTIONS from "../const";

export const userInit = {
  isLogin: false,
  userInfo: { id: null, username: "", score: 0 },
  loading: false,
  err: { msg: "" },
};

export const loginReducer = (state = { ...userInit }, { type, payload }) => {
  switch (type) {
    case ACTIONS.REQUEST:
      return { ...state, loading: true };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        loading: false,
        userInfo: { ...payload },
      };
    case ACTIONS.LOGIN_FAILURE:
      return {
        ...userInit,
        ...payload,
      };
    case ACTIONS.LOGOUT_SUCCESS:
      return {
        ...userInit,
        ...payload,
      };
    default:
      return state;
  }
};
