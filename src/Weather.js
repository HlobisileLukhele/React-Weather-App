import React {useState} from 'react'
import axios from 'axios'
import './Weather.css'
import { useState } from 'react'

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setcity] = useState(props.defaultCity);

    function handleResponse(response)  {
        setWeatherData ({
            ready : true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date:new Date(response.data.dt* 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind:response.data.wind.sped,
            city:response.data.name,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setcity(event.target.value);
    }

    if ( weatherData.ready) {
        return (
            <div className="Weather">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city.."
                      className="form-control"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          );
        } else {
          search();
          return "Loading...";
        }
    }



