import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
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
  .date-component {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    span {
      font-size: 20px;
      margin-right: 20px;
      font-weight: 600px;
    }
    input {
      background-color: rgba(255, 255, 255, 0.3);
      outline: none;
      border: none;
      padding: 5px 15px;
    }
    button {
      text-decoration: none;
      border: 1px solid;
      padding: 5px 15px;
      border-radius: 5px;
      transition: all 0.25s ease;
      background-color: transparent;
      color: #ea5454;
      height: min-content;
      margin-left: 15%;

      &:hover {
        background-color: #ea5454;
        color: #decdc3;
      }
    }
  }
`;

const Image = styled.div`
  width: 95%;
  //max-width: 100%;
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
  margin: 10px auto;

  @media (max-width: 450px) {
    padding: 30px 15px;
  }

  h2 {
    margin: 0px auto 20px;
    color: #ea5454;

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  img {
    max-height: 300px;
    max-width: 95%;
    margin: 10px auto;
    object-fit: cover;
    object-position: center;
  }

  .summary {
    margin: 10px auto 30px;
  }

  a {
    text-decoration: none;
    border: 1px solid;
    padding: 5px 15px;
    border-radius: 5px;
    transition: all 0.25s ease;

    &:hover {
      background-color: #ea5454;
    }
  }
`;

const RoverComponent = ({ roverList }) => {
  const [imageDate, setImageDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [imageList, setImageList] = useState([]);

  const getImages = async () => {
    try {
      if (!imageDate) alert("Select a valid date!");
      if (imageDate) {
        const { data } = await publicRequest(
          `/lessons/missions/Mars_rover/${imageDate}`
        );
        console.log("images", data);
        setImageList(data?.photos);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
    setImageDate(date);
    setMaxDate(date);
  }, []);

  useEffect(() => {
    console.log("date format", imageDate);
  }, [imageDate]);

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
      <label htmlFor="date" className="date-component">
        <span>Select Date: </span>
        <input
          value={imageDate}
          type="date"
          max={maxDate}
          onChange={(e) => setImageDate(e.target.value)}
        />
        <button type="button" onClick={(e) => getImages()}>
          Fetch Images
        </button>
      </label>
      {imageList?.length > 0 && (
        <div className="news-list">
          {imageList?.map((image) => (
            <Image key={image.id}>
              <img
                src={image.img_src}
                loading="lazy"
                onError={(e) => {
                  e.target.remove();
                }}
              />
              <h2>{`Rover: ${image.roverName}`}</h2>
              <p className="summary">{`Camera: ${image.camera}`}</p>
              <a href={image.img_src} target="_blank">
                View Full Image
              </a>
            </Image>
          ))}
        </div>
      )}
    </Container>
  );
};

export default RoverComponent;
