import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'


export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                 src='/noavatar.jpg'
                 alt='avatar'
                 width={40}
                 height={40}
                 className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                 src='/noavatar.jpg'
                 alt='avatar'
                 width={40}
                 height={40}
                 className={styles.userImage}
                />
                Bob Smith
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>02.09.2023</td>
            <td>$2.500</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                 src='/noavatar.jpg'
                 alt='avatar'
                 width={40}
                 height={40}
                 className={styles.userImage}
                />
                William Shekspier
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>21.03.2022</td>
            <td>$1.800</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
