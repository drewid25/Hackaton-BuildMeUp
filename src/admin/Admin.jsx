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
      <div className="column-1">
        <Sidebar handleActive={handleActive}/>
      </div>
      <div className="column-2">
        <div className="content">
          {
            activePage == 1 ? <Users /> :
            activePage == 2 ? <AddProduct /> :
            ''
            }
            {/* Content like (userlist or add product) */}
        </div>
        
      </div>
        
    </div>
  )
}
