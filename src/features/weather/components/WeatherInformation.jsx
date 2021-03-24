import React from "react";

const WeatherInformation = ({ country, city, state, weatherData }) => {
  const convertToFahrenheight = (temperature) => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  const [temp, feelsLike, icon, description] = weatherData;

  if (!temp) return null;
  return (
    <div>
      {city ? (
        <p className='location'>
          {city}, {state}
        </p>
      ) : null}
      <div className='weather-information'>
        <div>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='' />
        </div>
        <div className='temperature-and-description'>
          {country === "United States" ? (
            <p className='temp'>{convertToFahrenheight(temp)}°F</p>
          ) : (
            <p className='temp'>{Math.round(temp)}°C</p>
          )}
          <p>{description}</p>
        </div>
      </div>
      {country === "United States" ? (
        <p>Feels like {convertToFahrenheight(feelsLike)}°F</p>
      ) : (
        <p>Feels like {Math.round(feelsLike)}°C</p>
      )}
    </div>
  );
};

export default WeatherInformation;
