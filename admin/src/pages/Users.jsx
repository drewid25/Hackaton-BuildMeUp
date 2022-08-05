import React from 'react'
import Sidebar from '../component/sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'name', headerName: 'Name', width: 180 },
    {
      field: 'emailAddress',
      headerName: 'Email Address',
      type: 'email',
      width: 250,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      width: 160,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 280,
    },
    {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
        return (
            <div className="flex flex-row justify-evenly w-[150px] text-white">
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-white hover:border-red-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View
                    </button>
                </div>
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-white hover:border-red-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Delete
                    </button>
                </div>
                
            </div>
            );
        },
    },
  ];
  
  const rows = [
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},
    { id: 1,  username: "Marvs", name: "Marvin Santillan", emailAddress: "mrvnsntlln10@gmail.com", phone: "09975730703", address: "Cavite City, Cavite"},

  ];
  
const users=()=> {
    return (
        
        <div>
            <Sidebar/>
            <div className='flex justify-center items-center'>
            
                <div className='h-[650px] w-[85%] mt-[20px] ml-[120px]'>
                    <p className=' mb-[20px] text-2xl font-bold'>USERS</p>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        // checkboxSelection={[1]}
                    />
                </div>
            </div>
        </div>
        );
    }

export default users;