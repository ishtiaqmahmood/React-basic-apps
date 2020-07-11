import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Save data to cloud');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] cleanup work in useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';

  if(props.showPersons) {
    btnClass = classes.red;
  }
  
  if(props.persons.length <= 2){
    assignedClasses.push(classes.red); // classes = ['red']  
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return(
    <div className={classes.Cockpit}>
      <h1>This is a React App!</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle person
      </button>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default Cockpit;