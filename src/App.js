import React from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import BackDrop from './component/BackDrop/BackDrop';
import Home from './component/Home/Home';
import BarchartDispaly from './component/Barchart/BarcharDispaly';
import Map from './component/Map/Map';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component {

    state={
      SideDrawerOpen:false
    };

  drawerToggeleClickHandele =() =>{
    this.setState((prevState) =>{
      return{SideDrawerOpen:!prevState.SideDrawerOpen};
    });
  };
  backDropClickHandler = () =>{
    this.setState({SideDrawerOpen:false});
  };
  render(){
    let bcakDeop;
    if(this.state.SideDrawerOpen){
      bcakDeop=<BackDrop backDropClickHandler={this.backDropClickHandler} />;
    }
  return (
    <Router>
      <div style={{height:'100%'}}>
     
      <Toolbar drawerToggeleClickHandele={this.drawerToggeleClickHandele} />
      <SideDrawer show={this.state.SideDrawerOpen} />
      {bcakDeop}
      <main style={{marginTop:'64px'}}>
      <Route path="/" exact component={Home}/>
      <Route path="/map" component={Map}/>
      <Route path="/bar" component={BarchartDispaly}/>
      </main>
      
    </div>
    </Router>
  );
  }
}

export default App;
