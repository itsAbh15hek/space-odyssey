import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(45, 64, 89, 0.1);
  border-radius: 15px;
  padding: 50px 50px;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 750px) {
    padding: 30px 30px;
  }

  a {
    text-decoration: none;
    border: 1px solid;
    padding: 5px 15px;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #ea5454;
    height: min-content;

    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }
`;
const Agencies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 450px) {
    flex-direction: column;
  }

  h3 {
    margin-bottom: 20px;
  }

  .agency-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    img {
      height: 50px;
      width: 50px;
      object-fit: contain;
      margin-right: 20px;
    }
  }
`;
const FollowedAgencies = () => {
    const follows = useSelector(
        (state) => state?.user?.currentUser?.data?.user?.follows
    );
    return (
        <Container>
            <h3>Followed Agencies</h3>
            <Agencies>
                <div className="agency-list">
                    {follows?.map((agency) => (<img src={agency.image}/>))}
                </div>
                <Link to={"/user/settings/editprofile"}>Change</Link>
            </Agencies>
        </Container>
    );
};

export default FollowedAgencies;
