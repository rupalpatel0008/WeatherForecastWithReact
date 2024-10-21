import { useState, ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchbarProps } from "../../types";
import "./styles.css";

function Searchbar(props: SearchbarProps) {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

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
