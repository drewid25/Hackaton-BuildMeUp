import React, {useState, useEffect, useRef} from 'react';
import * as authApi from '../api/Auth';
export default function Verify() {


const codeRef = useRef();
const [isSent, setIsSent] = useState(false);
const access_token = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : '';
  

console.log(access_token)

  const sendEmail = async() =>{
      try{
        const data = authApi.SendEmailVerification(access_token)
        setIsSent(true)
      }catch(error){
        console.log(error)
        setIsSent(false)
      }
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

    const code = { code: codeRef.current.value};

      try{
        const data = await authApi.VerifyEmail(code, access_token)
        console.log(data)
        localStorage.removeItem('users');
        window.location.href = '/home';
      }catch(error){
        console.log(error)
      }
  }

 
  return (
    <div className='verified w-100 m-3 d-flex justify-content-center'>
        <form action="" onSubmit={handleSubmit} className='p-5 card'>
            
            <div className="container d-flex flex-column gap-3 justify-content-center" style={{display: isSent ? 'none' : 'block'}}>
              <h3 className='text-center'>{isSent ? 'Enter Code Here...' : 'Verify Your Email Address'}</h3>
              <p style={{display: isSent ? 'none' : 'block'}} className='text-center'>To continue using Build Me Up, please verify your email address.</p>
              <button style={{display: isSent ? 'none' : 'block'}} type="button" className='btn' onClick={sendEmail} ><u>SEND VERIFICATION EMAIL</u></button>
            </div>
            
            <div className="container d-flex flex-column gap-3" style={{display: isSent ? 'block' : 'none'}}>
              <a style={{display: isSent ? 'block' : 'none'}} className='w-100' onClick={sendEmail}>resend?</a>
              <input style={{display: isSent ? 'block' : 'none'}} className='form-control text-center ' type="text" name='code' id='code' placeholder='Code' ref={codeRef}/>
              <input style={{display: isSent ? 'block' : 'none'}} className='form-control btn btn-primary' type="submit" value="Submit" />
            </div>

        </form>
    </div>
  )
}
