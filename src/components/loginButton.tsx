// import { useAuth0 } from "@auth0/auth0-react";

import { auth } from "../lib/auth";

const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    auth.login(
      {
        email: "saiprasad.medishetti@sjp.co.uk",
        password: "Sai@123456",
        realm: 'Username-Password-Authentication',
        redirectUri:  window.location.href + '/profile'
      },
      (error, result) => {
        if (error) {
          console.log({ error });
          return;
        }
        console.log({ result });
      },
    );
  };
  return (
    <button
      // onClick={() => loginWithRedirect()}
      onClick={handleLogin}
      className="button login"
    >
      Log In
    </button>
  );
};

export default LoginButton;
