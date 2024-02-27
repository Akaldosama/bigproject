import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import React from 'react'
import styles from '../../ui/dashboard/products/products.module.css'
import Image from 'next/image'
import { fetchProducts } from '@/app/lib/data'
import { IProductPromise } from '@/app/types/products'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { deleteProduct } from '@/app/lib/productAction'

export default async function Products({searchParams}: {searchParams:{q:string, page: string}}) {
  const q = searchParams?.q || ''
  const page = Number(searchParams?.page) || 1
  const results: IProductPromise | undefined = await fetchProducts(q, page)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a Product' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            {/* <td>Created At</td> */}
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            results?.products?.map((product) => {
              return <tr key={product._id}>
                <td>
                  <div className={styles.product}>
                  <Image src={product.img || '/noavatar.jpg' } alt='' width={40} height={40} className={styles.productImage}/>
                  {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                {/* <td>{product.createdAt}</td> */}
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="text" hidden name='id' value={product._id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form> 
                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <Pagination count={results?.count} />
    </div>
  )
}