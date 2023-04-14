//https://api.openweathermap.org/data/2.5/weather?q=bharuch&appid=93239087bc85f3811b746b53386878e3

import React from "react";
import { useState,} from "react";
import "./style.css";
import { Weatercard } from "./Weatercard";

const Temp = () => {

const [searchvalue,setsearchvalue]=useState("Bharuch")
const [tempInfo, setTempInfo] = useState( {
  temp : 20,
  humidity : 90,
  pressure : 1229,
  weathermood :'sunny',
  name :'Bharuch',
  speed : 10,
  country :'India',
  sunset :'19:00',
});

 const getweatherinfo=async()=>
 {
  try {
   let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=71c9acef5f2fdb8a26d042364094e83a`;

    let res =await fetch(url);
    let data =await res.jason();

    const { temp, humidity, pressure } = data.main;
    const { main: weathermood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;


    
    const myNewWeatherInfo = {
      temp,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset,
    };

    setTempInfo(myNewWeatherInfo);

  } catch (error) {
    
  }
 };

 
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            className="searchTerm"
            name=""
            value={searchvalue}
            onChange={(e)=>setsearchvalue(e.target.value)}
            id="search"
          />
          <button className="searchButton" type="button" onClick={getweatherinfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card */}

   <Weatercard tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;
