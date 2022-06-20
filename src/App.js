import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Board from "./pages/Board";
import Dashboard from "./pages/dashboard";
import RegisterForm from "./pages/RegisterForm.js";
import Landing from "./pages/HomeLanding";
import LoginFormEmailPassword from "./pages/LoginFormEmailPassword.js";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Response from "./pages/Response";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/register-form" />;
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
          path="/board/:boardName"
          element={<PrivateRoute children={<Board />}></PrivateRoute>}
        />
        <Route
          path="/profile"
          element={<PrivateRoute children={<Profile />}></PrivateRoute>}
        />
        <Route path="/response" element={<Response />}>
          <Route path=":redirect" component={<Response />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
