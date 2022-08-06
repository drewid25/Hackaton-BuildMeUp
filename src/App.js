import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import LandingPage from './pages/LandingPage';
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/register/Register";
import Product from "./pages/product/Product";
import Verify from './pages/Verify';
import Products from './admin/Products';
import Users from './admin/Users';
import NewProduct from './admin/NewProduct';
// import Admin from './admin/Admin';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/verify" element={<Verify/>} />
        <Route path="/userList" element={<Users/>} />
        <Route path="/productList" element={<Products/>} />
        <Route path="/addProduct" element={<NewProduct/>} />
        {/* <Route path='/admin' element={<Admin />} /> */}
       
      </Routes>
    </BrowserRouter>
     
    
  )
   


       

}

export default App;
