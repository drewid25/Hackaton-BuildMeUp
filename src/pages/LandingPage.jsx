import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import * as inventoryApi from '../api/Inventory';
import { list } from 'postcss';

export default function LandingPage() {

const newItems = JSON.parse(localStorage.getItem('Items'));


const list = [...newItems].map(item => <Items name={item.name} description={item.description} image={item.images.url} price={item.variants[0].price} />)
        
// const selectItems = ()=>{
  //   let newItems = [];

  //   [...items].map((item, index) =>{
  //     let info ={
  //       product_id: item.product_id
  //     }
  //     inventoryApi.ProductInformation(info).then(
  //       response =>{
  //       console.log(response)
  //       newItems.push({data: response.data.data})
  //       }
  //     ).catch(error=>{
  //       console.log(error)
  //     })
  //   })

  // }

  // const list = [...items].map(item => <Items name={item.name} description={item.description} />)

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
              {
              list
              }
          </div>
    </div>
  )
}

const Items = ({name, description, image, price}) =>{
console.log(price)
  return(
    <div className="items" key={name}>
        <div className="item_header">
            <img src={image} alt="" />
        </div>
        <div className="item_body">
            <h5>{name}</h5>
            <p>{description}</p>
            <h6>{price}</h6>
        </div>
        <div className="item_button">
            <button>Add to cart</button>
        </div>
    </div>
  )
}

