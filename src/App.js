import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LogIn from "./pages/login";
import SingleProduct from './pages/singleproduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LogIn/>}/>
        <Route path="/Login" element={<LogIn/>}/>
        <Route path="/" element={<SingleProduct />}/>
       
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;
