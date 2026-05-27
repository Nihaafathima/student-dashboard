import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Attendance() {

  const attendanceData = [
    {
      subject: "Java",
      percentage: "92%",
    },
    {
      subject: "DBMS",
      percentage: "85%",
    },
    {
      subject: "Operating System",
      percentage: "78%",
    },
    {
      subject: "Computer Networks",
      percentage: "88%",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="section">
          <h2>Attendance Details</h2>
          <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.percentage}</td>
                  <td>
                    {parseInt(item.percentage) >= 75
                      ? "Eligible"
                      : "Low Attendance"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;