import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';


import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';

SuperTokens.init({
  appInfo: {
      apiDomain: "http://localhost:3300",
      apiBasePath: "/auth",
      appName: "Fluxem",
  },
  recipeList: [
      Session.init(),
  ],
});


const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
