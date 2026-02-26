import { WebAuth } from "auth0-js";

export const auth = new WebAuth({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  responseType: "token",
  redirectUri: window.location.href + "profile",
  scope: "openid email profile",
});