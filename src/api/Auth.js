import axios from 'axios';

const env = process.env;

// get CLIENT AuthenticationToken function
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

// CLIENT SIDE

// API CODES BELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWWWWWWWWWWWWWWWWWWWWWW

// Register new USER CLIENT
export const Register = async(credentials) => {
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_USERS_SERVICE_URL}/register`, credentials, {
            headers: {
                Authorization: `Bearer ${clientAuthorizationToken}`,
            },
        })

    )
}

export const UserProfile = async(access_token) => {
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_USERS_SERVICE_URL}/profile`, access_token, {
            headers: {
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        })
    )
}

// Login CLIENT

export const Login = async(credentials) => {
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_USERS_SERVICE_URL}/login`, credentials, {
            headers: {
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        })
    )
}


// SEND VERIFICATION

export const SendEmailVerification = async(access_token) => {
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        await axios.get(`${env.REACT_APP_USERS_SERVICE_URL}/profile/email`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Access-Token': `${clientAuthorizationToken}`
            }
        })
    )
}

// VERIFY EMAIL

export const VerifyEmail = async(code, access_token) => {
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        await axios.post(`${env.REACT_APP_USERS_SERVICE_URL}/profile/email`, code, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Access-Token': `${clientAuthorizationToken}`
            }
        })

    )
}