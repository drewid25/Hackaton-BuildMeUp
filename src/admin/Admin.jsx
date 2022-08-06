import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Users from './Users';
import Products from './Products';

export default function Admin() {

  const [activePage, setActivePage] = useState(0);

 const handleActive = (current) => {
    setActivePage(current)
 } 
console.log(activePage)
  return (
    <div>
        <Sidebar handleActive={handleActive}/>
        {
        activePage == 1 ? <Users /> :
        activePage == 2 ? <Products /> :
        ''
        }
        {/* Content like (userlist or add product) */}
    </div>
  )
}
