import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="UserOutput">
      <p>Username: {props.name}</p>
      <p>This is another paragraph</p>
    </div>
  );
}

export default userOutput;