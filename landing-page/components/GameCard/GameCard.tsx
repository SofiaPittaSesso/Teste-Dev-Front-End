import Image from 'next/image'
import styles from './GameCard.module.css'
import StarFilledIcon from '../../public/assets/star-filled.svg'
import StarLinedIcon from '../../public/assets/star-lined.svg'
import CartIcon from '../../public/assets/cart.svg'
import AppleIcon from '../../public/assets/apple-os.svg'
import LinuxIcon from '../../public/assets/linux-os.svg'
import WindowsIcon from '../../public/assets/windows-os.svg'
import { useEffect, useState } from 'react'
import { gameCardProps, gameInfo } from '../../types'

enum iconOptions {
    'windows' = WindowsIcon,
    'linux' = LinuxIcon,
    'apple' = AppleIcon
}

const GameCard = (props: gameCardProps) => {
    const { game, favoritesList, setFavoritesList } = props
    const { id, title, imageURL, listPrice, salePrice, osIconsList } = game as gameInfo

    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        const isFavorited = (id: number): boolean => {
            return favoritesList.some((gameId: number) => gameId === id)
        }
        window.localStorage.setItem('favoritesList', JSON.stringify(favoritesList))
        isFavorited(id) && setFavorite(true)
    }, [id, favoritesList])

    const osIconsListRendenring: JSX.Element[] = osIconsList.map((osIcon: string | any) => {
        return (<div key={osIcon}>
            <Image
                src={iconOptions[osIcon]}
                alt={osIcon}
            />
        </div>)
    })

    const favoriteAndUnfavorite = (): void => {
        setFavorite(!favorite)
        !favorite && setFavoritesList([...favoritesList, id])
        favorite && setFavoritesList(favoritesList.filter(gameId => gameId !== id))
    }

    return (
        <div className={styles.card}>
            <img src={imageURL} width={'250px'} alt='cuphead' />
            <div className={styles['info-container']}>
                <p className={styles['game-title']}>{title}</p>
                <div className={styles['icons-container']}>
                    {osIconsListRendenring}
                </div>
            </div>
            <div className={styles['pricing-container']}>
                {listPrice === salePrice ? <></> :
                    <div className={styles['discount-box']}>
                        -{100 - Math.round(salePrice / listPrice * 100)}%
                    </div>}
                {listPrice === salePrice ? <></> :
                    <p className={styles['list-price']}>R$ {listPrice.toString().replace('.', ',')}</p>}
                <p>R$ {salePrice.toString().replace('.', ',')}</p>
            </div>
            <div className={styles['buttons-container']}>
                <button onClick={() => favoriteAndUnfavorite()}>
                    <Image src={favorite ? StarFilledIcon : StarLinedIcon}
                        alt='favorite'
                    />
                </button>
                <button><Image src={CartIcon} alt='addToCart' /></button>
            </div>
        </div>
    )
}

export default GameCard