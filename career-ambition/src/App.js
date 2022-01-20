import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import Commitments from "./components/Commitment/Commitments";
import Calendar from "./components/Calendar/Calendar"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commitment" element={<Commitments />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
