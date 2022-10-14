import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [regUser, setRegUser] = useState({ name: "", password: "", email: "" });
  const [logUser, setLogUser] = useState({ name: "", password: "", email: "" });

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const register = async () => {
    axios({
      method: "POST",
      data: regUser,
      withCredentials: true,
      url: "/register",
    }).then((res) => console.log(res));
  };

  const login = async () => {
    axios({
      method: "POST",
      data: logUser,
      withCredentials: true,
      url: "/login",
    }).then((res) => console.log(res));
  };
  const getUser = async () => {
    const res = await axios.get("/user");
    console.log(res);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };
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
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={regUser.email}
          onChange={handleChange}
        />
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h2>Login</h2>
        <label>User</label>
        <input
          type="text"
          value={logUser.name}
          name="name"
          onChange={handleLogin}
        />
        <label>Password</label>
        <input
          type="text"
          value={logUser.password}
          name="password"
          onChange={handleLogin}
        />
        <label>Email</label>
        <input
          type="text"
          value={logUser.email}
          name="email"
          onChange={handleLogin}
        />
        <button onClick={login}>Submit</button>
        <button onClick={google}>Google</button>
      </div>
      <div>
        <h2>Get User</h2>
        <button onClick={getUser}>Get</button>
      </div>
    </div>
  );
};

export default Login;
