import "./hobbies.css";

const Hobbies = (props) => {

    const hobbies = props.hobbies.map((hobby, index) => { 
        return (
            <Card key={index} name={hobby.name} image={hobby.image} description={hobby.description} ></Card>
        );
    })

    return (
      <aside className="hobbies">
        <h2>Hobbies</h2>
        {hobbies}
      </aside>
    );
}

const Card = (props) => {
    return (
      <section>
        <div>
          <img src={props.image} alt={props.name}></img>
        </div>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </section>
    );
}

export default Hobbies;