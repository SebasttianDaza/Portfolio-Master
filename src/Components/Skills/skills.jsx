import "./skills.css";

const Skills = (props) => {

    const skills = props.skills.map((skill, index) => {
        return (
            <div className="skill" key={index}>
                <p>{skill}</p>
            </div>
        );
    });

    return (
        <aside className="skills">
            <h3>FronTend</h3>
            <section className="skillContent">
                {skills}
            </section>
        </aside>
    )
}

export default Skills;