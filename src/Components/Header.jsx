import React from "react";
import styled from "styled-components";

const Header = () => {
  const Main = styled.div`
    height: 80px;
    //width: 95%;
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
      font-weight: 800;
      text-align: center;
      letter-spacing: 30px;
      font-size: 50px;

      font-family: "Orbitron", sans-serif;
    }

    @media (max-width: 1000px) {
      h1 {
        font-size: 2.5rem;
        letter-spacing: 25px;
      }
    }
    @media (max-width: 770px) {
      h1 {
        font-size: 35px;
        letter-spacing: 20px;
      }
    } 
    
    @media (max-width: 620px) {
      margin: 0;
      h1 {
        //font-size: 30px;
        letter-spacing: 1px;
      }
    }  
    
    @media (max-width: 430px) {
      margin: 0;
      h1 {
        font-size: 30px;
        letter-spacing: 1px;
      }
    }   
    @media (max-width: 370px) {
      h1 {
        font-size: 25px;
      }
    }
    //@media (max-width: 1030px) {
    //  height: 80px;
    //  width: 100%;
    //  margin: 10px 0 0;
    //  h1 {
    //    letter-spacing: 30px;
    //    font-size: 50px;
    //  }
    //}
    //
    //@media (max-width: 893px) {
    //  h1 {
    //    letter-spacing: 25px;
    //
    //  }
    //}
    //
    //@media (max-width: 827px) {
    //  h1 {
    //    font-size: 40px;
    //
    //  }
    //}
    //
    //@media (max-width: 726px) {
    //  h1 {
    //    font-size: 35px;
    //    letter-spacing: 20px;
    //  }
    //}
    //
    //@media (max-width: 370px) {
    //  h1 {
    //    font-size: 30px;
    //    letter-spacing: 18px;
    //
    //  }
    //}
  `;
  return (
    <Main>
      <h1>Space Odyssey</h1>
    </Main>
  );
};

export default Header;
