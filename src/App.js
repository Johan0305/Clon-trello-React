import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link>Hola</Link>
      </nav>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
