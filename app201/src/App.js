import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: '1', name: 'Gatling', age: '27'},
      {id: '2', name: 'Nengti', age: '28'},
      {id: '3', name: 'Nandu', age: '29'}
    ],
    otherState: 'Some other value',
    showPerson: true
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    });
  }

  togglePersonhandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => {this.nameChangeHandler(event, person.id)}}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React App!</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonhandler}>
            Toggle person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi i\'m a react app!'));
  }
}

export default App;
