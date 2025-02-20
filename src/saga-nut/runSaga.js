import proc from "./proc";

export function runSaga({ channel, getState, dispatch }, saga, ...args) {
  //   console.log(saga, "saga");

  //   console.log(args, "args");

  // 执行Generator函数拿到生成器 具备.next方法
  const iterator = saga(...args);
  proc({ channel, getState, dispatch }, iterator);
}
