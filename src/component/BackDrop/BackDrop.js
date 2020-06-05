import React from 'react';
import './BackDrop.css';
const BackDrop = props => {
    return (
      <div className='backdrop' onClick={props.backDropClickHandler}></div>
    );
  }
  
  export default BackDrop;
  