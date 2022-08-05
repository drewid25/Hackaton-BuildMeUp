
// import './Register.scss'
import React, {useState, useRef, useEffect} from 'react';
import * as authApi from '../../api/Auth';
import * as addressApi from '../../api/Address';
import { localsName } from 'ejs';

const Register = () => {

    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const [barangays, setBarangays] = useState([]);
    const [ message, setMessage ] = useState('');

    const regionIdRef = useRef();
    const provinceIdRef = useRef();
    const municipalityIdRef = useRef();
    const barangayRef = useRef();

    const [selectedRegion, setSelectedRegion]= useState();
    const [selectedProvince, setSelectedProvince]= useState();
    const [selectedMunicipality, setSelectedMunicipality]= useState();
    const [selectedBarangay, setSelectedBarangay]= useState();

    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();

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
        const region_id = setSelectedRegion(e.target.value)
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
        setSelectedBarangay(e.target.value)
           
        const details ={
            region_id: [
                selectedRegion],
            province_id: [
                selectedMunicipality
              ],
            municipality_id: [
                e.target.value
              ]
        }
        try{
            const data = await addressApi.getBarangay(details)
            setBarangays(data.data.data)
            console.log(data)
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
            <option key={barangay.barangay_id} value={barangay.barangay_id}>
                {barangay.barangay_name}
            </option>
        )
    })

    return (

      
    <div className='container mt-[100px] flex flex-row mx-auto items-center justify-center'>
        <div class=" flex flex-col items-center  p-5  h-[500px] w-[500px] shadow-xl">
        <p className='self-start text-2xl font-bold text-red-500'>BUILD ME UP!</p>
        <div class="max-w-md w-full space-y-8">
            <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-red-500">Create Account</h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true"/>
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="username" class="sr-only">Username</label>
                <input id="username" name="username" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
                </div>
                <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                </div>
                <div>
                <label for="name" class="sr-only">Name</label>
                <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
                </div>
                <div>
                <label for="email-address" class="sr-only">Email Address</label>
                <input id="email-address" name="email-address" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email Address"/>
                </div>
                <div>
                <label for="phone" class="sr-only">Phone Number</label>
                <input id="phone" name="phone" type="text" autocomplete="phone" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number"/>
                </div>
                <div>
                <label for="address" class="sr-only">Address</label>
                
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

                <select name="barangays" id="barangays" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Barangays">
                    {displayBarangays}
                </select>

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
        <div className='h-[500px] w-[500px] bg-[#EA4335] shadow-xl hidden md:flex items-center justify-center p-3'>
            <p className='text-5xl font-bold'>CREATE YOUR CUSTOM PC BUILD</p>
        </div>
        
    </div>

  )
}

export default Register;