import axios from 'axios';

// ADMIN PANEL

const env = process.env;

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


// API CODES BELOW

// GET ALL CATEGORIES

export const GetAllCategories = async() => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/categories`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// CREATE CATEGORY
export const CreateCategory = async(category_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/categories`, category_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// SEARCH SPECIFIC CATEGORY 

export const SearchCategory = async(category_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/categories/${category_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// UPDATE PRODUCT CATEGORY

export const UpdateCategory = async(category_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.update(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/categories/${category_details.category_id}`, category_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// DELETE PRODUCT CATEGORY

export const DeleteCategory = async(category_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.delete(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/categories/${category_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}


// STORE
// List of all stores

export const getAllStores = async() => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/stores`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// Search Store

export const SearchStore = async(store_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/stores/${store_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// CREATE STORE

export const CreateStore = async(store_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/stores`, store_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// UPDATE STORE

export const UpdateStore = async(store_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.put(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/stores/${store_details.store_id}`, store_details), {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        }
    )
}

// DELETE STORE

export const DeleteStore = async(store_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.delete(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/stores/${store_id}`), {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        }
    )
}

// PRODUCTS

// GET ALL PRODUCTS

export const GetAllProducts = async() => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/products`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// GET PRODUCT INFORMATION

export const SearchProduct = async(product_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/products/${product_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// CREATE PRODUCT

export const CreateProduct = async(product_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/products`, product_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// UPDATE PRODUCT

export const UpdateProduct = async(product_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.put(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/products/${product_details.product_id}`, product_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// DELETE PRODUCT

export const DeleteProduct = async(product_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.delete(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/products/${product_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// DELETE PRODUCT CATEGORY

export const DeleteProductCategory = async(product_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.delete(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/product/${product_details.product_id}/category/${product_details.category_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// SALE

// GET ALL SALES

export const GetAllSales = async(store_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/store/${store_id}/sales`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// CREATE SALE

export const CreateSale = async(sale_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/store/${sale_details.store_id}/sales`, sale_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// UPDATE SALE

export const UpdateSale = async(sale_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.put(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/store/${sale_details.store_id}/sales/${sale_details.sale_id}`, sale_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// DELETE SALE

export const DeleteSale = async(sale_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.delete(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/store/${sale_details.store_id}/sales/${sale_details.sale_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}

// MEDIA

// Upload Media

export const UploadMedia = async(media_details) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/medias`, media_details, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })

    )
}

// DELETE Media

export const DeleteMedia = async(media_id) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        await axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/medias/${media_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}


// CLIENT 


// GET ALL PRODUCTS

export const ListOfProducts = async(search) => {
    const clientAuthorizationToken = await getClientAuthorizationToken();
    return (
        axios.post(`${env.REACT_APP_INVENTORY_SERVICE_URL}/products`, search, {
            headers: {
                Authorization: `Bearer ${clientAuthorizationToken}`
            }
        })
    )
}

// GET PRODUCT INFORMATION

export const ProductInformation = async(product) => {
    const adminAuthorizationToken = await getAdminAuthorizationToken();
    return (
        axios.get(`${env.REACT_APP_INVENTORY_SERVICE_URL}/admin/products/${product.product_id}`, {
            headers: {
                Authorization: `Bearer ${adminAuthorizationToken}`
            }
        })
    )
}