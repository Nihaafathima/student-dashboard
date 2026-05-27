import { BrowserRouter, Routes, Route, Navigate,} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import Login from "./pages/Login";
import StudyMaterials from "./pages/StudyMaterials";
import Marks from "./pages/Marks";
import Fees from "./pages/Fees";
import Placement from "./pages/Placement";

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn")==="true";

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/materials" element={<StudyMaterials />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/placement" element={<Placement />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;