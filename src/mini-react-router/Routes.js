// import { useRoutes } from "react-router-dom";
import { useRoutes } from "./hooks";

import { createRoutesFromChildren } from "./createRoutesFromChildren";

export const Routes = ({ children }) => {
  const routes = createRoutesFromChildren(children);
  console.log(routes, "routes");

  return useRoutes(routes);
};
