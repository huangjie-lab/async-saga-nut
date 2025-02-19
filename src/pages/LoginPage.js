import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { login } from "../action/user";

export default function LoginPage() {
  const { isLogin, loading, err } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from || "/";

  console.log(from, "from");

  if (isLogin) {
    return <Navigate to={from} replace={true} />;
  }

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    dispatch(login({ username }));
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={submit}>
        <input type="text" name="username" />
        <button type="submit">{loading ? "login..." : "login"}</button>
      </form>
      <p style={{ color: "red" }}>{err.msg}</p>
    </div>
  );
}
