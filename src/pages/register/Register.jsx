
// import './Register.scss'
import React, {useState, useRef, useEffect} from 'react';
import * as authApi from '../../api/Auth';
import * as addressApi from '../../api/Address';
import { FaChevronDown } from 'react-icons/fa'

const Register = () => {

    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const [barangays, setBarangays] = useState([]);
    const [ message, setMessage ] = useState('');

    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();
    const zipcodeRef = useRef();

    const [selectedRegion, setSelectedRegion]= useState();
    const [selectedProvince, setSelectedProvince]= useState();
    const [selectedMunicipality, setSelectedMunicipality]= useState();
    const [selectedBarangay, setSelectedBarangay]= useState();
    const [address, setAddress] = useState();

    

 const getAllRegions = async () =>{
        
            if(localStorage.getItem('regions')){
                setRegions(JSON.parse(localStorage.getItem('regions')))
            }else{
                try{
                    const data = await addressApi.getRegions();
                    localStorage.setItem('regions', JSON.stringify(data.data.data))
                    setRegions(data.data.data)
                    console.log(data.data.data)
                }catch(error){
                    console.log(error)
                }
            }
            
    }

    useEffect(()=>{
        getAllRegions()
    }, [])

    const getAllProvinces = async (e) =>{
        setSelectedRegion(e.target.value)
            const details = {region_id: [e.target.value]}
        try{
            const data = await addressApi.getProvinces(details)
            setProvinces(data.data.data)
            console.log(data.data.data)
        }catch(error){
            console.log(error)
        }
    }

    const getAllMunicipality = async (e) =>{
        setSelectedProvince(e.target.value)
        const details ={
            region_id: [
                selectedRegion],
            province_id: [
                e.target.value
              ]
        }
        try{
            const data = await addressApi.getMunicipality(details)
            setMunicipalities(data.data.data)
            console.log(data.data.data)
        }catch(error){
            console.log(error)
        }
    }

    // GET ALL BARANGAY

    const getAllBarangay = async (e) =>{
        setSelectedMunicipality(e.target.value)
           
        const details ={
            region_id: [
                selectedRegion],
            province_id: [
                selectedProvince
              ],
            municipality_id: [
                e.target.value
              ]
        }
        console.log(details)
        try{
            const data = await addressApi.getBarangay(details)
            setBarangays(data.data.data)
            setAddress(data.data.data)
            zipcodeRef.current.value = data.data.data[0].zipcode
            console.log(data.data.data)
        }catch(error){
            console.log(error)
        }
    }

    // DISPLAY REGION
    const displayRegions = [...regions].map(region =>{
        return(
            <option key={region.region_id} value={region.region_id}>
                {region.region_name}
            </option>
        )
    })

    // DISPLAY REGION
    const displayProvinces = [...provinces].map(province =>{
        return(
            <option key={province.province_id} value={province.province_id}>
                {province.province_name}
            </option>
        )
    })

    // DISPLAY MUNICIPALITY
    const displayMunicipalities = [...municipalities].map(municipality =>{
        return(
            <option key={municipality.municipality_id} value={municipality.municipality_id}>
                {municipality.municipality_name}
            </option>
        )
    })

    // DISPLAY BARANGAY
    const displayBarangays = [...barangays].map(barangay =>{
        return(
            <option key={barangay.barangay_id} value={barangay.barangay_name}>
                {barangay.barangay_name}
            </option>
        )
    })

    const handleSelectedBarangay = (e) =>{
        setSelectedBarangay(e.target.value)
    }

// SAVING OR SUBMITING DATA TO API

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // required field(EMAIL, MOBILE with 09121793542 format, Date of birth with ISO format eg. 1996-06-11 {yyyy-mm-dd})
        const credentials = {
            "email": emailRef.current.value,
            "mobile": mobileRef.current.value,
            "first_name": firstNameRef.current.value,
            "middle_name": "",
            "last_name": lastNameRef.current.value,
            "suffix": "",
            "nickname": "",
            "password": passwordRef.current.value,
            "birthdate": "1996-07-10",
            "sex": "",
            "civil_status": "",
            "region": address[0].region_name,
            "province": address[0].province_name,
            "city_municipality": address[0].municipality_name,
            "barangay": selectedBarangay,
            "address": "",
            
            "meta": {
              "key": "value",
              userType: "User",
              zipcode: zipcodeRef.current.value
            }
          }
          console.log(credentials)
        const data = await authApi.Register(credentials).then(response =>{
            // if request successful will return status code: 200
            if(response.status === 200){
                setMessage ({success: 'Successfuly registered'});
                localStorage.removeItem('users');
                setTimeout(() => {
                    window.location.href= '/Login'
                }, 2000);
                
            }
        }).catch(error =>{
            
            setMessage({error: `${error.message}, Existing Email or Mobile, Please Check!`})
        })
    }

    return (

      
    <div className='register-container  mt-[100px] flex flex-row mx-auto items-center justify-center'>
        <div class=" flex flex-col items-center  p-5  h-[600px] w-[500px] shadow-xl">
        <p className='self-start text-2xl font-bold text-red-500 mx-auto'>BUILD ME UP!</p>
        <div class="max-w-md w-full space-y-8">
            <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-red-500">Create Account</h2>
            </div>


            <form class="mt-8 space-y-6" onSubmit={handleSubmit} >
                <input type="hidden" name="remember" value="true"/>
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div className="mb-1">
                            <label for="first_name" class="sr-only">First_Name</label>
                            <input ref={firstNameRef} id="first_name" name="first_name" type="text" autocomplete="first_name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="FirstName"/>
                        </div>
                        
                        <div>
                            <label for="last_name" class="sr-only">Last Name</label>
                            <input ref={lastNameRef} id="last_name" name="last_name" type="text" autocomplete="last_name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name"/>
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input ref={passwordRef} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                        <div>
                            <label for="email-address" class="sr-only">Email Address</label>
                            <input ref={emailRef} id="email-address" name="email-address" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email Address"/>
                        </div>
                        <div>
                            <label for="phone" class="sr-only">Phone Number</label>
                            <input ref={mobileRef} id="phone" name="phone" type="text" autocomplete="phone" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number"/>
                        </div>
                        <div>

                        <label for="address" class="sr-only">Address <span><FaChevronDown/></span></label>
                        {/* <input id="address" name="address" type="text" autocomplete="address" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Address"/>
                        */}
                        <select onChange={getAllProvinces} name="regions" id="regions" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Regions">
                            {displayRegions}
                        </select>

                        <select onChange={getAllMunicipality} name="provinces" id="provinces" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Provinces">
                            {displayProvinces}
                        </select>    
                        <select onChange={getAllBarangay} name="municipalities" id="municipalities" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Municipalities">
                            {displayMunicipalities}
                        </select> 

                        <select onChange={handleSelectedBarangay} name="barangays" id="barangays" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Barangays">
                            {displayBarangays}
                        </select>

                        <input className="ml-3" type="text" ref={zipcodeRef} readOnly />

                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Register
                        </button>
                </div>  
            </form>
        </div>
        
        </div>
        <div className='h-[600px] w-[500px] bg-[#EA4335] shadow-xl cta items-center justify-center p-3'>
            <p className='text-5xl font-bold'>CREATE YOUR CUSTOM PC BUILD</p>
        </div>
        
    </div>

  )
}

export default Register;