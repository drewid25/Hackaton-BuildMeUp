import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import LandingPage from './pages/LandingPage';
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/register/Register";
import Product from "./pages/product/Product";
import Verify from './pages/Verify';
import React, {useState, useEffect} from 'react';
import * as inventoryApi from './api/Inventory';
// import Admin from './admin/Admin';


function App() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadItems =  () =>{
    let newItems = [];
      const search = {
        search: 'a'
      }

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
        <Route path="/product" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/verify" element={<Verify/>} />
        {/* <Route path='/admin' element={<Admin />} /> */}
       
    </Routes>
    </BrowserRouter>
     
    
  )
   


       

}

export default App;
