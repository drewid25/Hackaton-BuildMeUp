import axios from 'axios';

const env = process.env;

// ADMIN PANEL

// get ADMIN AuthenticationToken function
const getAdminAuthorizationToken = async() => {
    try {
        const { data } = await axios.post(`${env.REACT_APP_WALLETS_SERVICE_URL}/auth`, {
            key: env.REACT_APP_ADMIN_API_KEY,
            secret: env.REACT_APP_ADMIN_SECRET_KEY,
        })
        return data.access_token
    } catch (error) {
        console.log(error)
    }
}

// get all registered account
export const getAllAccounts = async() => {
    // get the authorization token using admin key
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.get(`${env.REACT_APP_USERS_SERVICE_URL}/accounts`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// CREATE ACCOUNT
export const createAccount = async(credentials) => {
    // get the authorization token using admin key
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.post(`${env.REACT_APP_USERS_SERVICE_URL}/accounts`, credentials, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// DELETE ACCCOUNT

export const deleteAccount = async(user_id) => {
    // get the authorization token using admin key
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.delete(`${env.REACT_APP_USERS_SERVICE_URL}/accounts/${user_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// UPDATE ACCOUNT