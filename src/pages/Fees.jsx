import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Fees() {

  const feeData = [
    {
      fee: "Tuition Fee",
      amount: "₹45,000",
      status: "Paid",
    },
    {
      fee: "Exam Fee",
      amount: "₹2,000",
      status: "Paid",
    },
    {
      fee: "Bus Fee",
      amount: "₹8,000",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="section">
          <h2>Fee Management</h2>
          <table>
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, index) => (
                <tr key={index}>
                  <td>{item.fee}</td>
                  <td>{item.amount}</td>
                  <td>
                    <span
                      className={
                        item.status === "Paid"
                          ? "paid-status"
                          : "pending-status"
                      }>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="receipt-btn"> Download </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Fees;