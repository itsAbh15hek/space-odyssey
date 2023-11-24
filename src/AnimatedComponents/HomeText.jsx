import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 120px;
  text-align: ${(props) => props.align};
  h1 {
    font-family: "Orbitron", sans-serif;
    font-size: 60px;
  }

  .hero {
    letter-spacing: 10px;
    font-size: 120px;
    padding: 60px 100px;
    text-shadow: 2px 2px 2px black;
    background-color: rgba(45, 64, 89, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 5px;

    @media (max-width: 1000px) {
      font-size: 80px;
      padding: 60px 100px;
    }
    @media (max-width: 800px) {
      font-size: 60px;
      padding: 60px 60px;
    }
    @media (max-width: 570px) {
      font-size: 40px;
      padding: 40px 40px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
      padding: 30px 30px;
    }
  }
  @media (max-width: 1000px) {
    margin: 20px;
  }
`;
const HomeText = ({ el }) => {
  let align = "center";
  if (el.alignment === "start") align = "left";
  if (el.alignment === "end") align = "right";
  return (
    <Container align={align}>
      <h1 className={el.id === 1 ? "hero" : ""}>{el.title}</h1>
      {!(el.id === 1) && (
        <>
          <p>{el.diameter}</p>
          <p>{el.temperature}</p>
          <p>{el.composition}</p>
        </>
      )}
    </Container>
  );
};

export default HomeText;
