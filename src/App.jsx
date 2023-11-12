import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Lessons from "./Pages/Lessons";
import History from "./Pages/History";
import Quizes from "./Pages/Quizes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/history" element={<History />} />
      <Route path="/quizes" element={<Quizes />} />
    </Routes>
  );
}

export default App;
