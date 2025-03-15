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
  let api_key = "f6c1f975a09dae8b75ae3a438576b92d";
  const [text,setText] = useState("Kandy");
  const [icon,setIcon] = useState(CloudIcon);
  const [temp,setTemp] = useState(0);
  const [city,setCity] = useState("Kandy");
  const [country,setCountry] = useState("SriLanka");
  const [lat,setLat] = useState(0);
  const [log,setLog] = useState(0);
  const [humidity,setHumidity] = useState(0);
  const [wind,setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading,setLoading] = useState(false);

const search = async () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

  try{
        let res = await fetch(url);
        let data = await res.json();
       // console.log(data);
       if(data.cod ==="404"){
        console.error("City Not Found");
       }

  }catch(error){
      console.error("error occurred",error.message);
  }finally{
      setLoading(false);
  }
};

const handleCity = (e) =>{
  setText(e.target.value);
};

const handleKeyDown =(e) =>{
    if(e.key === "Enter"){
      search();
    }
};


  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text"
            className='CityInput'
            placeholder='Search City' 
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div className='search-icon' onClick={()=>search()}>
            <img src={SearchIcon} alt="Search" />
          </div>

        </div>
        <WeatherDetailes icon={icon} temp={temp} city={city} 
        country={country} lat={lat} log ={log} humidity={humidity} wind={wind}/>
       
       <p className="copyright">Designed by <span>Aathi</span></p>
      </div>
    </>
  )
}

export default App
