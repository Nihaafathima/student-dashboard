import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import profilePic from "../assets/niha.jpg";

function Profile() {

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="section">
          <h2>Student Profile</h2>
          <div className="profile-page">
          <img src={profilePic} alt="profile"/>
            <div className="profile-details">
              <h3>Niha Fathima</h3>
              <p><strong>Register No:</strong> 21CS101</p>
              <p><strong>Department:</strong> Computer Science</p>
              <p><strong>Semester:</strong> 6</p>
              <p><strong>CGPA:</strong> 8.4</p>
              <p><strong>Email:</strong> niha@gmail.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Skills:</strong> React, JavaScript, Python</p>
              <p><strong>Academic Interests:</strong> AI, Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;