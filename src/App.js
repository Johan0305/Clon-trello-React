
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import RegisterForm from "./pages/RegisterForm.js";
import Landing from "./pages/HomeLanding";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register-form" element={<RegisterForm />} />
        <Route exact path="/" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
