import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Firebase 
import firebaseConfig from './firebase-config';

import {
  FirebaseAppProvider
} from "reactfire";

import { SnackbarProvider } from 'notistack';

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
          "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Data%20Table.png?alt=media&token=42202b84-8317-4f71-a803-45ef7519d3be",
        name: "Table API",
        tags: "CSS, JavaScript, Vue, Firebase",
        description:
          "Website developed with Vue.js and other techonologies, this project is a test where you paint data from API in a table with their differents records.",
        demo: "https://404-not-found-master-three.vercel.app/",
        repo: "https://vuetest-cf8a7.web.app/",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/challengesDesignl.svg?alt=media&token=6c4a7992-a8b1-47a7-9055-f743513f42c9",
        name: "Home Page",
        tags: "CSS, JavaScript, React",
        description:
          "Homepage that has allowed me learning with React, web components, props, render, also CSS Grid and Flex, and all it with architecture of files and folders.",
        demo: "https://homepage-ashen-eight.vercel.app/",
        repo: "https://github.com/SebasttianDaza/homepage",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/challenge.svg?alt=media&token=1d4f8603-0778-4656-a9fb-845bc9f10c21",
        name: "404 Not Found",
        tags: "HTML, CSS, JavaScript",
        description:
          "Web application of consumption of an API with JS, searchMovie is a movie search engine based on the information of The MovieDB.",
        demo: "https://search-movie-alpha.vercel.app/",
        repo: "https://github.com/SebasttianDaza/searchMovie",
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
    <SnackbarProvider maxSnack={2}>
      <Main />
    </SnackbarProvider>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
