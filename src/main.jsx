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




class Main extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <React.StrictMode>
        <Profile></Profile>
        <Content></Content>
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
