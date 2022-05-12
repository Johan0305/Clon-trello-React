
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm.js";
import Landing from "./pages/Landing"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register-form" element={<register-form />} />
        <Route exact path="/" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
