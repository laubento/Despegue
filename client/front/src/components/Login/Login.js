import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [regUserName, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [logUserName, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const register = () => {
    axios({
      method: "post",
      data: {
        username: regUserName,
        password: regPassword,
      },
    });
  };
  const login = () => {
    axios.post("/login", logUserName);
  };
  const getUser = () => {};

  return (
    <div>
      <div>
        <h2>Register</h2>
        <label>User</label>
        <input type="text" onChange={(e) => setRegUsername(e.target.value)} />
        <label>Password</label>
        <input type="text" onChange={(e) => setRegPassword(e.target.value)} />
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h2>Login</h2>
        <label>User</label>
        <input type="text" onChange={(e) => setLogUsername(e.target.value)} />
        <label>Password</label>
        <input type="text" onChange={(e) => setLogPassword(e.target.value)} />
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h2>Get User</h2>
        <button onClick={getUser}>Get</button>
      </div>
    </div>
  );
};

export default Login;
