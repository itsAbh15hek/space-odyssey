import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div``;
const RealTime = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #ea5454;
    font-family: "Expletus Sans", sans-serif;
    text-align: center;
  }
  h4 {
    margin-bottom: 30px;
    font-family: "Expletus Sans", sans-serif;
    text-align: center;
  }
  p {
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
  }
`;
const People = styled.div``;
const ISSComponents = () => {
  const [realTime, setRealTime] = useState({});
  const getRealTimeData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const { name, id, timestamp, ...worthyData } = data;
      setRealTime(worthyData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRealTimeData();
  }, []);

  setTimeout(() => {
    getRealTimeData();
  }, 5000);

  return (
    <Container>
      <RealTime>
        <h2>Real-Time Data of the ISS</h2>
        <h4>Source: api.wheretheiss.at</h4>
        {Object.entries(realTime).map((el) => (
          <p>
            <span>{`${el[0]} :`} </span>{" "}
            <span className="spanData">{`${el[1]}`}</span>
          </p>
        ))}
      </RealTime>
      <People></People>
    </Container>
  );
};

export default ISSComponents;
