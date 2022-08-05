import Register from "./pages/register/Register";
import Product from "./pages/product/Product";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
