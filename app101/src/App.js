import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: 'Gatling', age: '27'},
      {name: 'Nengti', age: '28'},
      {name: 'Nandu', age: '29'}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: '27'},
        {name: 'Nengti', age: '28'},
        {name: 'Nandu Mia', age: '29'}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Gatling', age: '27'},
        {name: event.target.value, age: '28'},
        {name: 'Nandu Mia', age: '29'}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is a React App!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Gatling Hutch")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
          click={this.switchNameHandler.bind(this, "Gatling!")}
          >My hobbies: Talking bulshit</Person>    
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi i\'m a react app!'));
  }
}

export default App;
