import React from 'react'
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
import { updateProduct } from '@/app/lib/productAction'
import { fetchProduct } from '@/app/lib/data'

export default async function SingleProduct({params}:{params:{id:string}}) {
  const id = params?.id
  const product = await fetchProduct(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.jpg' alt='' fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}> 
          <input type='hidden' name='id' value={product.id} />
          <label>Title</label>
          <input type="text" name='title' placeholder={product.title} />
          <label>Price</label>
          <input type="number" name='price' placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name='stock' placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name='color' placeholder={product.color} />
          <label>Size</label>
          <textarea name="size" placeholder={product.size} rows={1} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={1} placeholder={product.desc} />
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
