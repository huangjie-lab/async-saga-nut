import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../action/user";

export default function UserPage() {
  const dispatch = useDispatch();
  const {
    userInfo: { username, score },
  } = useSelector(({ user }) => user);
  return (
    <>
      <h3>username:{username}</h3>
      <h3>score:{score}</h3>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        log out
      </button>
    </>
  );
}
