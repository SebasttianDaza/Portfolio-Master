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
          "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/porfolioPersonal2.png?alt=media&token=bdaedffe-6255-4c1e-a6cf-2a403d1702f7",
        name: "YLS Emprendimientos",
        tags: "CSS, JavaScript, JQuery, Wordpress",
        description:
          "Portofolio personal developed with Wordpress, JQuery, and other technologies, this project is a test where you paint data from API in a table with their differents records.",
        demo: "https://emprendeyourlifestyle.com/",
        repo: "https://emprendeyourlifestyle.com/",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/m2yGallery.svg?alt=media&token=22882587-5ac6-46a8-8bc4-f8f9f2987578",
        name: "My Gallery",
        tags: "HTML, CSS",
        description:
          "Website with only CSS, I could to learn much about CSS Grid and to improve my skills.I learned how to use CSS Grid and to use it in my projects.",
        demo: "https://mygallery-silk.vercel.app/",
        repo: "https://gitlab.com/SebasttianDaza/mygallery",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/c2hallengesDesigns.svg?alt=media&token=96294984-1bb8-4a41-9d94-80e5bf4029ee",
        name: "Checkout Page",
        tags: "HTML, CSS",
        description:
          "This project is a simple design with a form and shopping car. I allow me to learn more about design web responsive, handling of forms and semantic tags.",
        demo: "https://pagecarmaster.vercel.app/",
        repo: "https://gitlab.com/SebasttianDaza/pagecarmaster",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/imageGitHub1.jpg?alt=media&token=82e83aa2-fe3a-468b-9d0f-3ae368d4a83d",
        name: "Github search",
        tags: "HTML, CSS, JavaScript",
        description:
          "This project is a simple search engine with the API of GitHub. Its got a simple UI all responsive and it's easy to use. I allow me to learn more about use of a API, organizing the data and I can use it in my projects.",
        demo: "https://gitsearch-orpin.vercel.app/",
        repo: "https://github.com/SebasttianDaza/gitsearch",
      },
      {
        image:
          "https://emprendeyourlifestyle.com/wp-content/uploads/2021/09/musicMovie.png",
        name: "Music Player",
        tags: "CSS, JavaScript",
        description:
          "Web music player is a project that I allow me to learn much from the design as reuse of code, also using design patterns, I’ve a small project with functional programming, and surely design web responsive. ",
        demo: "https://music-player-indol-six.vercel.app/",
        repo: "https://github.com/SebasttianDaza/musicPlayer/",
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
