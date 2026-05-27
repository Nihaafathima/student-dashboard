import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function StudyMaterials() {

  const materials = [
    {
      subject: "Java",
      type: "PDF Notes",
      file: "java_notes.pdf",
    },
    {
      subject: "DBMS",
      type: "Lab Manual",
      file: "dbms_lab.pdf",
    },
    {
      subject: "Operating System",
      type: "Previous Question Paper",
      file: "os_questions.pdf",
    },
    {
      subject: "Computer Networks",
      type: "Recorded Class",
      file: "cn_video.mp4",
    },
  ];

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="section">

          <h2>Study Materials</h2>

          <input
            type="text"
            placeholder="Search materials..."
            className="material-search"
          />

          <div className="materials-grid">

            {materials.map((item, index) => (

              <div className="material-card" key={index}>

                <h3>{item.subject}</h3>

                <p>{item.type}</p>

                <p>{item.file}</p>

               <button
  className="download-btn"
  onClick={() => alert("Downloading...")}
>
  Download
</button>
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudyMaterials;