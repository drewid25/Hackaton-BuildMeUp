import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './pages/Users';
import Products from './pages/Products';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
