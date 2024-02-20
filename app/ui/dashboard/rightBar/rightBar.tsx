import React from 'react'
import styles from './rightBar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src='/astronout.png' alt='astronout' fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server  actions are avaailable, partial pre rendering is coming up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
    