import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Lessons from "./Pages/Lessons";
import History from "./Pages/History";
import Quizes from "./Pages/Quizes";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FourOFour from "./Pages/FourOFour";
import Account from "./Pages/Account";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

// studio.extend(extension);
// studio.initialize();

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/history" element={<History />} />
      <Route path="/quizes" element={<Quizes />} />
      <Route path="/login" element={currentUser ? <Account /> : <Login />} />
      <Route
        path="/register"
        element={currentUser ? <Account /> : <Register />}
      />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}

export default App;
