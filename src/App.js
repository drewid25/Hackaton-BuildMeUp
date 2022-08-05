import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import LandingPage from './pages/LandingPage';
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/register/Register";
import Product from "./pages/product/Product";
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
        {/* <Route path='/admin' element={<Admin />} /> */}
       
    </Routes>
    </BrowserRouter>
     
    
  )
   


       

}

export default App;
