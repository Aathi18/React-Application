import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from "./assets/search.png";
import CloudIcon from "./assets/cloud.png";
import DrizzleIcon from "./assets/drizzle1.png";
import HumidityIcon from "./assets/humidity3.png";
import ClearIcon from "./assets/clear.png";
import SnowIcon from "./assets/snow.jpg";
import WindIcon from "./assets/wind2.png";
import RainIcon from "./assets/rain.png";


const WeatherDetailes = ({icon,temp,city,country,lat,lon,humidity,wind})=>{
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
          <span className="lon">longitude</span>
          <span>{lon}</span>
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
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("");
  const [lat,setLat] = useState(0);
  const [lon,setLon] = useState(0);
  const [humidity,setHumidity] = useState(0);
  const [wind,setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading,setLoading] = useState(false);
  const [error,SetError] = useState(null);
  const weatherIconMap ={
        "01d":ClearIcon,
        "01n":ClearIcon,
        "02d":CloudIcon,
        "02n":CloudIcon,
        "03d":DrizzleIcon,
        "03n":DrizzleIcon,
        "04d":DrizzleIcon,
        "04n":DrizzleIcon,
        "09d":RainIcon,
        "09n":RainIcon,
        "10d":RainIcon,
        "10n":RainIcon,
        "13d":SnowIcon,
        "13n":SnowIcon,
  };

const search = async () => {
  setLoading(true);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

  try{
        let res = await fetch(url);
        let data = await res.json();
       // console.log(data);
       if(data.cod ==="404"){
        console.error("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
       }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode]|| ClearIcon);
      setCityNotFound(false);

  }catch(error){
      console.error("error occurred",error.message);
      SetError("error occured when fetch weather data");
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

useEffect(function (){
  search();

},[]);

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
       
       
       {loading && <div className="loading-message">Loading...</div>}
       {error &&<div className="error-message">{error}</div>}
       {cityNotFound && <div className="city-not-found">City Not Found</div>}

       {!loading && !cityNotFound && <WeatherDetailes icon={icon} temp={temp} city={city} 
        country={country} lat={lat} lon ={lon} humidity={humidity} wind={wind}/>}
       
       <p className="copyright">Designed by <span>Aathi</span></p>
      </div>
    </>
  )
}

export default App
