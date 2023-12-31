import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  width: 100%;
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

  @media (max-width: 750px) {
    padding: 30px 30px;
  }

  h2 {
    margin: 0px auto 20px;
  }


  img {
    max-height: 400px;
    max-width: 100%;
    object-fit: contain;
    aspect-ratio: 16/9;
    margin: 10px auto;
  }

  h3 {
    margin: 10px auto;
    color: #ea5454;
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  .info {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-areas:"hdurl copyright ";

    @media (max-width: 375px) {
      grid-template-areas:"copyright" "hdurl" ;
      row-gap: 10px;
    }

    a {
      text-decoration: none;
      border: 1px solid;
      padding: 5px 15px;
      border-radius: 5px;
      transition: all 0.25s ease;
      grid-area: hdurl;

      &:hover {
        background-color: #ea5454;
      }
    }

    p {
      grid-area: copyright;

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
            <a href={image.hdurl} target="_blank">
              View in HD
            </a>
            <p>{` ©${image.copyright}`}</p>
          </div>
        </>
      )}
    </Container>
  );
};

export default NPOTD;
