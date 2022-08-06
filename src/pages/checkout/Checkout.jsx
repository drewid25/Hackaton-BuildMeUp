import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import Navbar from '../../component/navbar';

const Checkout = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-red-500 mx-auto w-[80%] h-[100px] mt-[70px] p-3 text-white rounded-md shadow-lg'>
            <div className='flex flex-row'>
                <FaLocationArrow className='text-[20px]'/>
                <p className='ml-2'>Delivery Address</p>
            </div>
            <div className='flex flex-row justify-around mt-3'>
                <p>Name</p>
                <p>Phone</p>
                <p>Address</p>
            </div>
        </div>
        <div className='bg-red-500 mx-auto w-[80%] h-[450px] mt-[50px] p-3 text-white rounded-md shadow-lg'>
            <div className='flex flex-row justify-between'>
                <div>
                    <p>Products on Cart</p>
                </div>
                <div className='flex flex-row gap-[150px]'>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Item Subtotal</p>
                </div>
            </div>
            <div className='flex flex-row mt-10 justify-between'>
                <div className='flex flex-row items-center '>
                    <img src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg" alt="Image Here" className='w-[100px] h-[100px]' />
                    <p className='ml-[50px]'>Item Description</p>
                </div>
                <div className='flex flex-row gap-[200px] items-center mb-4'>
                    <p>₱2000</p>
                    <p>1</p>
                    <p>₱2000</p>
                </div>
            </div>
            <div className='flex items-end justify-end gap-[50px] mt-4'>
                
                <p>Order Total:</p>
                <p>₱2000</p>
            </div>
        </div>
        <div className='justify-end items-end flex mr-[150px] text-white'>
            <button className='mt-5 bg-red-500 rounded-lg p-2 shadow-md'>Checkout</button>
        </div>
        
    </div>
  )
}

export default Checkout