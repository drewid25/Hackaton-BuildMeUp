import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Users from './Users';
import AddProduct from './AddProduct';

export default function Admin() {

  const [activePage, setActivePage] = useState(0);

 const handleActive = (current) => {
    setActivePage(current)
 } 
console.log(activePage)

  return (
    <div className='dashboard'>
        <Sidebar/>
    </div>
  )
}
