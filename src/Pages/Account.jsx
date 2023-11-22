import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import staryBG from "../assets/staryBG.mp4";
import MainContainer from "../Components/MainContainer";
import NavBar from "../Components/NavBar";
import ScrollableComponent from "../Components/ScrollableComponent";
import { useDispatch, useSelector } from "react-redux";
import SubmittedQuizList from "../Components/QuizSpecific/SubmittedQuizList";
import FollowedNews from "../Components/FollowedNews";
import { getProfile } from "../redux/apiCalls/profileApiCalls";
import { logOut } from "../redux/userSlice";
import { clearProfile } from "../redux/profileSlice";
import Loader from "../Components/Loader";
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

const UserContainer = styled.div`
  //height: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "credential profilePick";
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  .credentials {
    height: 200px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
    grid-area: credential;

    h1 {
      font-family: "Expletus Sans", sans-serif;
      font-size: 50px;
      color: #ea5455;
      margin-bottom: 5px;
    }

    @media (max-width: 580px) {
      align-items: center;
    }
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
    grid-area: profilePick;
  }

  a {
    max-width: fit-content;
    color: #ea5455;
    padding: 10px 25px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #decdc3;
    text-decoration: none;
    box-sizing: border-box;
    transition: all 0.25s ease;
    margin-right: 20px;

    &:hover {
      background-color: #ea5455;
      color: #decdc3;
      cursor: pointer;
      user-select: none;
    }
  }

  @media (max-width: 750px) {
    img {
      transform: scale(0.8);
    }
  }
  @media (max-width: 580px) {
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "profilePick" 
        "credential";
    img {
      margin: -7%;
      transform: scale(0.7);
    }
  }
`;
const Account = () => {
  const profileDetils = useSelector((state) => state?.profile?.user);
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const navigate = useNavigate();
  const quizList = useSelector((state) => state?.profile?.quizList);
  console.log("currentUser", currentUser?.token);
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state?.profile?.isFetching);
  const error = useSelector((state) => state?.profile?.error);
  const getProfileData = () => {
    getProfile(dispatch);
  };

  useEffect(() => {
    if (!currentUser) navigate("/login");
    if (currentUser) getProfileData();
  }, [currentUser]);

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearProfile());
  };

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        {isFetching && <Loader />}
        {!isFetching && (
          <ScrollableComponent>
            <UserContainer>
              <div className="credentials">
                <div>
                  <h1>{profileDetils?.name}</h1>
                  <h3>{`@${profileDetils?.username}`}</h3>
                </div>
                <div className="options">
                  <Link to={"/user/settings"}>Settings</Link>
                  <a onClick={handleLogout}>Logout</a>
                </div>
              </div>
              <img
                src="https://img.freepik.com/premium-vector/ufo-cute-alien-cartoon-character-flying-saucer-vector-illustration-flat-design_20412-3319.jpg?size=626&ext=jpg&ga=GA1.1.1724254608.1700652806&semt=ais"
                alt="profile pick"
              />
            </UserContainer>
            <FollowedNews AgencyList={profileDetils?.follows} />
            <SubmittedQuizList quizList={quizList} />
          </ScrollableComponent>
        )}
        {error && <p>Something went wrong.</p>}
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Account;
