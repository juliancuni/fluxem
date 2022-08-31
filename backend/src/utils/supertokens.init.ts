import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

console.log("init supertoken");

const initSupertoken = () => {
  supertokens.init({
    framework: "express",
    supertokens: {
      connectionURI: "https://iam.microservices.al",
      apiKey: "faa98223c1f46c29f049032fd72cf497d44d12a40aa8e6bbe23e8f9f14d24ceb",
    },
    appInfo: {
      // learn more about this on https://supertokens.com/docs/session/appinfo
      appName: "Fluxem",
      apiDomain: "http://localhost:3300",
      websiteDomain: "http://localhost:3000",
      apiBasePath: "/api",
      websiteBasePath: "/auth",
    },
    recipeList: [
      EmailPassword.init(), // initializes signin / sign up features
      Session.init(), // initializes session features
    ],
  });
};

export {initSupertoken, supertokens};
