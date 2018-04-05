import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { OutputForm } from './components/OutputForm'
import { InputForm } from './components/InputForm'
import BootcampChat from 'bootcamp-firebase-chat';
import {messageReceived} from './components/reducer'


const config = {
  apiKey: 'AIzaSyD7e-xTlPbwolUJodCIH3N2h55VGLVKoDo',
  authDomain: 'bootcamp-chat.firebaseapp.com',
  databaseURL: 'https://bootcamp-chat.firebaseio.com',
  projectId: 'bootcamp-chat',
  storageBucket: 'bootcamp-chat.appspot.com',
  messagingSenderId: '554504901473',
}

class App extends Component {
  componentDidMount() {
    const chat = new BootcampChat(config)
    chat.onMessage((id, message) => {
      this.props.messageReceived(id, message)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Firebase Chat</h1>
        </header>

        <div>
          <OutputForm />
        </div>
        <div>
          <InputForm />
          <button type="button" onClick={toSend}>Receive</button>
          </div>
      </div>
    );
  }
}

export default connect(state => state, {messageReceived})(App);
