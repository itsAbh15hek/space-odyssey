import React from "react";
import { useProgress } from "@react-three/drei";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  color: #fff;
  font-size: 24px;
  span {
    width: 100%;
    font-family: "Orbitron", sans-serif;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-weight: 600;
    text-align: center;
  }
  h1 {
    font-family: "Expletus Sans", sans-serif;
    font-size: 60px;
    color: #ea5455;
    margin-bottom: 40px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #decdc3;
  border-radius: 20px;
  margin-top: 20px;

  .progress {
    height: 100%;
    background-color: #ea5455;
    border-radius: 20px;
    transition: width 0.3s ease-in-out;
  }
`;

const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <LoadingContainer>
      <div>
        <span>Space Odyssey</span>
        <h1>Loading 3D assets...</h1>
        <ProgressBar>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </ProgressBar>
      </div>
    </LoadingContainer>
  );
};

export default LoadingScreen;
