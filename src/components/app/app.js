import React, { Component } from 'react';
import Info from '../info';
import Form from '../form';
import Weather from '../weather';
import './app.css';

const API_KEY = "10e2637f173d6f3cd2286f927f9d4687";

export default class App extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        error: undefined
    };

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city){
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            this.setState({
                temp: Math.floor(data.main.temp - 273.15),
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                humidity: undefined,
                error: 'Please write city'
            });
        }
    };

    render() {
        const {temp, city, country, pressure, humidity, error} = this.state;
        return (
              <div className="wrapper">
                  <div className="container">
                      <div className="main">
                          <div className="info">
                            <Info />
                          </div>
                          <div className="form">
                              <Form weatherMessage={this.gettingWeather}/>
                          </div>
                          <div className="weather">
                              <Weather
                                    temp={temp}
                                    city={city}
                                    country={country}
                                    pressure={pressure}
                                    humidity={humidity}
                                    error={error}
                              />
                          </div>
                      </div>
                  </div>
              </div>
        );
    }
}
