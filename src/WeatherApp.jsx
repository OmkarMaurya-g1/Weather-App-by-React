import React, {useState} from "react";
import "./weatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div className="appContainer">
      <div className="header">
        <div className="brandSmall">
          <div className="brand-bubble">OM</div>
          <h1>Weather App by OM</h1>
        </div>
      </div>

      <div className="sidePanel">
        <SearchBox updateInfo={setWeatherInfo} />
      </div>

      {/* Weather display */}
      <div className="mainCardWrap">
        {weatherInfo ? (
          <InfoBox info={weatherInfo} />
        ) : (
          <p className="text-muted">Search for a city to see the weather.</p>
        )}
      </div>

      <div className="appFooter">Powered by OpenWeather</div>
    </div>
  );
}
