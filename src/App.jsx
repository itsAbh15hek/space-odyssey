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
import Settings from "./Pages/ProfilePages/Settings";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";
import CategoryPage from "./Pages/LessonPages/CategoryPage";
import ItemDetails from "./Pages/LessonPages/ItemDetails";
import CelestialObjects from "./Pages/LessonPages/CelestialObjects/CelestialObjects";
import CelestialCategoryPage from "./Pages/LessonPages/CelestialObjects/CelestialCategoryPage";
import CelestialDetails from "./Pages/LessonPages/CelestialObjects/CelestialDetails";
import ViewQuiz from "./Pages/QuizPages/ViewQuiz";
import ResetPasswordNew from "./Pages/ResetPasswordNew";
import EditProfile from "./Pages/ProfilePages/EditProfile";
import DeleteAccount from "./Pages/ProfilePages/DeleteAccount";
import ChangePassword from "./Pages/ProfilePages/ChangePassword";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

// studio.extend(extension);
// studio.initialize();

function App() {
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );
  console.log(currentUser);
  return (
    // Routes
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/resetpassword/:id" element={<ResetPasswordNew />} />

      {/* Profile */}
      <Route path="/user" element={<Account />} />
      <Route path="/user/settings" element={<Settings />} />
      <Route path="/user/settings/editprofile" element={<EditProfile />} />
      <Route
        path="/user/settings/deleteaccount/"
        element={<ChangePassword />}
      />
      <Route path="/user/settings/changepassword" element={<Settings />} />

      {/* News */}
      <Route path="/news" element={<News />} />

      {/* Quizes */}
      <Route path="/quizes" element={<Quizes />} />
      <Route path="/quizes/view-quiz/:id" element={<ViewQuiz />} />

      {/* Lessons */}
      <Route path="/lessons" element={<Lessons />} />
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

      {/* 404 */}
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}

export default App;
