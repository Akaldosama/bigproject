import React from 'react'
import Link from 'next/link'
import styles from './login.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder='Username' name='username' />
      <input type="password" placeholder='Paassword' name='password' />
      <Link href='/dashboard' className='underline'>Login</Link>
      </form>
    </div>
  )
}
