import React from "react";
import { NavigationContext } from "./context";

export function Router({ children, navigator, location }) {
  const navigationContext = React.useMemo(
    () => ({ navigator, location }),
    [navigator, location]
  );
  return (
    <NavigationContext.Provider value={navigationContext}>
      {children}
    </NavigationContext.Provider>
  );
}
