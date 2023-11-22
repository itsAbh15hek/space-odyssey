import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Header";
import NavBar from "../../../Components/NavBar";
import MainContainer from "../../../Components/MainContainer";
import ScrollableComponent from "../../../Components/ScrollableComponent";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../../requestMethods";
import Loader from "../../../Components/Loader";

const Main = styled.div`
  height: 100vh;
  width: 100vw;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Heading = styled.h1`
  color: #ea5454f9;
  font-size: 50px;
  font-family: "Expletus Sans", sans-serif;
  margin-bottom: 30px;
`;
const Img = styled.img`
  width: 80%;
  aspect-ratio: 16/9;
  background-color: rgba(45, 64, 89, 0.3);
  border-radius: 10px;
  object-fit: contain;
  margin-bottom: 20px;
`;
const Info = styled.p`
  margin: 30px auto;
  text-align: justify;
  line-height: 1.5;
`;
const Li = styled.p`
  margin: 10px 0 0 0;
`;

const CelestialDetails = () => {
  const [status, setStatus] = useState(-1);
  const [itemData, setItemData] = useState({});
  const Location = useLocation();
  const pathname = Location.pathname;
  const path = pathname.split("/")[3];

  const getData = async () => {
    setStatus(1);
    try {
      console.log("first", pathname, path);

      const { data } = await publicRequest.get(`${pathname}`);
      setItemData(data.data);
      console.log("data", data);
      setStatus(0);
    } catch (error) {
      console.log(error);
      setStatus(-1);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Main>
      <Header />
      <MainContainer>
        {status === 1 && <Loader />}
        {status === 0 && (
          <ScrollableComponent>
            <Heading>
              {itemData?.englishName ? itemData.englishName : path}
            </Heading>
            {itemData?.image && <Img src={itemData.image} alt="" />}
            {itemData?.info && <Info>{itemData.info}</Info>}
            {itemData?.facts && <Info>{itemData.facts.map(fact=><Li>{fact}</Li>)}</Info>}
          </ScrollableComponent>
        )}
        {status === -1 && <p>Something went wrong</p>}
      </MainContainer>{" "}
      <NavBar />
    </Main>
  );
};

export default CelestialDetails;
