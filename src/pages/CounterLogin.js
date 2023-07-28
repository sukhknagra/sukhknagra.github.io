import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./Firebase";
import Counter from "./Counter";
import "../styles/Counter.css";

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch(err){
      alert("Error occurred", err);
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      
      <div className="login-detail">Currently logged in as: { currentUser?.email } </div> <br/>

      {!currentUser && 
        <div className="buttons">
          <div className="fields">
            <input ref={emailRef} placeholder="Email"  /> <br/> 
            <br/>
            <input ref={passwordRef} type="password" placeholder="Password" />
          </div>

          <button disabled={ loading } onClick={handleSignup}>Sign Up</button>
          <button disabled={ loading } onClick={handleLogin}>Log In</button>
        </div>
      }

      {currentUser && 
        <div className="buttons">
          <Counter />
          <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
        </div>
      }

    </div>
  );
}