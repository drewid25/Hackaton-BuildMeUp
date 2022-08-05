import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import SingleProduct from './pages/singleproduct';
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/register/Register";
import Product from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
    
       
    </Routes>
    </BrowserRouter>
     
    
  )
}

export default App;
