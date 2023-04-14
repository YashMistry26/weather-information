import React , {useState,useEffect} from 'react'

export const Weatercard = ({tempInfo}) => {
 const [weatherstate,setWeatherstate] =useState("");
  const  {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }=tempInfo;

   // converting the seconds into time
   let sec = sunset;
   let date = new Date(sec * 1000);
   let timeStr = `${date.getHours()}:${date.getMinutes()}`;

   useEffect(() => {
   if(weathermood){
    switch (weathermood) {
      case "Clouds":setWeatherstate ("wi-day-cloudy");
      break;

      case "Sunny":setWeatherstate ("wi-day-sunny");
      break;

      case "Haze":setWeatherstate ("wi-day-haze");
      break;

      case "Mist":setWeatherstate ("wi-day-mist");
      break;
     
      default: setWeatherstate("wi-day-sunny");
        break;
    }
   }
  
  }, [weathermood])

  return (
    <>
       <article className="widget">
        <div className="weatherIcon">
           <i className={`wi ${weatherstate}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="discriptioin">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place"> {name}, {country}</div>
          </div>
     </div>
     <div className="date">{new Date().toLocaleString()}</div>
     
     {/* Last 4 colum section */}
     <div className="extra-temp">
      <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p><i className="wi wi-sunset"></i></p>
          <p className="extra-info-leftside">{sunset}<br/>Sunset</p>
        </div>

        <div className="two-sided-section">
          <p><i className="wi wi-humidity"></i></p>
          <p className="extra-info-leftside">{humidity}<br/>Humidity</p>
        </div>

      </div>

      <div className="weather-extra-info">
      <div className="two-sided-section">
          <p><i className="wi wi-strong-wind
"></i></p>
          <p className="extra-info-leftside">{speed}<br/>Speedwind</p>
        </div>

        <div className="two-sided-section">
          <p><i className="wi wi-raindrops"></i></p>
          <p className="extra-info-leftside">{pressure}<br/>Pressure</p>
        </div>
      </div>
     </div>

      </article>
    </>
 )
}
