import React from "react";
import Skills from "../Skills/skills";

class Main extends React.Component {
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

    return (
      <main style={style}>
        <section>
          <Skills skills={skills}></Skills>
        </section>
        <section></section>
      </main>
    );
  }
}

export default Main;
