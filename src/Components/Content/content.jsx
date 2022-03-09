import React from "react";
import Skills from "../Skills/skills";
import Blog from "../Blog/blog";
import Hobbies from "../Hobbies/hobbies";
import Experience from  "../Experiencies/experience";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const style = {
        display : "grid",
        width : "100%",
        height : "auto",
        gridTemplateColumns : "repeat(auto-fit, minmax(300px, 1fr))",
        margin: "2rem 0",
        gridGap: "2rem",
        
      }

      const skills = [
        "React",
        "Javascript",
        "Redux",
        "CSS",
        "Node",
        "Firebase",
        "TypeScript",
        "Git",
        "MySQL",
        "Docker",
        
      ]

      const hobbies = [
        {
          name: "Gaming",
          image:
            "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/control-game-ps4-4k-2c.jpg?alt=media&token=16eef8ba-d031-4bf3-bde2-47287fc6bd01",
          description: "I love playing games, especially with my friends",
        },
        {
          name: "Gym and Fitness",
          image:
            "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/376086-4k-wallpaper.jpg?alt=media&token=acef17b7-1791-4ec4-8523-493d31caf2ea",
          description: "I like be taking care of my health and my body ",
        },
        {
          name: "Programming and Reading",
          image:"https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/una-taza-de-javascript.png?alt=media&token=fa8363da-9d7d-4bfc-a3d5-104808121488",
          description: "I like be creating and development projects personal",
        },
      ];

      const experience = [
        {
          data: "Feb 2017 - Current",
          title: "Full Stack Developer",
          image:"https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/7422528_adidas_sport_sports_exercise_icon.svg?alt=media&token=31fce1d1-661e-48fc-be9c-787bdd05a507",
          description:"I am a full stack developer, I have experience in React, Javascript, Node, Firebase, TypeScript, Git, MySQL, Docker, HTML, CSS, and more.",
        },
        {
          data: "Feb 2017 - Current",
          title: "Full Stack Developer",
          image:"https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/7422528_adidas_sport_sports_exercise_icon.svg?alt=media&token=31fce1d1-661e-48fc-be9c-787bdd05a507",
          description:"I am a full stack developer, I have experience in React, Javascript, Node, Firebase, TypeScript, Git, MySQL, Docker, HTML, CSS, and more.",
        },
      ];

    return (
      <main style={style}>
        <section>
          <Skills skills={skills}></Skills>
          <Hobbies hobbies={hobbies}></Hobbies>
        </section>
        <section>
          <Blog></Blog>
          <Experience experience={experience}></Experience>
        </section>
      </main>
    );
  }
}

export default Content;
