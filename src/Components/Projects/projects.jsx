import React from 'react'
import "./projects.css";
import { withSnackbar } from 'notistack';
import { Card } from "../Hobbies/hobbies";

//Import Icons

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      page: 0,
      hasError: false,
      typeFilter: "",
      filter: "",
    };
    this.getProps = this.getProps.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.setStateFunction = this.setStateFunction.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  handleConnectionLoss = (message) => {
    this.key = this.props.enqueueSnackbar(message, {
      variant: "warning",
    });
  };

  handleBackOnline = () => {
    this.props.closeSnackbar(this.key);
  };

  getProps() {
    if (this.state.filter === "") {
      this.setState({
        elements: this.props.dataProjects,
      });
    }
    if (this.state.filter === "React") {
      this.setStateFunction(this.state.filter);
    }
    if (this.state.filter === "JavaScript") {
      this.setStateFunction(this.state.filter);
    }
    if (this.state.filter === "Vue") {
      this.setStateFunction(this.state.filter);
    }
  }

  setStateFunction(Tag) {
    this.setState({
      elements: this.props.dataProjects.filter((project) =>
        project.tags.includes(Tag)
      ),
    });
  }


  changeFilter = (filter) => {
    this.setState({
      filter: filter
    });
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.getProps();
    }
  }

  nextPage() {
    if (this.state.page < this.state.elements.length - 3) {
      this.setState({
        page: this.state.page + 3,
      });
    } else {
      this.handleConnectionLoss("No more projects");
    }
  }

  prevPage() {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 3,
      });
    } else {
      this.handleConnectionLoss("No more projects to go back");
    }
  }

  componentDidMount() {
    this.getProps();
  }

  render() {
    console.log(this.state.elements);
    console.log(this.state.page);

    const filteredProjects = () => {
      return this.state.elements.slice(this.state.page, this.state.page + 3);
    };

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <footer className="styleProjects">
        <section className="cardStyle">
          <h2>Projects</h2>
          <ul>
            <li onClick={() => this.changeFilter("React")}>
              <a>React</a>
            </li>
            <li onClick={() => this.changeFilter("JavaScript")}>
              <a>JavaScript</a>
            </li>
            <li onClick={() => this.changeFilter("Vue")}>
              <a>Vue</a>
            </li>
            <li onClick={() => this.changeFilter("")}>
              <a>All</a>
            </li>
          </ul>
        </section>
        <section className="cardProjects">
          {filteredProjects().map((element, index) => {
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
                    <p className="otherElementDes">{element.description}</p>
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
          })}
        </section>
        <section className="Pagination">
          <button onClick={this.prevPage}>
            <BsFillCaretLeftFill />
          </button>
          <button onClick={this.nextPage}>
            <BsFillCaretRightFill />
          </button>
        </section>

        <section className="footerTitle">
          created by Sebastian Daza - devChallenges.io
        </section>
      </footer>
    );
  }
}

export default withSnackbar(Projects);