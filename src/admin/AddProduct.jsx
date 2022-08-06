import React, {useState, useEffect, useRef} from 'react';
import * as inventoryApi from '../api/Inventory';
import Sidebar from './Sidebar';


export default function AddProduct() {

  const [newImage, setNewImage] = useState('');
  const [image, setImage] = useState();
  const [stores, setStores] = useState([]);
  const [media, setMedia] = useState();
  const [mediaUrl, setMediaUrl] = useState();

  const storeRef = useRef();
  const productNameRef = useRef();
  const productDescriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const mediaRef = useRef();


  const fileSelectedHandler = async(event) =>{
    if(event.target.files[0].type.split('/')[0] !== 'image'){
      alert('Error, please select image only.');
      return
    }else{
      setImage(event.target.files[0])
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () =>{
        setNewImage(reader.result.toString());
      };

      reader.readAsDataURL(file);
    }
  }
  // console.log(image)
  // console.log(newImage)

  const handleUpload = async(e) => {
    e.preventDefault();
    // const base64 = await convertBase64(newImage);
    const base64 = newImage.split(',')[1]
    
    const media_details = {
        
        filename: `${Date.now()}.${image.type.split('/')[1]}`,
        content: base64,
        module: "product"
        }
        console.log(media_details)
        
    try{
      const data = inventoryApi.UploadMedia(media_details).then(response =>{
        console.log('Successfuly uploaded')
        console.log(response.data.data)
        setMedia(response.data.data)
        mediaRef.current.value = response.data.data.media_id
        setMediaUrl(response.data.data.media_url)
      }).catch(error=>{
        console.log(error)
      })
    }catch(error){
      console.log(error)
    }
  }

  const handleStore = async () =>{
    if(localStorage.getItem('stores')){
      setStores(JSON.parse(localStorage.getItem('stores')))
    }else{
      try{
        const data = await inventoryApi.getAllStores();
        localStorage.setItem('stores', JSON.stringify(data.data.data))
      }catch(error){
        console.log(error)
      }
    }
  }  

  useEffect(()=>{
    handleStore()
  },[])

  console.log(stores)
  const listOfStores = [...stores].map(store =>{
    return(
      <option value={store.store_id}>
        {store.name}
      </option>
    )
  })

const handleSubmit = async(e) =>{
    e.preventDefault();
    const product_details ={
      
      "store_id": storeRef.current.value,
      "category_id": ['2990d82e-8581-4f76-89cd-63aad8ebb7e9'],
      "name": productNameRef.current.value,
      "brand_name": "Computers",
      "description": productDescriptionRef.current.value,
      "is_active": true,
      "properties": [
          {
            id: 'color-1',
            name: 'color',
            options: [
              "black",
              "gray"
            ],
            },
          {
            id: "size-1",
            name: 'size',
            options: [
              "lg",
              "md"
            ]
        }
      ],
      "variants": [
          {
          "properties": [],
          "name": "colors",
          "description": "test description",
          "price": priceRef.current.value,
          "quantity": quantityRef.current.value,
          "sku_code": "product-1-color-variant",
          "barcode": "ABC-abc-1234",
          "images": [],
          "metas": []
          }
      ],
      "images": [
          {
            media_id: mediaRef.current.value,
            is_main: true,
            order: 1
          }
      ],  
      "metas": [
          {
            key: Date.now().toString(),
            value: [productNameRef.current.value]
          }
      ]
      }
      
      console.log(product_details)

      try{
        const data = await inventoryApi.CreateProduct(product_details);

        console.log(data)
        
     
      }catch(error){
        console.log(error)
      }
}

  const openFileUpload = () =>{
    document.getElementById('selectImage').click()
  }
  return (

    <div className='addProduct'>
      <Sidebar/>
        <div className=' shadow-lg rounded-lg flex flex-row p-2 w-[700px] h-[500px] mx-auto mt-[150px] justify-evenly items-center'>
            <form action="" onSubmit={handleSubmit} className='sec1 flex flex-col gap-2 '>
              <p className='text-2xl font-bold text-center'>Add Product</p>
                <select ref={storeRef} name="store" className='w-[300px]'>
                  {listOfStores}
                </select>

                <input ref={productNameRef} type="text" name='name' placeholder='Product Name' required />
                <input ref={productDescriptionRef} type="text" placeholder='Product Description' required />
                <input ref={priceRef} name="price" id="price" placeholder='Price' required />
                <input ref={quantityRef} name="quantity" id="quantity" placeholder='Quantity' required />

                <input ref={mediaRef} type="text" readOnly name="media_id" id="media_id" placeholder='Image I.D (you need to upload image first.)' required />
                <input type="submit" className='btn text-white bg-red-600 hover:bg-white hover:border-black hover:text-black' value='Save Product' />
            
            </form>
            <form action="" className='sec2  flex flex-col ml-5' onSubmit={handleUpload}>
              <div className="image card flex justify-center items-center p-2 m-2">
                  <img src={newImage} alt="" className='w-[100px] h-[100px] rounded-md' />
              </div>
              <div className='gap-3 flex flex-col justify-center items-center'>
                <input 
                id='selectImage'
                style={{display: 'none'}} 
                type="file" 
                onChange={(event) => fileSelectedHandler(event)}
                /> 

                <button type='button' onClick={openFileUpload} className='btn form-control w-75' ><u><i>Browse Photos</i></u></button>

                <input type="submit" className='btn btn-secondary form-control w-75 text-black' value="Upload"  />
              </div>
              
          
            </form>
        </div>
        
        
       

    </div>  
  )
}
