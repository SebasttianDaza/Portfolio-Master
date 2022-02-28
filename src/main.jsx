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
import Main from './Components/Main/main';




class Content extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <React.StrictMode>
        <Profile></Profile>
        <Main></Main>
      </React.StrictMode>
    );
  }
}



ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Content />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
