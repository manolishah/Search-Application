import React from 'react';
import './DrawerToogelButton.css';
const DrawerToogleButton = props => {
  return (
        <button  className='toggle_button' onClick={props.click}>
            <div className='toggle_button_line'></div>
            <div className='toggle_button_line'></div>
            <div className='toggle_button_line'></div>
        </button>
  );
}

export default DrawerToogleButton;
