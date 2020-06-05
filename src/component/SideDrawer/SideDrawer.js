import React from 'react';
import './SideDrawer.css';
const SideDrawer = props => {
  let drawerclass='side-drawer';
  if(props.show){
    drawerclass='side-drawer open';
  }
  return (
    <nav className={drawerclass} >
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/bar">Country wise Chart</a></li>
        <li><a href="/map">Live Tracker</a></li>
        </ul>
    </nav>
  );
}

export default SideDrawer;
