import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(motion.div)`
  min-height: 80px;
  width: 95%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  color: #ea5454;
  background-color: rgba(45, 64, 89, 0.3);
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  margin: 20px auto;
  font-size: 30px;
  letter-spacing: 2px;
  user-select: none;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  a {
    height: 100%;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-transform: capitalize;
    z-index: 2;
    color: inherit;
    text-shadow: 3px 3px 5px black;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.4);

    @media (max-width: 750px) {
      font-size: 24px;
      padding: 10px;
    }

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

const dull = { fontSize: "1rem", color: "#ffffff69" };

const ListItem = ({ name, path, image, style, right }) => {
  return (
    <Container
      style={style}
      image={image}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1.03 }}
    >
      <Link to={path}>
        <span>{name}</span>
        {right ? <span style={dull}>({right})</span> : ""}
      </Link>
    </Container>
  );
};

export default ListItem;
