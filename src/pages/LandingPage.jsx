import React from 'react';
import Navbar from '../component/navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

export default function LandingPage() {

  return (
    // <>
    //       <Navbar />
    //       <div className="product-container">
    //           <div className="product-img-container">
                  
    //           </div>
    //           <div className="product-desc-container">
    //               <h1 className=' text-[1.5rem] text-red-600'>Processor:</h1>
    //               <h1 className=' text-[1.5rem] text-red-600'>RAM:</h1>
    //               <h1 className=' text-[1.5rem] text-red-600'>Video Card:</h1>
    //               <h1 className=' text-[1.5rem] text-red-600'>Video Card:</h1>
    //               <h1 className=' text-[1.5rem] text-red-600'>Storage</h1>
    //               <button className='mt-[1.5rem] bg-red-600 text-white pt-[.5rem] pb-[.5rem] pr-[1rem] pl-[1rem]'>Adds On</button>
    //               <div className="adds-on">
    //                   <div className="add-on-product">
                          
    //                   </div>
    //                   <div className="add-on-product">
                          
    //                   </div>
    //                   <div className="add-on-product">
                          
    //                   </div>
    //                   <div className="add-on-product">
                          
    //                   </div>
    //                   <div className="add-on-product">
                          
    //                   </div>
    //                   <div className="add-on-product">
                          
    //                   </div>
    //               </div>
    //               <div>
    //                   <a href="" className='add-to-cart'><FaShoppingCart/>Add to Cart</a>
    //               </div>
    //           </div>
    //       </div> 
    // </>

    <div className="landing">
          <Navbar />
          <div className="content">
              <Items />
          </div>
    </div>
  )
}

const Items = () =>{
  return(
    <div className="items">
        <div className="column-1">

        </div>
        <div className="column-2">
          
        </div>
    </div>
  )
}

