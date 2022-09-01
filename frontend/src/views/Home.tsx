import { Component, ComponentProps } from "solid-js";
import { Link } from "solid-app-router";

interface HomeProps extends ComponentProps<any> {
  // add props here
}

const Home: Component<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
};

export default Home;
