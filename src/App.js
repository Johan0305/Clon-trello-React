import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RegisterForm from "./pages/RegisterForm.js";
import Landing from "./pages/HomeLanding";
import LoginFormEmailPassword from "./pages/LoginFormEmailPassword.js";
import LoginFormSSO from "./pages/LoginFormSSO.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register-form" element={<RegisterForm />} />
        <Route exact path="/login" element={<LoginFormEmailPassword />} />
        <Route exact path="/loginsso" element={<LoginFormSSO />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
