import { useState } from 'react'
import './App.css'
import SearchIcon from "./assets/search.png";
import CloudIcon from "./assets/cloud.jpg";
import DrizzleIcon from "./assets/drizzle.png";
import HuminityIcon from "./assets/humminity.png";
import ClearIcon from "./assets/clear.jpg";
import SnowIcon from "./assets/snow.jpg";
import WindIcon from "./assets/wind.png";


function App() {
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
       
      </div>
    </>
  )
}

export default App
