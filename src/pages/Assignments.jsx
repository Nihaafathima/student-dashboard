import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Assignments() {

  const assignments = [
    {
      title: "DBMS Mini Project",
      deadline: "May 30",
      status: "Pending",
    },
    {
      title: "Java Lab Record",
      deadline: "May 28",
      status: "Submitted",
    },
    {
      title: "OS Assignment",
      deadline: "June 2",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="section">

          <h2>Assignments</h2>

          <div className="assignment-list">

            {assignments.map((item, index) => (

              <div className="assignment-card" key={index}>

                <h3>{item.title}</h3>

                <p>
                  <strong>Deadline:</strong> {item.deadline}
                </p>

                <p>
                  <strong>Status:</strong>
                  <span className={item.status}>
                    {" "} {item.status}
                  </span>
                </p>

                <input type="file" className="file-input"/>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Assignments;