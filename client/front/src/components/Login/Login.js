import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [regUser, setRegUser] = useState({ name: "", password: "" });
  const [regPassword, setRegPassword] = useState("");
  const [logUserName, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const register = () => {
    axios.post("/register", regUser);
  };

  const login = () => {};
  const getUser = () => {};
  const handleChange = (e) => {
    e.preventDefault();
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
  };
  console.log(regUser);
  return (
    <div>
      <div>
        <h2>Register</h2>
        <label>User</label>
        <input
          type="text"
          name="name"
          value={regUser.name}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={regUser.password}
          onChange={handleChange}
        />
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
