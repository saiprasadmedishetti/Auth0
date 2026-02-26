import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + "/profile",
        }}
      > */}
        <Router />
      {/* </Auth0Provider> */}
    </BrowserRouter>
  </StrictMode>,
);
