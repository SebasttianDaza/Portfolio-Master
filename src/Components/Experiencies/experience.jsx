import "./experience.css";
import { Card } from "../Hobbies/hobbies";

const Experience = (props) => {

    const experience = props.experience.map((experience, index) => {
        return (
            <Card key={index} name={experience.title} image={experience.image} description={experience.data} clases="experienceChild" clasesChild="experienceImage" clasesInformation="experienceInfo" classText="title" classTextSecond="titleSecond" otherElement={<p className="description" >{experience.description}</p>}></Card>
        );
    })

    return (
        <section className="Experience">
            {experience}
        </section>
    )
}

export default Experience;