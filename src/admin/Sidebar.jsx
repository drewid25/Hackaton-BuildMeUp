import React from 'react'
import { FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Sidebar = ({handleActive}) => {
  return (

    // <div className='p-5'>
    //     <div className="fixed left-2 top-2 flex flex-col h-screen w-[180px] shadow-2xl bg-red-500 p-3 text-white rounded-md">
    //         <div>
    //             <p className='text-lg font-bold'>BUILD ME UP!</p>
    //         </div>
    //         <div className='flex flex-col gap-[20px] mt-[100px]'>
    //             <div className="flex flex-row gap-2 hover:font-bold hover:text-xl">
    //                 <FaHome/>
    //                 <p className=''>Dashboard</p>
    //             </div>
    //             <Link to={'/userList'} className="flex flex-row gap-2">
                    
    //                 <p className='hover:font-bold hover:text-xl'>Users</p>
    //             </Link>
    //             <Link to={'/productList'}>
    //                 <p className='hover:font-bold hover:text-xl'>Products</p>
    //             </Link>
    //             <p className='hover:font-bold hover:text-xl'>Feedbacks</p>
    //             <p className='hover:font-bold hover:text-xl'>Logout</p>
    //         </div>
    //     </div>
    // </div>

    <div className="fixed left-0 top-0 flex flex-col h-screen w-[150px] shadow-2xl bg-red-500 p-3 text-white rounded-r-xl">
      <div>
        <p className='text-lg font-bold'>BUILD ME UP!</p>
      </div>
      <div className='flex flex-col gap-[50px] mt-[100px]'>
        <p className='hover:font-bold hover:text-xl'>Dashboard</p>
        <a onClick={(e)=>handleActive(1)}>
          <p className='hover:font-bold hover:text-xl'>Users</p>
        </a>
        <a onClick={(e)=> handleActive(2)}>
          <p className='hover:font-bold hover:text-xl'>Products</p>
        </a>
        <p className='hover:font-bold hover:text-xl'>Feedbacks</p>
        <p className='hover:font-bold hover:text-xl'>Logout</p>
      </div>
   </div>

  )
}

export default Sidebar;