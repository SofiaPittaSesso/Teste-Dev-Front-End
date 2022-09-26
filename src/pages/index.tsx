import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GameCard from '../components/GameCard/GameCard'
import Header from '../components/Header/Header'
import Highlights from '../components/Highlights/Highlights'
import { useState } from 'react'
import { gamesList } from '../mock'
import { gameInfo } from '../types'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      games: gamesList
    },
    revalidate: 30
  }
}

const Home: NextPage = ({ games }: InferGetStaticPropsType<typeof getStaticProps>) => {
  let favoritesFromLocalStorage
  if (typeof window !== 'undefined') {
    favoritesFromLocalStorage = localStorage.getItem('favoritesList') ? JSON.parse(window.localStorage['favoritesList']) : []
  }
  const [favoritesList, setFavoritesList] = useState(favoritesFromLocalStorage)

  const gamesList: JSX.Element[] = games.map((game: gameInfo) => {
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

        <div className={styles.gamesContainer}>
          <h2>BEST SELLERS</h2>
          <div>
            {gamesList}
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
