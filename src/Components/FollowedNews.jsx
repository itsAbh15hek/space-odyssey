import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-around;
  z-index: 2;
  color: #ea5454;
  background-color: rgba(45, 64, 89, 0.15);
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);

  letter-spacing: 2px;
  user-select: none;
  padding-bottom: 50px;

  h1 {
    font-family: "Expletus Sans", sans-serif;
    font-size: 30px;
    color: #ea5455;
    margin: 30px;
  }

  @media (max-width: 750px) {
    border-radius: 5px;
    h1 {
      font-size: 24px;
      margin: 10px;
      font-weight: normal;
    }
  }
  
  @media (max-width: 580px) {
    h1 {
      font-size: 18px;
      padding: 10px;
    }
  }
`;
const Agencies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .agency {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      margin: 0 0 10px;
    }

    p {
      margin: 0 auto;
      text-align: center;
    }
  }

  @media (max-width: 750px) {
    .agency {
      img {
        transform: scale(0.9);
      }

      p {
        font-size: 14px;
      }
    }
  }


  @media (max-width: 580px) {
    .agency {
      * {
        transform: scale(0.8);
      }
    }
  }
`;
const FollowedNews = ({AgencyList}) => {
    return (
        <Container>
            <h1>News Agencies followed</h1>
            <Agencies>
                {AgencyList?.map((agency) => (
                    // <div className="agency">
                        <div key={agency?.name} className="agency">
                            <img src={agency?.image} alt=""/>
                            <p>{agency?.name}</p>
                        </div>
                    // </div>
                ))}
            </Agencies>
        </Container>
    );
};

export default FollowedNews;
