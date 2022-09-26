import Image from 'next/image'
import styles from './GameCard.module.css'
import StarFilledIcon from '../../assets/star-filled.svg'
import StarLinedIcon from '../../assets/star-lined.svg'
import CartIcon from '../../assets/cart.svg'
import AppleIcon from '../../assets/apple-os.svg'
import LinuxIcon from '../../assets/linux-os.svg'
import WindowsIcon from '../../assets/windows-os.svg'
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

    const osIconsListRendering: JSX.Element[] = osIconsList.map((osIcon: string | any) => {
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
            <img src={imageURL} alt='cuphead' />
            <div className={styles.infoContainer}>
                <p className={styles.gameTitle}>{title}</p>
                <div className={styles.iconsContainer}>
                    {osIconsListRendering}
                </div>
            </div>
            <div className={styles.pricingContainer}>
                {listPrice === salePrice ? <></> :
                    <div className={styles.discountBox}>
                        -{100 - Math.round(salePrice / listPrice * 100)}%
                    </div>}
                {listPrice === salePrice ? <></> :
                    <p className={styles.listPrice}>R$ {listPrice.toString().replace('.', ',')}</p>}
                <p>R$ {salePrice.toString().replace('.', ',')}</p>
            </div>
            <div className={styles.buttonsContainer}>
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