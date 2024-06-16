
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKeys from "./apiKeys";
import ReactAnimatedWeather from "react-animated-weather";

function Forecast(props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const [zipCode, setZipCode] = useState(""); // new state for zipcode

  const search = (cityOrZip) => {
    if (cityOrZip.match(/^\d{5}$/)) { // check if input is a 5-digit zipcode
      axios
       .get(
          `${apiKeys.base}weather?zip=${cityOrZip}&units=metric&APPID=${apiKeys.key}`
        )
       .then((response) => {
          setWeather(response.data);
          setQuery("");
          setZipCode("");
        })
       .catch((error) => {
          console.log(error);
          setWeather("");
          setQuery("");
          setError({ message: "Not Found", query: cityOrZip });
        });
    } else {
      axios
       .get(
          `${apiKeys.base}weather?q=${cityOrZip}&units=metric&APPID=${apiKeys.key}`
        )
       .then((response) => {
          setWeather(response.data);
          setQuery("");
          setZipCode("");
        })
       .catch((error) => {
          console.log(error);
          setWeather("");
          setQuery("");
          setError({ message: "Not Found", query: cityOrZip });
        });
    }
  };

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  const defaults = {
    color: "white",
    size: 112,
    animate: true,
  };

  useEffect(() => {
    search("delhi");
  }, []);

  return (
    <div className="forecast">
      <div className="forecast-icon">
        <ReactAnimatedWeather
          icon={props.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
      <div className="today-weather">
        <h3>{props.weather}</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city or zipcode"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="img-box">
            {" "}
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={() => search(query)}
            />
          </div>
        </div>
        <ul>
          {typeof weather.main != "undefined" ? (
            <div className="data">
              {" "}
              <li className="cityHead">
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
              </li>
              <li>
              Temperature{" "}
                <span className="temp">
                  {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                </span>
              </li>
              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility)} mi
                </span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
                </span>
              </li>
            </div>
          ) : (
            <li>
              {error.query} {error.message}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Forecast;