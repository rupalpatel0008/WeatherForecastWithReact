import { useState, ChangeEvent, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash/debounce";
import "./styles.css";
import { fetchWeatherByCity } from "../../store/slices/weatherSlice";

function Searchbar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const debouncedFetchWeatherByCity = useCallback(
    debounce((city: string) => {
      dispatch(fetchWeatherByCity(city) as any);
    }, 1000),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value.trim()) {
      debouncedFetchWeatherByCity(e.target.value);
    }
  };

  useEffect(() => {
    return () => {
      debouncedFetchWeatherByCity.cancel();
    };
  }, [debouncedFetchWeatherByCity]);

  return (
    <div className="searchbar-container">
      <FaSearch className="search-icon" size={30} color="#6A5ACD" />
      <input
        className="searchbar"
        name="searchbar"
        type="text"
        placeholder="Search city to know its weather"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Searchbar;
