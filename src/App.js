import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Board from "./pages/Board";
import Dashboard from "./pages/dashboard";
import RegisterForm from "./pages/RegisterForm.js";
import Landing from "./pages/HomeLanding";
import LoginFormEmailPassword from "./pages/LoginFormEmailPassword.js";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

const MainRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainRoutes children={<Landing />}></MainRoutes>}
        />
        <Route
          path="/register-form"
          element={<MainRoutes children={<RegisterForm />}></MainRoutes>}
        />
        <Route
          path="/login"
          element={
            <MainRoutes children={<LoginFormEmailPassword />}></MainRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute children={<Dashboard />}></PrivateRoute>}
        />
        <Route
          path="/board"
          element={<PrivateRoute children={<Board />}></PrivateRoute>}
        />
        <Route
          path="/profile"
          element={<PrivateRoute children={<Profile />}></PrivateRoute>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
