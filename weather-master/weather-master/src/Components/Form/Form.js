import React from "react";
import CheckBoxRadio from "../CheckBoxRadio/CheckBoxRadio";
import styles from "./FormStyle.module.css";

export default function Form(props) {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={props.gettingWeather}>
        <input type="text" name="city" placeholder="Город" />
        <button>Получить погоду по городу</button>
      </form>

      <button onClick={props.getWeaByCoords}>
        Получить погоду по текущим координатам
      </button>

      <CheckBoxRadio />
    </div>
  );
}
