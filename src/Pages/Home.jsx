import React from "react";
import MainCanvas from "../Components/MainCanvas";
import NavBar from "../Components/NavBar";
import { Loader, useProgress } from "@react-three/drei";
import LoadingScreen from "./3dExperiencePages/LoadingScreen";

const Home = () => {
  const { progress } = useProgress();
  return (
    <>
      <MainCanvas />
      {progress < 100 && <LoadingScreen />}
      <NavBar />
    </>
  );
};

export default Home;
