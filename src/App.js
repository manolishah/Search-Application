import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './Component/search';
import ImageList from './Component/imageList';
class App extends Component {
  state={images:[]};

  //get data from api
   onSearchSubmit=async (term)=>{
   const response= await axios.get('https://api.unsplash.com/search/photos',{
        params:{query:term},
        headers:{
          Authorization:'Client-ID MYr-qbwv0_Shy3yGlCOQQjNS7W9zix3nwOBiIV9QIdI'
        }
      });
this.setState({images:response.data.results});
  }
  render(){
  return (
    <div className="ui container" style={{marginTop:'10px'}}>
    <SearchBar onSubmit={this.onSearchSubmit}/>
    <ImageList images={this.state.images} />
    </div>
  );
  }
}

export default App;
