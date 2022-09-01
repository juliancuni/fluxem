import { createSignal, JSX } from "solid-js";
import { createStore } from "solid-js/store";
import { login } from "../../services/auth";

const useLogin = () => {
  const [loading, setLoading] = createSignal(false);
  const [form, setForm] = createStore({
    identifier: null,
    password: null,
  });
  const handleInput = (ev: any) => {
    setForm(ev.currentTarget.name, ev.currentTarget.value);
  };

  const handleLogin = async (ev: any) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const {data} = await login({ ...form });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    form,
    handleLogin,
    handleInput,
  };
};

export default useLogin;
