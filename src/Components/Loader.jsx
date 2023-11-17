import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const Span = styled(motion.span)`
  margin: auto;
`;
const Loader = () => {
  return (
    <Span
      animate={{ translateY: [0, -20, 0, -10, 0] }}
      transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}
    >
      <FontAwesomeIcon icon={faCircleDot} />
    </Span>
  );
};

export default Loader;
