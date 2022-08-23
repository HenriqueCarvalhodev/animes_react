import React from 'react'
import CardAnime from './CardAnime'


function MainContent({ animeList }) {
  return (
    <main>
      {animeList.map(anime => (
        <CardAnime anime={anime}/>
      ))}
    </main>
  )
}

export default MainContent