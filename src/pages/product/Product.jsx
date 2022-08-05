import React from 'react'
import Navbar from '../../component/navbar'
const Product = () => {
    return (
        <>
            <Navbar/>
       <div className='flex flex-row items-center p-[50px] products-container'>
        <div className='bg-red-500 w-[400px] h-[500px] rounded-lg flex flex-col shadow-lg'>
            <input type="text" placeholder='Search' className='rounded-lg w-[80%] h-[40px] mx-[auto] mt-5 text-center'/>
            <div className='text-white ml-[50px] mt-6'>
                <p>PC Set</p>
                <p>System Unit</p>
                <p>Monitor</p>
                <p>Keyboard</p>
                <p>Mouse</p>
                <p>Headset</p>
                <p>Webcam</p>
            </div>
        </div>
        <div className=' ml-[50px] gap-5 flex flex-row flex-wrap w-[1000px] justify-evenly'>
            <div className='shadow-xl p-3'>
                <div className='bg-red-500 h-[250px] w-[350px] rounded-md shadow-xl mb-3'>
                
                </div>
                <hr className='border border-black'/>
                <div className='flex flex-row justify-between'>
                    <div>
                        <p>PC Build</p>
                        <p>Details</p>
                    </div>
                    <div>
                        <p>₱2000</p>
                    </div>
                </div>
            </div>
            <div className='shadow-xl p-3'>
                <div className='bg-red-500 h-[250px] w-[350px] rounded-md shadow-xl mb-3'>
                
                </div>
                <hr className='border border-black'/>
                <div className='flex flex-row justify-between'>
                    <div>
                        <p>PC Build</p>
                        <p>Details</p>
                    </div>
                    <div>
                        <p>₱2000</p>
                    </div>
                </div>
            </div>
            <div className='shadow-xl p-3'>
                <div className='bg-red-500 h-[250px] w-[350px] rounded-md shadow-xl mb-3'>
                
                </div>
                <hr className='border border-black'/>
                <div className='flex flex-row justify-between'>
                <div>
                    <p>PC Build</p>
                    <p>Details</p>
                </div>
                <div>
                    <p>₱2000</p>
                </div>
            </div>
            </div>
            <div className='shadow-xl p-3'>
                <div className='bg-red-500 h-[250px] w-[350px] rounded-md shadow-xl mb-3'>
                
                </div>
                <hr className='border border-black'/>
                <div className='flex flex-row justify-between'>
                <div>
                    <p>PC Build</p>
                    <p>Details</p>
                </div>
                <div>
                    <p>₱2000</p>
                </div>
            </div>
            </div>
        </div>
    </div>
      
      </>
   
  )
}

export default Product