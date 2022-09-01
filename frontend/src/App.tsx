import type { Component } from "solid-js";
import type {
  KeycloakConfig,
  KeycloakInitOptions,
} from "@absolid/solid-keycloak";
import { KeycloakProvider } from "@absolid/solid-keycloak";
import AppRouter from "./router";

const KEYCLOAK_CONFIG: KeycloakConfig = {
  clientId: "solidjs",
  realm: "solidjs",
  url: "https://oauth.apps.artservis.al/auth",
};

const KEYCLOAK_INIT_OPTIONS: KeycloakInitOptions = {
  adapter: "default",
};

const App: Component = () => {
  return (
    <KeycloakProvider
      config={KEYCLOAK_CONFIG}
      initOptions={KEYCLOAK_INIT_OPTIONS}
    >
      <AppRouter />
    </KeycloakProvider>
  );
};

export default App;
