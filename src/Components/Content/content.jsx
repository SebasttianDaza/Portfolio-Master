import React from "react";
import Skills from "../Skills/skills";
import Blog from "../Blog/blog";
import Hobbies from "../Hobbies/hobbies";

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
          image: "https://i.imgur.com/qQYXQZu.png",
          description: "I love playing games, especially with my friends"
        },
        {
          name: "Gym and Fitness",
          image: "https://i.imgur.com/qQYXQZu.png",
          description: "I love playing games, especially with my friends"
        }, 
        {
          name: "Football",
          image: "https://i.imgur.com/qQYXQZu.png",
          description: "I love playing games, especially with my friends"
        }
      ]

    return (
      <main style={style}>
        <section>
          <Skills skills={skills}></Skills>
          <Hobbies hobbies={hobbies}></Hobbies>
        </section>
        <section>
          <Blog></Blog>
        </section>
      </main>
    );
  }
}

export default Content;
