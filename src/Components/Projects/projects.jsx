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
      hasError: false
    };
    this.getProps = this.getProps.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  handleConnectionLoss = (message) => {
    this.key = this.props.enqueueSnackbar(message, {
      variant: 'warning',
    })
  }

  handleBackOnline = () => {
    this.props.closeSnackbar(this.key);
  }

  

  getProps() {
    this.setState({
      elements: this.props.dataProjects
    });
  }

  nextPage () {
    if (this.state.page < this.state.elements.length - 3) {
      this.setState({
        page: this.state.page + 3
      });
    } else {
      this.handleConnectionLoss("No more projects");
    }
  }

  prevPage() {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 3
      });
    } else {
      this.handleConnectionLoss("No more projects to go back");
    }
  }

  componentDidMount () {
    this.getProps();
  }


  render () {
    console.log(this.state.elements);
    console.log(this.state.page)

    const filteredProjects = () => {
      return this.state.elements.slice(this.state.page, this.state.page + 3)
    }

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