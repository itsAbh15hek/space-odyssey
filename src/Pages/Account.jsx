import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import staryBG from "../assets/staryBG.mp4";
import MainContainer from "../Components/MainContainer";
import NavBar from "../Components/NavBar";
import ScrollableComponent from "../Components/ScrollableComponent";
import { useDispatch, useSelector } from "react-redux";
import { getQuizList } from "../redux/apiCalls/quizApiCalls";
import SubmittedQuizList from "../Components/QuizSpecific/SubmittedQuizList";
import FollowedNews from "../Components/FollowedNews";
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
  height: 200px;
  width: 100%;
  display: flex;
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

    h1 {
      font-family: "Expletus Sans", sans-serif;
      font-size: 50px;
      color: #ea5455;
      margin-bottom: 5px;
    }
  }
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
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
    &:hover {
      padding: 10px 18px;
      letter-spacing: 1.2px;
    }
  }
`;
const Account = () => {
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );
  const navigate = useNavigate();
  const quizList = useSelector((state) => state.quizes.quizList);
  console.log("currentUser", currentUser);
  const dispatch = useDispatch();

  const getQuizes = () => {
    getQuizList(dispatch);
  };
  useEffect(() => {
    getQuizes();
    if (!currentUser) navigate("/login");
  }, []);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ScrollableComponent>
          <UserContainer>
            <div className="credentials">
              <div>
                <h1>{currentUser?.name}</h1>
                <h3>{`@${currentUser?.username}`}</h3>
              </div>
              <Link to={"/editProfile"}>Edit Profile</Link>
            </div>
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=826&t=st=1700506056~exp=1700506656~hmac=e3ca4e75d9d5e37baae8eaf03719bae8756c0a8a87598651d44ccee23526885a"
              alt=""
            />
          </UserContainer>
          <FollowedNews AgencyList={currentUser?.follows} />
          <SubmittedQuizList quizList={quizList} />
        </ScrollableComponent>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Account;
