import logo from './logo.svg';
import './App.css';
import React from "react";
import  { useState } from 'react';

function App() {
  const [uname, setUname] = useState("");
  const [password,setPassword] = useState("");
  const [login,setLogin] = useState(false);
  const [message,setMessage] = useState("");
  const [formVisible,setFormVisible] = useState(true);

  const getusername  = (e) =>{
    setUname(e.target.value);
  };

  const getpassword  = (e) =>{
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(uname === "user" && password === "password") {
      setMessage("Welcome, user!")
      setLogin("true");
      setFormVisible(false);
    } else {
      setMessage("Invalid username or password");
      setLogin(false);
      setFormVisible(true);
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {login===true ? <div className="message">{message}</div> : <div className="message">{message}</div> }
      {formVisible && 
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label><input type="text" name="username" value={uname} onChange={getusername} required /><br />
          <label htmlFor="password">Password:</label><input type="Password" name="password" value={password} onChange={getpassword} required /><br />
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
}

export default App;
