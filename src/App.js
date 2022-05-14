import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route />
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;