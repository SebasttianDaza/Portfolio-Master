import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Firebase 
import firebaseConfig from './firebase-config';

import {
  FirebaseAppProvider
} from "reactfire";

//Import the components we will need
import Profile from './Components/Profile/profile';
import Content from './Components/Content/content';
import Projects from './Components/Projects/projects';





class Main extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    const Data = [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "404 Not Found",
        tags: "HTML, CSS, JavaScript",
        description:
          "Create a 404 not found page following the design. The page should be responsive. Don’t look at the existing solution. Fulfill user stories below:",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://github.com/SebasttianDaza/404-Not-Found-Master",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "404 Not Found",
        tags: "HTML, CSS, JavaScript",
        description:
          "Create a 404 not found page following the design. The page should be responsive. Don’t look at the existing solution. Fulfill user stories below:",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://github.com/SebasttianDaza/404-Not-Found-Master",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "404 Not Found",
        tags: "HTML, CSS, JavaScript",
        description:
          "Create a 404 not found page following the design. The page should be responsive. Don’t look at the existing solution. Fulfill user stories below:",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://github.com/SebasttianDaza/404-Not-Found-Master",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "404 Not Found",
        tags: "HTML, CSS, JavaScript",
        description:
          "Create a 404 not found page following the design. The page should be responsive. Don’t look at the existing solution. Fulfill user stories below:",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://github.com/SebasttianDaza/404-Not-Found-Master",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "Portfolio Page",
        tags: "HTML, CSS, JavaScript",
        description:
          "Create a 404 not found page following the design. The page should be responsive. Don’t look at the existing solution. Fulfill user stories below:",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://github.com/SebasttianDaza/404-Not-Found-Master",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "Portfolio Page",
        tags: "HTML, CSS, JavaScript",
        description:
          "Create a 404 not found page following the design. The page should be responsive. Don’t look at the existing solution. Fulfill user stories below:",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://github.com/SebasttianDaza/404-Not-Found-Master",
      },
    ];

    return (
      <React.StrictMode>
        <Profile></Profile>
        <Content></Content>
        <Projects dataProjects={Data}></Projects>
      </React.StrictMode>
    );
  }
}



ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Main />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
