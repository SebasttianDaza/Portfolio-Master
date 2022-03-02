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
        "HTML",
        "CSS",
        "Node",
        "Firebase",
        "TypeScript",
        "Git",
        "MySQL",
        "Docker"
      ]

      const hobbies = [
        {
          name: "Gaming",
          image:
            "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/prueba.jpg?alt=media&token=cbf6a8d1-ec89-4f9b-88ca-e2d6026f5305",
          description: "I love playing games, especially with my friends",
        },
        {
          name: "Gym and Fitness",
          image:"https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/prueba.jpg?alt=media&token=cbf6a8d1-ec89-4f9b-88ca-e2d6026f5305",
          description: "I love playing games, especially with my friends",
        },
        {
          name: "Football",
          image:"https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/prueba.jpg?alt=media&token=cbf6a8d1-ec89-4f9b-88ca-e2d6026f5305",
          description: "I love playing games, especially with my friends",
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
