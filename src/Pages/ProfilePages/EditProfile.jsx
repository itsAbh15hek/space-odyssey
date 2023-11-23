import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import staryBG from "../../assets/staryBG.mp4";
import MainContainer from "../../Components/MainContainer";
import NavBar from "../../Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import ScrollableComponent from "../../Components/ScrollableComponent";
import { updateUser } from "../../redux/apiCalls/apiCalls";
import Loader from "../../Components/Loader";
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
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    font-family: "Expletus Sans", sans-serif;
    font-size: 80px;
    color: #ea5455;
    margin-bottom: 40px;
  }
  a {
    margin: 20px;
    padding: 14px 20px;
    border: 1px solid #ea5455;
    border-radius: 5px;
    width: 600px;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s ease;
    &:hover {
      letter-spacing: 1.2px;
      color: #ea5455;
      border: 1px solid #decdc3;
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
  h2 {
    font-size: 30px;
    text-align: center;
    margin: 50px auto 30px;
  }
  input {
    background-color: transparent;
    outline: none;
    border: 1px solid;
    border-radius: 30px;
    width: 600px;
    font-size: 15px;
    padding: 15px 30px;
    margin: 0 auto;
  }
  h3 {
    font-size: 20px;
    margin: 20px auto;
  }
  .container {
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-around;

    div {
      width: 95%;
      text-align: center;
    }
  }
  button {
    color: #ea5455;
    background-color: transparent;
    border: 1px solid;
    padding: 15px 30px;
    margin: 50px auto;
    font-weight: 600;
    font-size: 20px;
    border-radius: 30px;
    &:hover {
      color: #decdc3;
      background-color: #ea5455;
    }
  }
`;
const Agency = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 30px;
  margin: 15px;
  user-select: none;
  &:hover {
    span,
    h4 {
      color: #ea5455;
    }
  }
  img {
    height: 80px;
    width: 80px;
    object-fit: contain;
    border: none;
  }
  span {
    font-size: 30px;
  }
`;

const EditProfile = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.user.isFetching);
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const userData = currentUser?.data?.user;
  const [name, setName] = useState(userData?.name);
  const [allAgencies, setAllAgencies] = useState([]);
  const [following, setFollowing] = useState([]);
  const [unfollowing, setUnfollowing] = useState([]);
  const getAllAgencies = async () => {
    const { data } = await publicRequest("/news/spaceAgencies");
    setAllAgencies(data?.data?.agencies);
  };
  useEffect(() => {
    getAllAgencies();
    setFollowing(userData?.follows);
  }, []);
  useEffect(() => {
    const res = [];
    allAgencies?.forEach((el) => {
      let match = false;
      following?.forEach((element) => {
        if (element.name === el.name) {
          match = true;
        }
      });
      if (match === false) res.push(el);
    });
    setUnfollowing(res);
  }, [allAgencies, following]);

  const addAgency = (agency) => {
    setUnfollowing(unfollowing.filter((el) => el.name !== agency.name));
    setFollowing([...following, agency]);
  };
  const removeAgency = (agency) => {
    setFollowing(following?.filter((el) => el.name !== agency.name));
    unfollowing([...unfollowing, agency]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(dispatch, {
      name: name,
      follows: following?.map((el) => el.name),
    });
  };

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        {isFetching && <Loader />}
        {!isFetching && (
          <ScrollableComponent>
            <Container>
              <h1>Edit Profile</h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Change Name</h2>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="New Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <h2>Manage News Agencies</h2>
                {!unfollowing[0] && <Loader />}
                {unfollowing[0] && (
                  <>
                    <div className="container">
                      <div className="following">
                        <h3>Following</h3>
                        {following?.map((agency) => (
                          <Agency onClick={() => removeAgency(agency)}>
                            <img src={agency.image} />
                            <h4>{agency.name}</h4>
                            <span>-</span>
                          </Agency>
                        ))}
                      </div>
                      <div className="unfollowing ">
                        <h3>Unfollowing</h3>
                        {unfollowing.map((agency) => (
                          <Agency onClick={() => addAgency(agency)}>
                            <img src={agency.image} />
                            <h4>{agency.name}</h4>
                            <span>+</span>
                          </Agency>
                        ))}
                      </div>
                    </div>
                    <button type="submit">Update Profile</button>
                  </>
                )}
              </form>
            </Container>
          </ScrollableComponent>
        )}
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default EditProfile;
