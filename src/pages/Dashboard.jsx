import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import "../styles/Dashboard.css";

function Dashboard() {
 
  const assignments = [
    {
      title: "DBMS Mini Project",
      deadline: "May 30",
      status: "Pending",
    },
    {
      title: "Java Record",
      deadline: "May 28",
      status: "Submitted",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="welcome">
          <h2>Welcome back, Niha </h2>
          <p>B.Tech CSE | Semester 6</p>
        </div>
        <div className="summary-grid">
          <SummaryCard title="Attendance" value="89%" />
          <SummaryCard title="CGPA" value="8.4" />
          <SummaryCard title="Assignments" value="3 Pending" />
          <SummaryCard title="Subjects" value="6" />
        </div>
{/* Timetable */}
<div className="section">
  <h2>Timetable</h2>
  <div className="table-container">
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>9:00 - 10:00</th>
        <th>10:00 - 11:00</th>
        <th>11:00 - 12:00</th>
        <th>1:00 - 2:00</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monday</td>
        <td>Java</td>
        <td>DBMS</td>
        <td>Break</td>
        <td>Operating System</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>Computer Networks</td>
        <td>Java Lab</td>
        <td>Break</td>
        <td>DBMS Lab</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>Software Engineering</td>
        <td>Operating System</td>
        <td>Break</td>
        <td>Mini Project</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>Java</td>
        <td>DBMS</td>
        <td>Break</td>
        <td>Placement Training</td>
      </tr>
      <tr>
        <td>Friday</td>
        <td>Aptitude</td>
        <td>Computer Networks</td>
        <td>Break</td>
        <td>Seminar</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
{/* Assignments Section */}
<div className="section">
  <h2>Assignments</h2>
  <div className="assignment-list">
    {assignments.map((assignment, index) => (
      <div className="assignment-card" key={index}>
        <h3>{assignment.title}</h3>
        <p>Deadline: {assignment.deadline}</p>
        <span className={assignment.status}>
          {assignment.status}
        </span>
      </div>
    ))}
  </div>
</div>
{/* Attendance Overview */}

<div className="section">
  <h2>Attendance Overview</h2>
  <div className="attendance-container">
    <div className="attendance-item">
      <p>Java</p>
      <div className="progress-bar">
        <div className="progress java"></div>
      </div>
      <span>92%</span>
    </div>
    <div className="attendance-item">
      <p>DBMS</p>
      <div className="progress-bar">
        <div className="progress dbms"></div>
      </div>
      <span>85%</span>
    </div>
    <div className="attendance-item">
      <p>Operating System</p>
      <div className="progress-bar">
        <div className="progress os"></div>
      </div>
      <span>78%</span>
    </div>
    <div className="attendance-item">
      <p>Computer Networks</p>
      <div className="progress-bar">
        <div className="progress cn"></div>
      </div>
      <span>88%</span>
    </div>
    <div className="attendance-item">
      <p>Software Engineering</p>
      <div className="progress-bar">
        <div className="progress se"></div>
      </div>
      <span>90%</span>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Dashboard;