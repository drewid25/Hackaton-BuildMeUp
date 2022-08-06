import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import LandingPage from './pages/LandingPage';
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/register/Register";
import AddProduct from './admin/AddProduct';
import Users from './admin/Users';
import Verify from './pages/Verify';
import React, {useState, useEffect} from 'react';
import * as inventoryApi from './api/Inventory';

import Products from './admin/Products';
import 'aos/dist/aos.css'

import NewProduct from './admin/NewProduct';
// import Admin from './admin/Admin';
import Admin from './admin/Admin';




function App() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadItems =  () =>{
    let newItems = [];
      const search = {
        search: 'a'
      }
      if(localStorage.getItem('Items')){
          
      }else{
       
      
      try{
        inventoryApi.ListOfProducts(search).then(response=>{
          // setItems(response.data.data)
          const newData = response.data.data;
         

          [...newData].map((item) =>{
            let info ={
              product_id: item.product_id
            }
            inventoryApi.ProductInformation(info).then(
              response =>{
                if (response.status === 200){
                  
                  newItems.push(response.data.data)
                }
                localStorage.setItem('Items', JSON.stringify(newItems))
              }
            ).catch(error=>{
              console.log(error)
            })
          })
          
        })

      }catch(error){
        console.log(error)
        setIsLoaded(false);
      }
      console.log(newItems)
      setItems(newItems)
      setIsLoaded(true);
    }
      
  }

useEffect(()=>{
    loadItems()
}, [])

console.log(items)
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/" element={<LandingPage /> }/>
        <Route path="/register" element={<Register />}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/verify" element={<Verify/>} />


        <Route path="/userList" element={<Users/>} />
        <Route path="/productList" element={<Products/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        
        

        <Route path='/admin' element={<Admin />} />

       
      </Routes>
    </BrowserRouter>
     
    
  )
   


       

}

export default App;
