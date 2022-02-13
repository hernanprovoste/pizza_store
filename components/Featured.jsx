import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Featured.module.css'

const Featured = () => {
  const [index, setIndex] = useState()
  const images = ['/img/featured.jpg', '/img/featured2.jpg', '/img/featured3.jpg']
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  )
}

export default Featured
