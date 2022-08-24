import { useState, useEffect } from "react";
import "./App.css";
import CharacterItem from "./components/CharacterItem";

function App() {
  const [data, setData] = useState([{ name: "alp", type: "insan" }]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((Response) => Response.json())
      .then((data) => setData(data.results));
  }, []);
  return (
    <div className="wrapper">
      {data.map((item, index) => {
        return <CharacterItem charcater={item} setFavorite={setFavorite} favorite={favorite} key={index} ></CharacterItem>;
      })}
      <hr></hr>
      <h1>Favorilerim</h1>
      {favorite.map((e, index) => {
        return <div key={index}>{e.name}</div>;
      })}
    </div>
  );
}
export default App;
