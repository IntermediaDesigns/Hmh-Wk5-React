"use client";
import Image from 'next/image'
import styles from './page.module.css'
import defaultPlanets from './lib/planets.jsx'
import Divider from '@/app/components/divider.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
      
          <div className={styles.sectionContainer}>
            <p className={styles.p}>1</p>
          </div>
          <Divider />
          <hr />
          
          <div className={styles.square}></div>

          
          <div className={styles.sectionContainer}>
            <p className={styles.p}>2</p>
          </div>
          <Divider />
          <div className={styles.imgContainer}>
            <Image src='/meme.png'
            width={1000}
            height={900}
            />
            </div>

          <div className={styles.sectionContainer}>
            <p className={styles.p}>3</p>
          </div>
          <Divider />
      
    </main>
  )
}
