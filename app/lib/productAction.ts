"use server"

import { revalidatePath } from "next/cache"
import { Product } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"

export const addProduct = async(formData:FormData)=> {
    const {title, price, stock, color, size, category, desc} = Object.fromEntries(formData)
    try{
        connectToDB()
        const newProduct = new Product({
            title, price, stock, color, size, category, desc
        })
        await newProduct.save()
    }catch(error){
        console.log(error)
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}
export const updateProduct = async(formData:FormData)=> {
    const {id, title, price, stock, color, size, category, desc  } = Object.fromEntries(formData)
    try{
        connectToDB()
        const updateFields = {
            id, title, price, stock, color, size, category, desc
        }
        await Product.findByIdAndUpdate(id, updateFields)
    }catch(error){
        console.log(error)
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const deleteProduct = async(formData:FormData)=> {
    const {id} = Object.fromEntries(formData)
    try{
        connectToDB()
        await Product.findByIdAndDelete(id)
    }catch(error){
        console.log(error)
    }
    revalidatePath('/dashboard/products')
}