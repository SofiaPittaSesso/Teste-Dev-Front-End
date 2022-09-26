import Image from "next/image"
import styles from './Highlights.module.css'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'

const Highlights = () => {
  return (
    <div className={styles.containerHighlights}>
      <h2>DESTAQUES</h2>
      <div className={styles.highlight}>
        <button><Image src={LeftArrow} alt='leftArrow' /></button>
        <div className={styles.highlightImage}>
          <img src='https://cdn.windowsreport.com/wp-content/uploads/2020/12/Cyberpunk-2077-Banner.jpg' alt='highlight' />
        </div>
        <button><Image src={RightArrow} alt='rightArrow' /></button>
      </div>
    </div>
  )
}

export default Highlights