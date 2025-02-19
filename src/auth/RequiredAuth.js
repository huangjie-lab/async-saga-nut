import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function RequiredAuth({ children }) {
  const { isLogin } = useSelector(({ user }) => user);
  const location = useLocation();

  console.log(location, "location");

  if (!isLogin) {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location.pathname }}
        replace={true}
      />
    );
  }
  return children;
}
