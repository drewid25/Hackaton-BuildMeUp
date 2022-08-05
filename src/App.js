import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import SingleProduct from './pages/singleproduct';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
         
    
       
    </Routes>
    </BrowserRouter>
     
       
   
   

  );
}

export default App;
