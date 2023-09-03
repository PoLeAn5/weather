import React, {Component} from 'react';
import styles from './CardStyle.module.css'

class Card extends Component {
  // Props: day, key(index)

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    return (
      <div>
          <div className={styles.blockWeather}>

            <div className={styles.showParametr}>
              <h3>{weekdayName}</h3>
            </div>

            <div className={styles.showParametr}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4150/4150826.png"
                alt="thermometer"
                width={30}
              />
              <p>Температура:</p>
              <h3>{Math.round(this.props.day.main.temp)} °С</h3>
            </div>

            <div className={styles.showParametr}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5132/5132417.png"
                alt="pressure"
                width={30}
              />
              <p>Давление:</p>
              <h3>{this.props.day.main.pressure} мм.рт.ст</h3>
            </div>

            <div className={styles.showParametr}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/6566/6566228.png"
                alt="humidity"
                width={30}
              />
              <p>Влажность:</p>
              <h3>{this.props.day.main.humidity} %</h3>
            </div> 

            <div className={styles.showParametr}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/8569/8569953.png"
                alt="windSpeed"
                width={30}
              />
              <p>Скорость ветра:</p>
              <h3>{this.props.day.wind.speed} м/с</h3>
            </div>

            <div className={styles.showParametr}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2480/2480626.png"
                alt="description"
                width={30}
              />
              <p>Общее описание погоды:</p>
              <h3 className={styles.center}>{this.props.day.weather[0].description}</h3>
            </div>


          </div>
      </div>
    )
  }
}

export default Card