import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
      {id: '1', name: 'Gatling', age: 27},
      {id: '2', name: 'Nengti', age: 28},
      {id: '3', name: 'Nandu', age: 29}
    ],
    otherState: 'Some other value',
    showPerson: true,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props)  => {
      return {
        persons : persons,
        changeCounter: prevState.changeCounter + 1
      };
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

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPerson){
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}/>
   
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          showPersons={this.state.showPerson} 
          persons={this.state.persons}
          clicked={this.togglePersonhandler}
          login={this.loginHandler}/> : null}
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi i\'m a react app!'));
  }
}

export default withClass(App, classes.App);
