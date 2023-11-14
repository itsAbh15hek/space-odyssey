import React from "react";
import HomeTextPage from "./HomeTextPage";
import HomeText from "./HomeText";

const HomeTextPageContainer = () => {
  const textContent = [
    {
      id: 1,
      title: "SPACE ODYSSEY",
      alignment: "center",
    },
    {
      id: 2,
      title: "Sun",
      diameter: "1.4 Million Killometers",
      temperature: "5,973°C to 15,000,000°C",
      composition: "Primarily hydrogen and helium",
      alignment: "start",
    },
    {
      id: 3,
      title: "Mercury",
      diameter: "4,880 kilometers",
      temperature: "-173°C to 427°C",
      composition: "Rocky",
      alignment: "start",
    },
    {
      id: 4,
      title: "Venus",
      diameter: "12,104 kilometers",
      temperature: "462°C",
      composition: "Rocky with thick atmosphere",
      alignment: "end",
    },
    {
      id: 5,
      title: "Earth",
      diameter: "12,742 kilometers",
      temperature: "-88°C to 58°C",
      composition: "Rocky with diverse ecosystems",
      alignment: "start",
    },
    {
      id: 6,
      title: "Mars",
      diameter: "6,779 kilometers",
      temperature: "-87°C to -5°C",
      composition: "Rocky with thin atmosphere",
      alignment: "end",
    },
    {
      id: 7,
      title: "Jupiter",
      diameter: "139,820 kilometers",
      temperature: "-145°C",
      composition: "Gas giant with hydrogen and helium",
      alignment: "end",
    },
    {
      id: 8,
      title: "Saturn",
      diameter: "116,460 kilometers",
      temperature: "-178°C",
      composition: "Gas giant with hydrogen and helium, and prominent rings",
      alignment: "end",
    },
    {
      id: 9,
      title: "Uranus",
      diameter: "50,724 kilometers",
      temperature: "-224°C",
      composition: "Ice giant with hydrogen, helium, and methane",
      alignment: "start",
    },
    {
      id: 10,
      title: "Neptune",
      diameter: "49,244 kilometers",
      temperature: "-218°C",
      composition: "Ice giant with hydrogen, helium, and methane",
      alignment: "end",
    },
  ];
  return (
    <>
      {textContent.map((el) => (
        <HomeTextPage key={el.id} alignment={el.alignment}>
          <HomeText el={el} />
        </HomeTextPage>
      ))}
    </>
  );
};

export default HomeTextPageContainer;
