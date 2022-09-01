import { Component, Show } from "solid-js";
import { Link } from "solid-app-router";
import useLogin from "../../hooks/auth/login";

const Login: Component = () => {
  const { form, handleInput, handleLogin, loading } = useLogin();
  return (
    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="px-6 py-4">
        <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">
          Brand
        </h2>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleLogin}>
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              name="identifier"
              onInput={handleInput}
              placeholder="Username or Email"
              aria-label="Username or Email"
            />
          </div>

          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
              onInput={handleInput}
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div class="flex items-center align-middle justify-between mt-4">
            {/* <a
              href="#"
              class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Forget Password?
            </a> */}

            <button
              class="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
              disabled={loading()}
              type="submit"
            >
              <Show when={!loading()} fallback="Wait..">
                Login
              </Show>
            </button>
          </div>
        </form>
      </div>

      <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>

        <a
          href="/register"
          class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </a>
      </div>
    </div>
    // <div>
    //   <h3>Login</h3>
    //   <form onSubmit={handleLogin}>
    //     <label for="name">Email</label>
    //     <input type="text" name="identifier" onInput={handleInput} required />
    //     <label for="name">Password</label>
    //     <input type="password" name="password" onInput={handleInput} required />
    //     <button class="btn-success" disabled={loading()} type="submit">
    //       <Show when={!loading()} fallback="Wait..">
    //         Login
    //       </Show>
    //     </button>
    //   </form>
    //   <Link href="/register">Register</Link>
    //   <br />
    //   <Link href="/">Home</Link>
    // </div>
  );
};

export default Login;
