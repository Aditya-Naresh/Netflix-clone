import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import { originals, TrendingMovies,ComedyMovies, HorrorMovies, ActionMovies,RomanceMovies, Documentaries, } from "./urls";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import SearchBar from "./Components/SearchBar/SearchBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/> 
      <SearchBar/>
      {/* <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={TrendingMovies} title='Trending' isSmall />
      <RowPost url={ComedyMovies} title='Comedy' isSmall />
      <RowPost url={HorrorMovies} title='Horror' isSmall />
      <RowPost url={ActionMovies} title='Action' isSmall />
      <RowPost url={RomanceMovies} title='Romance' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall /> */}
    </div>
  );
}

export default App;
