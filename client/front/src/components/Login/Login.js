import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [regUser, setRegUser] = useState({ name: "", password: "", email: "" });
  const [regPassword, setRegPassword] = useState("");
  const [logUserName, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("")
  const [errPass, setErrPass] = useState('')
  const register = () => {
    if(confirmPassword !== regUser.password){
      return setErrPass('Las contraseñas no son iguales')
    }
    axios.post("/register", regUser);
  };

  const login = () => {};
  const getUser = () => {};
  const handleChange = (e) => {
    e.preventDefault();
    setErrPass('')
    setRegUser({
      ...regUser,
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
          type="password"
          name="password"
          value={regUser.password}
          onChange={handleChange}
        />
        <label>Confirm Password </label>
          <input type='password' onChange={(e)=>setConfirm(e.target.value)}/>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={regUser.email}
          onChange={handleChange}
        />
        <button onClick={register}>Submit</button>
        {errPass && (
        <h3>{errPass}</h3>
      )}
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
