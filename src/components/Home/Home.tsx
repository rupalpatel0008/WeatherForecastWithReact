import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherByLatLong } from "../../store/slices/weatherSlice";
import { RootState } from "../../store/store";
import Forecast from "../Forecast/Forecast";
import Loader from "../Loader/Loader";
import Searchbar from "../Searchbar/Searchbar";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeatherByLatLong({ latitude, longitude }) as any);
        },
        (error) => {
          alert("Error getting location".concat(error.message));
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="home-container">
      <h1>Weather App</h1>
      <div className="searchbar-row">
        <div className="searchbar-wrapper">
          <Searchbar />
        </div>
        <button onClick={() => fetchLocation()}>Show current location</button>
      </div>

      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      {!loading && !error && data && (
        <div className="weather-info">
          <Forecast
            city={data.location.name}
            forecast={data.forecast.forecastday}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
