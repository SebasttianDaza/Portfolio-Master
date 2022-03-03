import { Card } from "../Hobbies/hobbies";
import "./projects.css";


const Projects = (props) => {

    return (
      <footer className="styleProjects">
        <section className="cardStyle">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="">Vue</a>
            </li>
            <li>
              <a href="">Vue</a>
            </li>
            <li>
              <a href="">Vue</a>
            </li>
          </ul>
        </section>
        <section>
          <Card
            clases="projectCard"
            clasesChild="cardChild"
            image="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/URLShortener.png?alt=media&token=2a97466c-129e-41de-98c6-6c3035ebd30d"
            name="Checkout"
            clasesInformation="cardText"
            description="#HTML #CSS #JS"
            classText="titleCard"
            classTextSecond="descriptionCard"
          ></Card>
        </section>
      </footer>
    );
}

export default Projects;