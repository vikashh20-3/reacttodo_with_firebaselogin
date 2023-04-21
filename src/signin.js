import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./home";
import App from "./App";
import "./index.css";
function SignIn() {
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      setUsername(data.user.displayName);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="demo">
      {value ? (
        <App />
      ) : (
        <div>
          <h3>Welcome, this project is made by Vikash</h3>
          <button id="bt" onClick={handleClick}>
            Sign in With Google
          </button>
        </div>
      )}
    </div>
  );
}
export default SignIn;
