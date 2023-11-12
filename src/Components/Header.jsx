import React from "react";
import styled from "styled-components";

const Header = () => {
  const Main = styled.div`
    font-family: "Orbitron", sans-serif;

    height: 80px;
    width: 95%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
    border-radius: 15px;
    margin: 30px auto 20px;
    /* background-color: rgba(45, 64, 89, 0.6);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5); */
    h1 {
      color: #ea5455;
      text-transform: uppercase;
      letter-spacing: 45px;
      font-weight: 800;
      font-size: 70px;
      text-align: center;
    }

    @media (max-width: 1500px) {
      h1 {
        letter-spacing: 30px;
        font-size: 50px;
      }
    }
    @media (max-width: 950px) {
      height: 150px;
      width: 100%;
      margin: 0;
      h1 {
        letter-spacing: 30px;
        font-size: 50px;
      }
    }
  `;
  return (
    <Main>
      <h1>Space Odyssey</h1>
    </Main>
  );
};

export default Header;
