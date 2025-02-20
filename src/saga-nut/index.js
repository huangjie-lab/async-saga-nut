import { runSaga } from "./runSaga";
import { stdChannel } from "./channel";

export default function createSagaMiddleware() {
  let boundRunSaga;
  let channel = stdChannel();
  function sagaMiddleware({ getState, dispatch }) {
    boundRunSaga = runSaga.bind(null, { channel, getState, dispatch });
    // 中间件的写法 依旧不懂 todo...
    return (next) => (action) => {
      let result = next(action);
      channel.put(action);
      return result;
    };
  }

  sagaMiddleware.run = (...saga) => {
    console.log(saga, "saga");

    return boundRunSaga(...saga);
  };
  return sagaMiddleware;
}
