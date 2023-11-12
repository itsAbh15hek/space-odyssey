import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faFeatherPointed,
  faNewspaper,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimationControls } from "framer-motion";

const Navigation = styled.div`
  font-family: "Expletus Sans", sans-serif;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 10;

  height: 120px;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const POTD = styled.div``;
const List = styled.ul`
  height: 100px;
  width: 700px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 50px;

  li {
    list-style: none;
    position: relative;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    z-index: 2;
  }
  span {
    position: relative;
    display: block;
    font-size: 60px;
    color: pink;
  }

  /* li.active span {
    transform: translateY(-50px);
  } */

  p {
    position: absolute;
    color: #e7687d;
    font-weight: 600;
    letter-spacing: 3px;
    font-size: 20px;
    opacity: 0;
    top: 60px;
  }

  /* li.active p {
    opacity: 1;
  } */

  .indicator {
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    background-color: #000000;
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    top: calc(-50% - 12px);
    border: solid #fff 15px;
  }
`;

const NavBar = () => {
  const { pathname } = useLocation();

  const navs = [
    {
      path: "/",
      icon: <FontAwesomeIcon icon={faEarthAmericas} />,
      text: "Home",
    },
    {
      path: "/lessons",
      icon: <FontAwesomeIcon icon={faScroll} />,
      text: "Lessons",
    },
    {
      path: "/history",
      icon: <FontAwesomeIcon icon={faNewspaper} />,
      text: "History",
    },
    {
      path: "/quizes",
      icon: <FontAwesomeIcon icon={faFeatherPointed} />,
      text: "Quizes",
    },
  ];

  const iconControls = useAnimationControls();
  const textControls = useAnimationControls();

  useEffect(() => {
    iconControls.start({ translateY: -50, transition: { duration: 0.5 } });
  }, []);
  useEffect(() => {
    textControls.start({ opacity: 1 });
  }, []);

  return (
    <Navigation>
      <POTD></POTD>
      <List>
        {navs.map((nav) => (
          <li className={`${pathname === nav.path ? "active" : ""}`}>
            <Link to={nav.path}>
              {
                <motion.span
                  animate={pathname === nav.path ? iconControls : ""}
                >
                  {nav.icon}
                </motion.span>
              }
              <motion.p animate={pathname === nav.path ? textControls : ""}>
                {nav.text}
              </motion.p>
            </Link>
            {pathname === nav.path && (
              <motion.div className="indicator" layoutId="ind"></motion.div>
            )}
          </li>
        ))}
      </List>
    </Navigation>
  );
};

export default NavBar;

/*<li className={`${pathname === "/" ? "active" : ""}`}>
          <Link to={"/"}>
            <span>
              <FontAwesomeIcon icon={faEarthAmericas} />
            </span>
            <p>Home</p>
          </Link>
        </li>
        <li className={`${pathname === "/lessons" ? "active" : ""}`}>
          <Link to={"/lessons"}>
            <span>
              <FontAwesomeIcon icon={faScroll} />
            </span>
            <p>Lessons</p>
          </Link>
        </li>
        <li className={`${pathname === "/history" ? "active" : ""}`}>
          <Link to={"/history"}>
            <span>
              <FontAwesomeIcon icon={faNewspaper} />
            </span>
            <p>History</p>
          </Link>
        </li>
        <li className={`${pathname === "/quizes" ? "active" : ""}`}>
          <Link to={"/quizes"}>
            <span>
              <FontAwesomeIcon icon={faFeatherPointed} />
            </span>
            <p>Quizes</p>
          </Link>
        </li> */
