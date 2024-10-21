import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherByLatLongRequest } from "../../store/slices/weatherSlice";
import { RootState } from "../../store/store";
import Loader from "../Loader/Loader";
import Searchbar from "../Searchbar/Searchbar";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeatherByLatLongRequest({ latitude, longitude }));
        },
        (error) => {
          alert("Error getting location".concat(error.message));
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [dispatch]);

  const onSearch = () => {};

  return (
    <div className="home-container">
      <Searchbar onSearch={onSearch} />
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default Home;
