import React, { useState } from "react";
import axios from "axios";

function LogReg() {
  const [registerUserInfo, setRegisterUserInfo] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [loginUser, setLoginUser] = useState({
    name: "",
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setRegisterUserInfo({
      ...registerUserInfo,
      [e.target.name]: e.target.value,
    });
  };
  const register = async (e) => {
    await fetch("http://localhost:3001/register", {
      method: "post",
      body: { info: registerUserInfo },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  };
  console.log(registerUserInfo);
  return (
    <div>
      <div>
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={registerUserInfo.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={registerUserInfo.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={registerUserInfo.email}
          placeholder="email"
          onChange={handleChange}
        />
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="password" />
        <input
          type="text"
          name="password"
          value={registerUserInfo.email}
          placeholder="email"
          onChange={handleChange}
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default LogReg;
