import React from 'react'
import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css'
import { addProduct } from '@/app/lib/productAction'

export default function AddProductPage() {
  return (
    <div className={styles.container}>
        <form className={styles.form} action={addProduct}>
            <input type="text" placeholder='Title' name='title' required />
            <select name="cat" id="cat">
                <option value="general">Choose a Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder='Price' name='price' required />
            <input type="number" placeholder='Stock' name='stock' required />
            <input type="text" placeholder='Color' name='color' />
            <input type="text" placeholder='Size' name='size' />
            <textarea name="desc" id="desc" rows={1} placeholder='Description' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  ) 
}
