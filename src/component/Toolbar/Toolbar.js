import React from 'react';
import DrawerToogleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
const Toolbar = props => {
  return (
    <header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div className='toolbar_toggel-button'>
                <DrawerToogleButton click={props.drawerToggeleClickHandele} />
            </div>
            <div className='toolbar_logo'><a href="/">COVID19</a></div>
            <div className='spacer' />
            <div className='toolbar_navigation_item'>
                <ul>
                    <li><a href="/">Home</a></li>
                     <li><a href="/bar">Country</a></li>
                    <li><a href="/Map">LiveTracker</a></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Toolbar;
