import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [auth, { handleSignIn }] = useContext(AuthContext);
  if (auth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <p>Click to LOGIN</p>
      <button
        style={{
          margin: "2rem auto",
          outline: "none",
          borderStyle: "none",
          padding: "1rem",
          backgroundColor: "lightBlue",
          cursor: "pointer",
          borderRadius: "0.5rem",
        }}
        onClick={handleSignIn}
      >
        LOGIN
      </button>
    </div>
  );
}
