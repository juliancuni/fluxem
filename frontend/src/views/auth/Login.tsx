import { Component, Show } from "solid-js";
import { Link } from "solid-app-router";
import useLogin from "../../hooks/auth/login";

const Login: Component = () => {
  const { form, handleInput, handleLogin, loading } = useLogin();
  return (
    <div>
      <h3>Home</h3>

      <form onSubmit={handleLogin}>
        <label for="name">Email</label>
        <input type="text" name="identifier" onInput={handleInput} required />
        <label for="name">Password</label>
        <input type="password" name="password" onInput={handleInput} required />
        <button disabled={loading()} type="submit">
          <Show when={!loading()} fallback="Wait..">
            Login
          </Show>
        </button>
      </form>
      <Link href="/register">Register</Link>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Login;
