import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OutputForm from './components/OutputForm'
import { InputForm } from './components/InputForm'
import BootcampChat from 'bootcamp-firebase-chat';
import {messageReceived} from './components/reducer'

//Redux related
import { connect } from 'react-redux'

const config = {
  apiKey: 'AIzaSyD7e-xTlPbwolUJodCIH3N2h55VGLVKoDo',
  authDomain: 'bootcamp-chat.firebaseapp.com',
  databaseURL: 'https://bootcamp-chat.firebaseio.com',
  projectId: 'bootcamp-chat',
  storageBucket: 'bootcamp-chat.appspot.com',
  messagingSenderId: '554504901473',
}

class App extends Component {

  constructor() {
    super();
  }
  
  componentDidMount() {
    this.chat = new BootcampChat(config);
    const messages = this.chat.onMessage((id, message) => {
      this.props.messageReceived(id, message)
    })
  }

  render() {
    console.log('RENDERING')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Firebase Chat</h1>
        </header>

        <div>
          <OutputForm messages={this.props.messages}
          onScrolled={e => console.log('the list was scrolled')}/>
        </div>
        <div>
          <InputForm chat={this.chat}/>
          <button type="button">Receive</button>
          </div>
      </div>
    );
  }
}

export default connect(state => state, {messageReceived})(App);
