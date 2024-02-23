import React, { useState, useEffect } from "react";
import WeatherForm from "./components/CitySearchForm";
import WeatherInfo from "./components/WeatherInfo";
import Loading from "./components/Loading";

const App = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${
          import.meta.env.VITE_REACT_APP_KEY
        }&q=${city}`
      );
      const json = await request.json();
      setTimeout(() => {
        setWeather(json);
      }, 2000);
    } catch (error) {
      console.error("Error al obtener la información del clima:", error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Loading />}
    </div>
  );
};

export default App;
