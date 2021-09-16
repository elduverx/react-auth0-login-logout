import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  // tiene funciones de callback para ser usados.
  return <button onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;
