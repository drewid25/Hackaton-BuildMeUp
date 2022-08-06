import React from 'react'
import Sidebar from '../component/sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'store', headerName: 'Store', width: 100 },
    { field: 'image', headerName: 'Image', width: 150 },
    { field: 'productName', headerName: 'Product Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 180 },
    {
      field: 'price',
      headerName: 'Price',
      type: Number,
      width: 70,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: Number,
      width: 70,
    },
    {
      field: 'specs',
      headerName: 'Specs',
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
    {id: 1, store: "Acer", image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg", productName: "Columbus", description: "High Performance, Better Graphics", price: 2000, stock: 3, specs: "i5 Intel, SDD, 8gb Ram"},
    {id: 1, store: "Acer", image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg", productName: "Columbus", description: "High Performance, Better Graphics", price: 2000, stock: 3, specs: "i5 Intel, SDD, 8gb Ram"},
    {id: 1, store: "Acer", image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg", productName: "Columbus", description: "High Performance, Better Graphics", price: 2000, stock: 3, specs: "i5 Intel, SDD, 8gb Ram"},
    {id: 1, store: "Acer", image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg", productName: "Columbus", description: "High Performance, Better Graphics", price: 2000, stock: 3, specs: "i5 Intel, SDD, 8gb Ram"},
    {id: 1, store: "Acer", image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg", productName: "Columbus", description: "High Performance, Better Graphics", price: 2000, stock: 3, specs: "i5 Intel, SDD, 8gb Ram"},
    {id: 1, store: "Acer", image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg", productName: "Columbus", description: "High Performance, Better Graphics", price: 2000, stock: 3, specs: "i5 Intel, SDD, 8gb Ram"},
    

  ];

const Products = () => {
  return (
    <div>
        <Sidebar/>
        <div className='flex justify-center items-center'>
        
            <div className='h-[650px] w-[85%] mt-[20px] ml-[120px]'>
                <div className='flex flex-row w-[100%] justify-between'>
                    <p className='text-center mb-[20px] text-2xl font-bold'>PRODUCTS</p>
                    <button className='p-2 bg-red-500 h-[80%] rounded-md shadow-md text-white font-bold'>Add Product</button>
                </div>
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
  )
}

export default Products;