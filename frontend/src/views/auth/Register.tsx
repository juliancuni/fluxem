import { Link } from "solid-app-router";

import { Component, ComponentProps } from "solid-js";

interface RegisterProps extends ComponentProps<any> {
  // add props here
}

const Register: Component<RegisterProps> = (props: RegisterProps) => {
  return (
    <div>
      <h2>Register</h2>
      <Link href="/Login">Login</Link>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Register;
