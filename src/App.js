import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RequiredAuth from "./auth/RequiredAuth";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/user"
              element={
                <RequiredAuth>
                  <UserPage />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function Layout(props) {
  return (
    <div className="border">
      <Link to="/">首页</Link>
      <Link to="/user">用户中心</Link>
      {/* <Link to="/login">登录</Link> */}
      <Link to="/login">登录</Link>
      <Outlet />
    </div>
  );
}

function Home() {
  return <h3>Home</h3>;
}

function NotFound() {
  return <h3>NotFound</h3>;
}
