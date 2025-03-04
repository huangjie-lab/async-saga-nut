import React from "react";
import { useNavigate } from "./hooks";

export function Link({ to, children }) {
  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle}>
      {children}
    </a>
  );
}
