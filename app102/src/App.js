import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

  state = {
    username : 'Gatling'
  }

  nameChangehandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This ia a react app!</h1>
        <UserInput change={this.nameChangehandler} value={this.state.username}/>
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  } 
}

export default App;
