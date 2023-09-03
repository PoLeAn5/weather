import React, { useState } from "react";
import styles from "./CheckBoxRadioStyle.module.css";
var typeOfFor;

function CheckBoxRadio() {
  const [typeOfForecast, setTypeOfForecast] = useState("current");
  function changeValue(event) {
    setTypeOfForecast(event.target.value);
    typeOfFor = typeOfForecast;
  }


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3>Хочу знать:</h3>
      </div>
      <div className={styles.information}>
        <div className={styles.current}>
          <p>текущую погоду</p>
          <input
            type="radio"
            name="radio"
            value="fiveDays"
            checked={typeOfForecast === "fiveDays" ? true : false}
            onChange={changeValue}
          />
        </div>
        <div className={styles.forecast}>
        прогноз на 5 дней
        <input
          type="radio"
          name="radio"
          value="current"
          checked={typeOfForecast === "current" ? true : false}
          onChange={changeValue}
        />
        </div>
      </div>
    </div>
  );
}
export { typeOfFor };
export default CheckBoxRadio;
