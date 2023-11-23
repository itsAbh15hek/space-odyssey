import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest, userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
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
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  h1 {
    margin-bottom: 20px;
  }
  .news-list {
  }
`;

const News = styled.div`
  width: 95%;
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
  h2 {
    margin: 0px auto 20px;
    color: #ea5454;
  }
  img {
    height: 300px;
    width: 500px;
    margin: 10px auto;
    object-fit: cover;
  }
  .summary {
    margin: 10px auto 30px;
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
        background-color: #ea5454;
      }
    }
  }
`;

const NewsList = () => {
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const [newsList, setNewsList] = useState([]);
  const getNews = async () => {
    const { data } = currentUser
      ? await userRequest.get("news/news/0")
      : await publicRequest.get("news/news/0");
    console.log("news", data.data.news);
    setNewsList(data.data.news);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container>
      <h1>Latest Space News</h1>
      {newsList[0] && (
        <div className="news-list">
          {newsList?.map((news) => (
            <News key={news.id}>
              <h2>{news.title}</h2>
              <img src={news.image} loading="lazy" />
              <p className="summary">{news.summary}</p>
              <div className="info">
                <a href={news.externalUrl} target="_blank">
                  Visit Article
                </a>
                <p>{news.publishedAt.split("T")[0]}</p>
              </div>
            </News>
          ))}
        </div>
      )}
    </Container>
  );
};

export default NewsList;
