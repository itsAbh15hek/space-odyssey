import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: rgba(45, 64, 89, 0.1);
  border-radius: 15px;
  padding: 50px 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  h2 {
    margin: 0px auto 20px;
  }
  img {
    height: 400px;
    aspect-ratio: 16/9;
    margin: 10px auto;
  }
  h3 {
    margin: 10px auto;
    color: #ea5454f9;
  }
  .info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      border: 1px solid;
      padding: 5px 15px;
      border-radius: 5px;
      transition: all 0.25s ease;
      &:hover {
        background-color: #ea5454f9;
      }
    }
  }
`;
const NPOTD = () => {
  const [image, setImage] = useState({});
  const getPic = async () => {
    const { data } = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=j0K88dEHn4m0JoN2CgwAxZ2Uda3rUiiH8f5IfLOW"
    );
    setImage({
      title: data.title,
      url: data.url,
      hdurl: data.hdurl,
      copyright: data.copyright,
    });
  };
  useEffect(() => {
    getPic();
  }, []);

  return (
    <Container>
      {!image.title && <Loader />}
      {image.title && (
        <>
          <h2>Nasa's Picture of the Day</h2>
          <img src={image.url} />
          <h3>{image.title}</h3>
          <div className="info">
            <a href={image.hdurl}>View in HD</a>
            <p>{` ©${image.copyright}`}</p>
          </div>
        </>
      )}
    </Container>
  );
};

export default NPOTD;
