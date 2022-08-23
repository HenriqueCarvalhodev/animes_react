import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import DetailsAnime from "./components/DetailsAnime";
import Container from '@mui/material/Container';
import { Routes, Route } from "react-router-dom";

function App() {
  const [animeList, SetAnimeList] = useState([])

  const GetAnimeList = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=favorite`)
      .then(res => res.json());

    SetAnimeList(temp.data.slice(0, 6));
  }

  useEffect(() => {
    GetAnimeList();
  }, [])

  return (
      <Container maxWidth="lg" className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<MainContent animeList={animeList}/>} />
          <Route path="/details/:id" element={<DetailsAnime />} />
        </Routes>
      </Container>
  );
}

export default App;
