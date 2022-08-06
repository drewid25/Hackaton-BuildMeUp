import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import * as inventoryApi from '../api/Inventory';
import { list } from 'postcss';
import Aos from 'aos'

export default function LandingPage() {

  useEffect(()=>{
        Aos.init({once: true, duration:3000});
    }, []);
  


const newItems = JSON.parse(localStorage.getItem('Items'));



const list = [...newItems].map(item => <Items name={item.name} description={item.description} image={item.images.url} price={item.price}/>)

return (
    

  <div className="landing">
        <Navbar />
        <div className="content" data-aos='fade-down'>
            {
            list
            }
        </div>
  </div>
)
}

const Items = ({name, description, image, price}) =>{

  

  return(
    <div className="items shadow-xl rounded-md" key={name} >
        <div className="item_header">
            <img src={image} alt="" />
        </div>
        <div className="item_body gap-2">
            <h5>{name}</h5>
            <hr className='border border-black'/>
            <p>{description}</p>
            <h6>{price}</h6>
        </div>
        <div className="item_button">
            <button className='p-2 bg-red-500 w-[50px] rounded-md text-white hover:bg-white border hover:border-black hover:text-black'>Add to cart</button>
        </div>
    </div>
  )
}


