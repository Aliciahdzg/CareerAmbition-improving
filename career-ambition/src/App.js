<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
>>>>>>> Stashed changes
import './App.css';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import Commitments from "./components/Commitment/Commitments";
function App() {
  return (
<<<<<<< Updated upstream
    <BrowserRouter>
=======
    <Router>
>>>>>>> Stashed changes
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commitment" element={<Commitments />} />
<<<<<<< Updated upstream

      </Routes>
    </BrowserRouter>
=======
      </Routes>
  </Router>
>>>>>>> Stashed changes
  );
}

export default App;
