import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  h1 {
    color: #ea5454;
    font-size: 40px;
    font-family: "Expletus Sans", sans-serif;
    margin: 30px 0;
  }
  h2 {
    margin-top: 20px;
  }
`;

const RoverComponent = ({ roverList }) => {
  const getRoverList = async () => {};

  return (
    <Container>
      <h1>Rovers currently on the surface of Mars</h1>
      {roverList.map((rover) => (
        <div>
          <h2>{rover.rover}</h2>
          <p>{`Launch Date: ${rover.launch}`}</p>
          <p>{`Landing Date: ${rover.landing}`}</p>
          <p>{`Duration on Mars: ${rover.duration}`}</p>
        </div>
      ))}
      <h1>Pictures clicked by Rovers</h1>
    </Container>
  );
};

export default RoverComponent;
