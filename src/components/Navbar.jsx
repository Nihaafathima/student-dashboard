import { useNavigate } from "react-router-dom";
import profilePic from "../assets/niha.jpg";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (

    <div className="navbar">

      <div className="navbar-left">

        <h4>ABC Technological University</h4>

      </div>

      <div className="navbar-right">

        

        <img
          src={profilePic}
          alt="profile"
          className="nav-profile"
        />

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;