import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar';
import * as userApi from '../api/User'

const Users=()=> {

    const [users, setUsers] = useState([]);


        const handleDelete = async(e) =>{
            const id = e.target.id;

            try{
                const data = await userApi.deleteAccount(id)
                const newUsers = [...users].filter(user =>user.id !== id)
                localStorage.setItem('users', JSON.stringify(newUsers))
                setUsers(newUsers);
            }catch(error){
                console.log(error)
            }
        }

        const list = [...users].map(user =>{
            return (
                <tr key={user.id}>
                    <td>{`${user.last_name}, ${user.first_name}`}</td>
                    <td>{user.birthdate}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td style={{
                        color: user.email_verified ? 

                        'green' : user.meta.userType == 'Admin' ? 'green' : 'red'
                    }}>
                        {
                        user.email_verified  ? 
                        'True' : user.meta.userType == 'Admin' ? 'True' : 
                        'False' 
                        }

                    </td>

                    <td>{user.meta.userType}</td>
                    
                    <td>
                        <a className='btn text-danger' id={user.id} onClick={handleDelete}>
                            <svg id={user.id} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path id={user.id} d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                        </a>
                    </td>
                </tr>
            )
            
        }
        )

        const loadUsers = async () =>{
            
                localStorage.getItem('users') ?

                    setUsers(JSON.parse(localStorage.getItem('users')))
                    :
                userApi.getAllAccounts().then(response =>{
                    if(response.status === 200){
                        // console.log(response)
                        setUsers(response.data.data);
                        // console.log(response.data.data)
                        localStorage.setItem('users', JSON.stringify(response.data.data))
                    }
            }) 
            
        }

useEffect(()=>{
    loadUsers()
}, [])

    return (
    
        <div className='container'>
        <Sidebar/>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Birth Date</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Verified</th>
                    <th>Role</th>
                    <th colSpan={2} className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    </div>
    
    )

    }
export default Users;