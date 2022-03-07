import React from 'react'
import "./projects.css";
import { Card } from "../Hobbies/hobbies";


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      page: 0,
      hasError: false
    };
    this.getProps = this.getProps.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  getProps() {
    this.setState({
      elements: this.props.dataProjects.slice(this.state.page, this.state.page + 3),
    });
  }

  nextPage () {
    if (this.state.page < this.props.dataProjects.length) {
      this.setState({
        page:  this.state.page + 3
      });
      this.getProps();
    } else {
      alert("No more projects");
    }
  }

  prevPage() {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 3
      });
      this.getProps();
    } else {
      alert("No more projects");
    }
  }

  componentDidMount () {
    this.getProps();
  }


  render () {
    console.log(this.state.elements);
    console.log(this.state.page)
    const element = this.state.elements.map((element, index) => {
      return (
        <Card
          key={index}
          clases="projectCard"
          clasesChild="cardChild"
          image={element.image}
          name={element.name}
          clasesInformation="cardText"
          description={element.tags}
          classText="titleCard"
          classTextSecond="tagsCard"
          otherElement={
            <div className="otherElementCard">
              <p>{element.description}</p>
              <div className="contenBtn">
                <button>
                  <a href={element.demo}>Demo</a>
                </button>
                <button>
                  <a href={element.repo}>Code</a>
                </button>
              </div>
            </div>
          }
        ></Card>
      );
    });

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
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
        <section className="cardProjects">{
          element
        }</section>
        <section className="Pagination">
          <button onClick={this.prevPage}></button>
          <button onClick={this.nextPage} ></button>
        </section>
      </footer>
    );
  }
}

export default Projects;