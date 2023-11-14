import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Lessons from "./Pages/Lessons";
import History from "./Pages/History";
import Quizes from "./Pages/Quizes";

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FourOFour from "./Pages/FourOFour";
import Account from "./Pages/Account";
import ResetPassword from "./Pages/ResetPassword";

studio.extend(extension);
studio.initialize();

function App() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/history" element={<History />} />
      <Route path="/quizes" element={<Quizes />} />
      <Route path="/login" element={user ? <Account /> : <Login />} />
      <Route path="/register" element={user ? <Account /> : <Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}

export default App;
