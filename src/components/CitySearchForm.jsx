import React, { useState } from 'react';

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState('');

  function onChange(e) {
    const value = e.target.value;

    if (value !== '') {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default WeatherForm;