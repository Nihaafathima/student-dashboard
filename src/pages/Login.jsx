import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "student@gmail.com" &&
      password === "123456"
    ) {

      localStorage.setItem("isLoggedIn", "true");

      navigate("/");

    } else {

      alert("Invalid Email or Password");
    }
  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <h2>Student Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
