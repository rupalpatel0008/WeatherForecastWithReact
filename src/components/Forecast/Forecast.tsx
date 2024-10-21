import React from "react";
import { ForecastDay } from "../../types";
import "./styles.css";

interface ForecastProps {
  city: string;
  forecast: ForecastDay[];
}

const Forecast: React.FC<ForecastProps> = ({ city, forecast }) => {
  return (
    <div className="forecast">
      <h2 className="forecast-title">{city} - 5 Day Forecast</h2>
      <div className="forecast-scroll">
        {forecast.map((day) => (
          <div key={day.date} className="forecast-card">
            <h3>{new Date(day.date).toLocaleDateString()}</h3>
            <img
              className="forecast-icon"
              src={day.day.condition.icon}
              alt={day.day.condition.text}
            />
            <p className="temperature">Average Temp: {day.day.avgtemp_c} °C</p>
            <p className="temperature-high">
              Highest Temp: {day.day.maxtemp_c} °C
            </p>
            <p className="temperature-low">
              Lowest Temp: {day.day.mintemp_c} °C
            </p>
            <p className="condition">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
