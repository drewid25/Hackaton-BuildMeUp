import axios from 'axios';

const env = process.env;

// GET CLIENT AUTHORIZATION TOKEN

const getClientAuthorizationToken = async() => {
    try {
        const { data } = await axios.post(`${env.REACT_APP_WALLETS_SERVICE_URL}/auth`, {
            key: env.REACT_APP_API_KEY,
            secret: env.REACT_APP_SECRET_KEY,
        })
        return data.access_token
        
    } catch (error) {
        console.log(error)
    }
}

// API CODE BELOW

// get all registered account
export const getRegions = async() => {
    // get the authorization token using admin key
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        await axios.post(`${env.REACT_APP_ADDRESS_SERVICE_URL}/regions`, {},
        {
            headers: {
                Authorization: `Bearer ${clientAuthorizationToken}`
            },
        }
        )
    )
}

// GET Province

export const getProvinces = async(data) =>{
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return(
        await axios.post(`${env.REACT_APP_ADDRESS_SERVICE_URL}/provinces`, data,
        {
            headers:{
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        })
    )
}

// GET MUNICIPALITY

export const getMunicipality = async(data) =>{
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return(
        await axios.post(`${env.REACT_APP_ADDRESS_SERVICE_URL}/municipalities`, data,
        {
            headers:{
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        })
    )
}

// GET BARANGAY

export const getBarangay = async(data) =>{
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return(
        await axios.post(`${env.REACT_APP_ADDRESS_SERVICE_URL}/barangays`, data,
        {
            headers:{
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        })
    )
}
