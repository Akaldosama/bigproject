import React from 'react'
import styles from '../../../ui/dashboard/users/addUser/addUser.module.css'
import { addUser } from '@/app/lib/userAction'

export default function AddUser() {
  return (
    <div className={styles.container}>
    <form className={styles.form} action={addUser}>
      <input type="text" placeholder='username' name='username' required />
      <input type="email" placeholder='email' name='email' required />
      <input type="password" placeholder='password' name='password' required />
      <input type="text" placeholder='phone' name='phone' required />
      <select name="isAdmin" id="isAdmin">
        <option value={false}>Is Admin?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <select name="isActive" id="isActive">
        <option value={true}>Is Active?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <textarea name="address" id="address" cols="30" rows="2" placeholder='Address'></textarea>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
