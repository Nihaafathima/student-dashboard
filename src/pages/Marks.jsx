import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Marks() {

  const marksData = [
    {
      subject: "Java",
      internal: 45,
      semester: 88,
      grade: "A+",
    },
    {
      subject: "DBMS",
      internal: 42,
      semester: 82,
      grade: "A",
    },
    {
      subject: "Operating System",
      internal: 40,
      semester: 76,
      grade: "B+",
    },
    {
      subject: "Computer Networks",
      internal: 47,
      semester: 91,
      grade: "S",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="section">
          <h2>Marks & Grades</h2>
          <div className="cgpa-card">
            <h3>Current CGPA</h3>
            <h1>8.4</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Internal Marks</th>
                <th>Semester Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.internal}</td>
                  <td>{item.semester}</td>
                  <td> <span className="grade-badge"> {item.grade} </span> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Marks;