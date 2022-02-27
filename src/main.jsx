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





class Main extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <React.StrictMode>
        <Profile></Profile>
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
