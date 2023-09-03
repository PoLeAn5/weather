import React, { Component } from "react";
import Card from "../Card/Card";
import Info from "../Info/Info";
import Form from "../Form/Form";
import { typeOfFor } from "../CheckBoxRadio/CheckBoxRadio";

const API_KEY = "8a4b4a7f513618cc3878bed593b60547";

let lat;
let lon;

class Weather extends Component {
  
  state = {
    days: [],
  };

  gettingWeather = async (e) => {

    e.preventDefault();

    var city = e.target.elements.city.value;
    let cityFromRequest;
    const weatherCurrentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`

    const weather5DaysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=${API_KEY}`;

    if (city && typeOfFor === "current") {
      fetch(weatherCurrentURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if(data.cod == 200){
            const dailyData = [];
            dailyData.push(data) 
            
            cityFromRequest = data.name;
            this.setState({ days: dailyData });              
          } else {

            this.setState({days:[]})
            alert('Введите название города')
          }
        });
    } 

    if (city && typeOfFor === "fiveDays") {
      fetch(weather5DaysURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if(data.cod == 200){
              const dailyData = data.list.filter((reading) =>
              reading.dt_txt.includes("12:00:00")
              );
              cityFromRequest = data.city.name;
              this.setState({ days: dailyData }); 
          } else {

            this.setState({days:[]})
            alert('Введите название города')
          }          
        });        
    }     
  };
  getWeaByCoords = async () => {
    const success = await function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
    const weatherCurrentCoordsURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`

    const weather5DaysCoordsURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`

    if (typeOfFor === "current") {
      fetch(weatherCurrentCoordsURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.cod == 200){
            const dailyData = [];
            dailyData.push(data) 
            this.setState({ days: dailyData });              
          } else {
            this.setState({days:[]})
            alert("Что-то не так, поменяйте тип погоды и попробуйте снова")
          }
        });
    }

    if(typeOfFor === "fiveDays") {
       fetch(weather5DaysCoordsURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if(data.cod == 200){
              const dailyData = data.list.filter((reading) =>
              reading.dt_txt.includes("12:00:00")
              );
              this.setState({ days: dailyData }); 
          } else {
            this.setState({days:[]})
            alert("Что-то не так, поменяйте тип погоды и попробуйте снова")

          }          
        }); 
    }
  }
 
    formatCards = () => {
      return this.state.days.map((day) => <Card day={day} />);
    };

  render() {
    return (
      <div>
        <Info city={this.state.days.name}/>
        <Form 
        gettingWeather={this.gettingWeather} 
        getWeaByCoords={this.getWeaByCoords}/>
        <div>{this.formatCards()}</div>
      </div>
    );
  }
}

export default Weather;
