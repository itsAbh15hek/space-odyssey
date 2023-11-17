import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEarthAmericas,
  faFeatherPointed,
  faNewspaper,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimationControls } from "framer-motion";

const Navigation = styled.div`
  background-color: transparent;
  position: absolute;
  bottom: 0;
  z-index: 10;

  height: 120px;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1030px) {
    height: 100px;
  }
`;
const List = styled.ul`
  height: 110px;
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  background-color: rgba(45, 64, 89, 0.2);
  border-radius: 15px;
  padding: 0 50px;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  li {
    list-style: none;
    position: relative;
    height: 80px;
    width: 80px;
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
    font-size: 40px;
    color: #decdc3;
  }

  p {
    position: absolute;
    color: #ea5455;
    font-weight: 600;
    letter-spacing: 3px;
    font-size: 20px;
    opacity: 0;
    top: 60px;

    font-family: "Expletus Sans", sans-serif;
  }

  .indicator {
    height: 80px;
    width: 80px;
    box-sizing: content-box;
    background-color: rgba(45, 64, 89, 0.7);
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    top: calc(-50% - 20px);
    border: solid #ea5454 10px;
  }

  @media (max-width: 1030px) {
    transform: scale(0.8);
  }
`;

const NavBar = () => {
  const Location = useLocation();
  const pathname = `/${Location.pathname.split("/")[1]}`;
  const user = false;

  const navs = [
    {
      id: 1,
      path: "/",
      icon: <FontAwesomeIcon icon={faEarthAmericas} />,
      text: "Home",
    },
    {
      id: 2,
      path: "/lessons",
      icon: <FontAwesomeIcon icon={faScroll} />,
      text: "Lessons",
    },
    {
      id: 3,
      path: "/history",
      icon: <FontAwesomeIcon icon={faNewspaper} />,
      text: "History",
    },
    {
      id: 4,
      path: "/quizes",
      icon: <FontAwesomeIcon icon={faFeatherPointed} />,
      text: "Quizes",
    },
    {
      id: 5,
      path: `/${user ? "account" : "login"}`,
      icon: <FontAwesomeIcon icon={faCircleUser} />,
      text: "Account",
    },
  ];

  const iconControls = useAnimationControls();
  const textControls = useAnimationControls();

  useEffect(() => {
    iconControls.start({
      translateY: -50,
      transition: { ease: "easeInOut", duration: 0.5 },
    });
  }, [pathname]);
  useEffect(() => {
    textControls.start({
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.5 },
    });
  }, [pathname]);

  return (
    <Navigation>
      <List>
        {navs.map((nav) => (
          <li
            className={`${pathname === nav.path ? "active" : ""}`}
            key={nav.id}
          >
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
