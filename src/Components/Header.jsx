import React from "react";
import styled from "styled-components";

const Header = () => {
  const Main = styled.div`
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
    h1 {
      color: #ea5455;
      text-transform: uppercase;
      letter-spacing: 45px;
      font-weight: 800;
      font-size: 70px;
      text-align: center;

      font-family: "Orbitron", sans-serif;
    }

    @media (max-width: 1500px) {
      h1 {
        letter-spacing: 30px;
        font-size: 50px;
      }
    }
    @media (max-width: 1030px) {
      height: 60px;
      width: 100%;
      margin: 10px 0 0;
      h1 {
        letter-spacing: 30px;
        font-size: 40px;
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
