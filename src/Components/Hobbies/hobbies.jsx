import "./hobbies.css";

const Hobbies = (props) => {

    const hobbies = props.hobbies.map((hobby, index) => { 
        return (
            <Card key={index} name={hobby.name} image={hobby.image} description={hobby.description} clases="childSection" clasesChild="imageChild" classText="title"></Card>
        );
    })

    return (
      <aside className="hobbies">
        <h2>Hobbies</h2>
        {hobbies}
      </aside>
    );
}

export const Card = (props) => {
    return (
      <section className={props.clases}>
        <div className={props.clasesChild}>
          <img src={props.image} alt={props.name}></img>
        </div>
        <div className={props.clasesInformation}>
          <h4 id={props.classText}>{props.name}</h4>
          <p className={props.classTextSecond}>{props.description}</p>
          {props.otherElement}
        </div>
      </section>
    );
}

export default Hobbies;