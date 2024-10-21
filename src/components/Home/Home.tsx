import Searchbar from "../Searchbar/Searchbar";
import "./styles.css";

function Home() {
  const onSearch = () => {};
  return (
    <div className="home-container">
      <Searchbar onSearch={onSearch} />
    </div>
  );
}

export default Home;
