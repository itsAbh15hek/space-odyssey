import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: fit-content;
  width: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  color: #ea5454f9;
  background-color: rgba(45, 64, 89, 0.15);
  border-radius: 15px;
  border-top: 1px solid #decdc3;
  border-left: 1px solid #decdc3;
  margin: 30px auto;
  letter-spacing: 2px;
  user-select: none;
  padding-bottom: 50px;

  h1 {
    font-family: "Expletus Sans", sans-serif;
    font-size: 30px;
    color: #ea5455;
    margin: 30px auto;
    text-align: center;
  }
`;
const Agencies = styled.div`
  width: 80%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .agency {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    img {
      height: 80px;
      width: 80px;
      object-fit: contain;
    }
    p {
      margin: 0 auto;
      text-align: center;
    }
  }
`;
const FollowedNews = ({ AgencyList }) => {
  return (
    <Container>
      <h1>News Agencies followed by you</h1>
      <Agencies>
        {AgencyList?.map((agency) => (
          <div className="agency">
            <img src={agency.image} alt="" />
            <p>{agency.name}</p>
          </div>
        ))}
      </Agencies>
    </Container>
  );
};

export default FollowedNews;
