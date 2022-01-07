
import React, { useState } from "react";
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const handleSignIn = ({ email, password }) => {
    if (!auth) {
      setAuth(true);
    } else {
      return true;
    }
  };

  const handleSignOut = () => {
    if (auth) {
      setAuth(false);
    } else {
      return false;
    }
  };

  const isSignedIn = () => {
    return auth;
  };

  const value = [auth, { handleSignIn, handleSignOut, isSignedIn }];
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
