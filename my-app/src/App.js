import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootcampChat from 'bootcamp-firebase-chat'

import {output} from './components/output'


const config = {
  apiKey: 'AIzaSyD7e-xTlPbwolUJodCIH3N2h55VGLVKoDo',
  authDomain: 'bootcamp-chat.firebaseapp.com',
  databaseURL: 'https://bootcamp-chat.firebaseio.com',
  projectId: 'bootcamp-chat',
  storageBucket: 'bootcamp-chat.appspot.com',
  messagingSenderId: '554504901473',
}

const chat = new BootcampChat(config)

chat.send({
  name: 'Ryan',
  message: 'current status',
  image: 'https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif'
}).then(({id}) => {
  console.log(id)
}).catch(e => {
  console.log(e)
})

chat.onMessage((id, message) => {
  console.log('---------> ${id} <----------')
  console.log(message)
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Firebase Chat</h1>
        </header>
        <div>
          <output />
          <p>fdsajlda</p>
        </div>
        <div>

          </div>
      </div>
    );
  }
}

export default App;
