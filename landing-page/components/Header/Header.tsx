import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>VaporWave</h1>
            </div>
            <div className={styles.menu}>
                <button>CATEGORIAS</button>
                <button>FAVORITOS</button>
                <button>CARRINHO</button>
                <button>ACESSAR CONTA</button>
            </div>
        </header>
    )
}

export default Header