import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GameCard from '../components/GameCard/GameCard'
import Header from '../components/Header/Header'
import Highlights from '../components/Highlights/Highlights'
import { useState } from 'react'
import { gamesList } from '../mock'
import { gameInfo } from '../types'

const Home: NextPage = () => {
  let favoritesFromLocalStorage
  if (typeof window !== 'undefined') {
    favoritesFromLocalStorage = localStorage.getItem('favoritesList') ? JSON.parse(window.localStorage['favoritesList']) : []
  }
  const [favoritesList, setFavoritesList] = useState(favoritesFromLocalStorage)

  const gamesRendering: JSX.Element[] = gamesList.map((game: gameInfo) => {
    return (
      <GameCard
        key={game.id}
        game={game}
        favoritesList={favoritesList}
        setFavoritesList={setFavoritesList}
      />
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>VaporWave</title>
        <meta name="description" content="landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Highlights />

        <div className={styles['games-container']}>
          <h2>BEST SELLERS</h2>
          <div className={styles['games-list']}>
            {gamesRendering}
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
