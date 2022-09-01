import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const Home = lazy(() => import("../views/Home"));
const Login = lazy(() => import("../views/auth/Login"));
const Register = lazy(() => import("../views/auth/Register"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
