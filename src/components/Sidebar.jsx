import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaClipboardList,
  FaCalendarCheck,
  FaBook,
  FaCog,
  FaGraduationCap,
  FaMoneyBill,
FaBriefcase
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">EduDash</h2>

      <ul>

        <li>
          <Link to="/">
            <FaTachometerAlt />
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUser />
            Profile
          </Link>
        </li>

        <li>
          <Link to="/attendance">
            <FaCalendarCheck />
            Attendance
          </Link>
        </li>

        <li>
          <Link to="/assignments">
            <FaClipboardList />
            Assignments
          </Link>
        </li>

        <li>
          <Link to="/materials">
            <FaBook />
            Study Materials
          </Link>
        </li>

        <li>
  <Link to="/marks">
    <FaGraduationCap />
    Marks
  </Link>
</li>

<li>
  <Link to="/fees">
    <FaMoneyBill />
    Fees
  </Link>
</li>

<li>
  <Link to="/placement">
    <FaBriefcase />
    Placement
  </Link>
</li>
      </ul>
    </div>
  );
}

export default Sidebar;