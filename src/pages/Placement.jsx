import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Placement() {

  const jobs = [
    {
      company: "Infosys",
      role: "Frontend Developer",
      package: "4.5 LPA",
    },
    {
      company: "TCS",
      role: "React Developer",
      package: "5 LPA",
    },
    {
      company: "Wipro",
      role: "Software Engineer",
      package: "4 LPA",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="section">
          <h2>Placement Opportunities</h2>
          <div className="placement-grid">
            {jobs.map((job, index) => (
              <div className="placement-card" key={index}>
                <h3>{job.company}</h3>
                <p> <strong>Role:</strong> {job.role}  </p>
                <p> <strong>Package:</strong> {job.package} </p>
                <button className="apply-btn"> Apply Now </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placement;