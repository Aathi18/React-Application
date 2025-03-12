import { useState } from 'react'
import './App.css'
import SearchIcon from "./assets/search.png";
import CloudIcon from "./assets/cloud.jpg";
import DrizzleIcon from "./assets/drizzle.png";
import HumidityIcon from "./assets/humidity3.png";
import ClearIcon from "./assets/clear.jpg";
import SnowIcon from "./assets/snow.jpg";
import WindIcon from "./assets/wind2.png";

const WeatherDetailes = ({icon,temp,city,country,lat,log,humidity,wind})=>{
    return(
      <>
      <div className='image'>
        <img src={icon} alt="Image" />
      </div>
      <div className="temp">{temp}<sup>o</sup>C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">lattitute</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">longitude</span>
          <span>{log}</span>
        </div>
      </div>

      <div className="data-container">
        <div className="element">
          <img src={HumidityIcon} alt="humidity" className='icon' />
          <div className="data">
          <div className="humidity-presentage">{humidity}%</div>
          <div className="text">Humidity</div>
        </div>
        </div>
      
        <div className="element">
          <img src={WindIcon} alt="humidity" className='icon' />
          <div className="data">
          <div className="wind-presentage">{wind} km/h</div>
          <div className="text">Wind Speed</div>
        </div>
        </div>
        
      </div>
      
      </>
    );

}
function App() {
  const [icon,setIcon] = useState(CloudIcon);
  const [temp,setTemp] = useState(0);
  const [city,setCity] = useState("Kandy");
  const [country,setCountry] = useState("SriLanka");
  const [lat,setLat] = useState(0);
  const [log,setLog] = useState(0);
  const [humidity,setHumidity] = useState(0);
  const [wind,setWind] = useState(0);




  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text"
            className='CityInput'
            placeholder='Search City'
          />
          <div className='search-icon'>
            <img src={SearchIcon} alt="Search" />
          </div>

        </div>
        <WeatherDetailes icon={icon} temp={temp} city={city} 
        country={country} lat={lat} log ={log} humidity={humidity} wind={wind}/>
       
      </div>
    </>
  )
}

export default App
