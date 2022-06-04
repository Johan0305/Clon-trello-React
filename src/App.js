import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Board from "./pages/Board";
import Dashboard from "./pages/dashboard";
import RegisterForm from "./pages/RegisterForm.js";
import Landing from "./pages/HomeLanding";
import LoginFormEmailPassword from "./pages/LoginFormEmailPassword.js";
import LoginFormSSO from "./pages/LoginFormSSO.js";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register-form" element={<RegisterForm />} />
        <Route exact path="/login" element={<LoginFormEmailPassword />} />
        <Route exact path="/loginsso" element={<LoginFormSSO />} />
        <Route
          path="/dashboard"
          element={token !== "" ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/board"
          element={token !== "" ? <Board /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={token !== "" ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
