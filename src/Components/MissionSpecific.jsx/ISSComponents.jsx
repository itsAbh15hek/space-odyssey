import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {publicRequest} from "../../requestMethods";

const Container = styled.div``;
const RealTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
    margin: 5px;
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
  }
  
  div{
    display: flex;
    width: max-content;
    flex-direction: column;
  }
`;
const People = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  max-width: 600px;

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

  div {
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
  }

  img {
    height: 200px;
    width: 80%;
    margin: 0 auto;
    object-fit: contain;
  }

  p {
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
  }

  .issPeopleImages {
    width: 80vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ISSComponents = () => {
    const [realTime, setRealTime] = useState({});
    const [peopleList, setPeopleList] = useState([]);
    const getRealTimeData = async () => {
        try {
            const {data} = await axios.get(
                "https://api.wheretheiss.at/v1/satellites/25544"
            );
            const {name, id, timestamp, ...worthyData} = data;
            setRealTime(worthyData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            getRealTimeData();
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        getRealTimeData();
        getPeople();
    }, []);

    // setTimeout(() => {
    //   getRealTimeData();
    // }, 10000);

    const getPeople = async () => {
        try {
            const {data} = await publicRequest.get(
                "/lessons/missions/ISS/peopleInSpace"
            );
            console.log("ppt", data.data);
            setPeopleList(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <RealTime>
                <h2>Real-Time Data of the ISS</h2>
                <h4>Source: api.wheretheiss.at</h4>
                <div>
                    {Object.entries(realTime).map((el) => (
                        <p key={el[0]}>
                            <span>{`${el[0]} :`} </span>{" "}
                            <span className="spanData">{`${el[1]}`}</span>
                        </p>
                    ))}
                </div>
            </RealTime>
            <People>
                <h2>People in Space</h2>
                <h4>These are the people in the ISS right now!</h4>
                <div className="issPeopleImages">
                    {peopleList.map((el) => (
                        <div>
                            <img src={el.image} alt=""/>
                            <p>{el.person}</p>
                        </div>
                    ))}
                </div>

            </People>
        </Container>
    );
};

export default ISSComponents;
