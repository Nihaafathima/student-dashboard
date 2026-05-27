import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    if ( email === "student@gmail.com" && password === "123456") {
       localStorage.setItem("isLoggedIn", "true");
       navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Student Login</h1>
        <input type="email" placeholder="Enter Email" value={email}
          onChange={(e) =>
            setEmail(e.target.value)}
          required/>
        <input type="password" placeholder="Enter Password" value={password}
          onChange={(e) =>
            setPassword(e.target.value)}
          required/>
        <button type="submit"> Login </button>
        <div className="demo-credentials">
        </div>
      </form>
    </div>
  );
}

export default Login;