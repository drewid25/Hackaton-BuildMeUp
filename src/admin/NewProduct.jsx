import React from 'react'
import Sidebar from './Sidebar'

const NewProduct = () => {
  return (
    <div className='p-[100px]'>
        <Sidebar className=" m-3"/>
        <div className='w-[800px] h-[500px] shadow-lg mx-auto flex flex-col items-center justify-around rounded-md'>
            <div className=''>
                <p className='text-2xl font-bold'>Add Product</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1'>
                    <p>Store:</p>
                    <input type="text" className=' border border-black bg-transparent  rounded-md'/>
                </div>
                <div className='flex flex-row gap-1'>
                    <p>Product Name:</p>
                    <input type="text" className=' border border-black bg-transparent rounded-md'/>
                </div>
                <div className='flex flex-row gap-1'>
                    <p>Price:</p>
                    <input type="text" className=' border border-black bg-transparent rounded-md'/>
                </div>
                <div className='flex flex-row gap-1'>
                    <p>Specs:</p>
                    <input type="text" className=' border border-black bg-transparent rounded-md'/>
                </div>
                <div className='flex flex-row gap-1'>
                    <p>Description:</p>
                    <input type="text" className=' border border-black bg-transparent rounded-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProduct