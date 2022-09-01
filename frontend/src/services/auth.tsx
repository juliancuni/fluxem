import axios from "axios";

const login = async (data: any) => {
  return await axios.post("http://localhost:3300/api/auth/login", data, { withCredentials: true });
};

export { login };
