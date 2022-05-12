import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register-form" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
