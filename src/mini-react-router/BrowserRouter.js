import { createBrowserHistory } from "history";
import React, { useLayoutEffect, useState } from "react";
import { Router } from "./Router";

console.log(createBrowserHistory());
//  {
//   action
//   back
//   block
//   createHref
//   forward
//   go
//   listen
//   location
//   push
//   replace
//   }

export const BrowserRouter = ({ children }) => {
  let historyRef = React.useRef();
  if (!historyRef.current) {
    historyRef.current = createBrowserHistory();
  }

  const history = historyRef.current;

  const [state, setState] = React.useState({ location: history.location });

  React.useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);
  return (
    <Router children={children} navigator={history} location={state.location} />
  );
};
