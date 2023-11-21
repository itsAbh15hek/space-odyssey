import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Lessons from "./Pages/Lessons";
import News from "./Pages/News";
import Quizes from "./Pages/Quizes";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FourOFour from "./Pages/FourOFour";
import Account from "./Pages/Account";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";
import CategoryPage from "./Pages/LessonPages/CategoryPage";
import ItemDetails from "./Pages/LessonPages/ItemDetails";
import CelestialObjects from "./Pages/LessonPages/CelestialObjects/CelestialObjects";
import CelestialCategoryPage from "./Pages/LessonPages/CelestialObjects/CelestialCategoryPage";
import CelestialDetails from "./Pages/LessonPages/CelestialObjects/CelestialDetails";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

// studio.extend(extension);
// studio.initialize();

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/news" element={<News />} />
      <Route path="/quizes" element={<Quizes />} />
      <Route path="/login" element={currentUser ? <Account /> : <Login />} />
      <Route path="/lessons/:id" element={<CategoryPage />} />
      <Route path="/lessons/celestialobjects" element={<CelestialObjects />} />
      <Route
        path="/lessons/celestialobjects/:id"
        element={<CelestialCategoryPage />}
      />
      <Route
        path="/lessons/celestialobjects/:id/:id"
        element={<CelestialDetails />}
      />
      <Route path="/lessons/:id/:id" element={<ItemDetails />} />
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
