import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(motion.div)`
  height: 110px;
  width: 95%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  color: #ea5454f9;
  background-color: rgba(45, 64, 89, 0.3);
  border-radius: 15px;
  border-top: 1px solid #decdc3;
  border-left: 1px solid #decdc3;
  margin: 20px auto;
  font-size: 30px;
  letter-spacing: 2px;
  user-select: none;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 50%;
  a {
    height: 100%;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
    color: #ea5454f9;
    text-shadow: 3px 3px 5px black;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);
  }
`;
const ListItem = ({ name, path, image }) => {
  return (
    <Container
      image={image}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1.03 }}
    >
      <Link to={`/lessons/${path}`}>{name}</Link>
    </Container>
  );
};

export default ListItem;
