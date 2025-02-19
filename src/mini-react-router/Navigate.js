import React from "react";
import { useNavigate } from "./hooks";

export function Navigate({ to, state, replace }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    // (!!replace ? navigate.replace : navigate.push)(to);

    navigate(to, { replace, state });
  });

  return null;
}
