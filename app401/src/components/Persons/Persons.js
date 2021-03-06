import React , {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  // }

  shouldComponentUpdate(nextprops, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextprops.persons !== this.props.persons ||
        nextprops.changed !== this.props.changed || 
        nextprops.clicked !== this.props.clicked) 
    {
      return true
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'}; 
  }

  componentDidUpdate(prevprops, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js componentWillUnmount]');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person,index) => {
      return <Person 
      click={() => this.props.clicked(index)}
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => {this.props.changed(event, person.id)}}
      isAuth={this.props.isAuthenticated}/>
    });
  }  
}
export default Persons;