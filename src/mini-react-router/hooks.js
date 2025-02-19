import React from "react";
import { matchRoutes } from "react-router-dom";
import { NavigationContext, RouteContext } from "./context";
import { Outlet } from "./Outlet";
import { normalizePathname } from "./utils";

export const useRoutes = (routes) => {
  // const pathname = window.location.pathname;

  const { pathname } = useLocation();

  // todo ...  这个api需要去看下
  const matches = matchRoutes(routes, { pathname });
  console.log("matches", matches);

  return renderMatches(matches);

  // return routes.map((route) => {
  //   // const match = pathname === route.path || pathname === "/" + route.path;

  //   // 渲染嵌套路由
  //   const match = pathname.startsWith(route.path);
  //   // return match ? route.element : null;
  //   return (
  //     match &&
  //     route.children.map((child) => {
  //       // let m = pathname.startsWith(child.path);
  //       let m = normalizePathname(child.path || "/") === pathname;
  //       return (
  //         m && (
  //           <RouteContext.Provider
  //             value={{ outlet: child.element }}
  //             // good... 渲染父组件 其实没太明白
  //             children={route.element || <Outlet />}
  //           ></RouteContext.Provider>
  //         )
  //       );
  //     })
  //   );
  // });
};

// good ...
function renderMatches(matches) {
  if (matches == null) {
    return null;
  }

  return matches.reduceRight((outlet, match) => {
    return (
      <RouteContext.Provider
        value={{ outlet, matches }}
        children={match.route.element || outlet}
      />
    );
  }, null);
}

export const useNavigate = () => {
  const { navigator } = React.useContext(NavigationContext);

  const navigate = React.useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        navigator.go(to);
        return false;
      }

      (!!options.replace ? navigator.replace : navigator.push)(
        to,
        options.state
      );
    },
    [navigator]
  );

  // return navigator.push;
  return navigate;
};

export const useLocation = () => {
  const { location } = React.useContext(NavigationContext);

  return location;
};

export const useOutlet = () => {
  const { outlet } = React.useContext(RouteContext);

  // console.log(outlet, "outlet");

  return outlet;
};

export const useParams = () => {
  const { matches } = React.useContext(RouteContext);

  // console.log(matches, "matches");

  const routeMatch = matches[matches.length - 1];

  return routeMatch ? routeMatch.params : {};
};
