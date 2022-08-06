import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = ({handleActive}) => {
  return (
    <div className="sidebar fixed left-0 top-0 flex flex-col h-screen w-[150px] shadow-2xl bg-red-500 p-3 text-white rounded-r-xl">
      <div>
        <p onClick={(e)=> handleActive(0)} className='text-lg font-bold'>BUILD ME UP!</p>
      </div>
      <div className='flex flex-col gap-[50px] mt-[100px]'>
        <p className='hover:font-bold hover:text-xl'>Dashboard</p>
        <a href='/admin/users'>
          <p className='hover:font-bold hover:text-xl'>Users</p>
        </a>
        <a href='/admin/addproduct'>
          <p className='hover:font-bold hover:text-xl'>Add Product</p>
        </a>
        <p onClick={(e)=> handleActive(0)} className='hover:font-bold hover:text-xl'>Feedbacks</p>
        <p onClick={(e)=> handleActive(0)} className='hover:font-bold hover:text-xl'>Logout</p>
      </div>
   </div>
  )
}

export default Sidebar;