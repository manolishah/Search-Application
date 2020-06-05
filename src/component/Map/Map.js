import React ,{useState,useEffect} from 'react'; 
import {fetchDailyData} from '../../api';
import GoogleMapReact from 'google-map-react';
const Map = (props) =>{
    const [dailyData,SetDailtData]=useState([]);
    useEffect(() => {
        const fetchApi= async ()=>{
            SetDailtData(await fetchDailyData());
        }
        fetchApi();
       
    },[]);
    return(
        <div style={{height:'100vh',width:'100%'}}>
            <GoogleMapReact
             botstrapURLLey={{key:"AIzaSyD8jfj9Z4vvhBqHsH300Ocu-TUUUt39cl-_c"}}
             defaultCenter={{lat:59.95,lng:30.33}}
             defaultZoom={10}>
               {/* <div lat={59.955413} lng={30.337844} >My Marker</div> */}
            </GoogleMapReact>
        </div>
    ); 
}
export default Map;
//AIzaSyAuum6vayx6NpwIsSyKRracXsTGnvfIlCc