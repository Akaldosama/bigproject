import React from 'react'
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

export default function SingleProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.jpg' alt='' fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name='title' placeholder='Title' />
          <label>Price</label>
          <input type="number" name='price' placeholder='Price' />
          <label>Stock</label>
          <input type="number" name='stock' placeholder='Stock' />
          <label>Color</label>
          <input type="text" name='color' placeholder='Color' />
          <label>Size</label>
          <textarea name="size" placeholder='Size' rows={1} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={1}></textarea>t
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
