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
            
            <div className="verifyemail-container p-5 rounded-md shadow-2xl  text-white container d-flex flex-column gap-3 justify-content-center" style={{display: isSent ? 'none' : 'block'}}>
          <h3 className='text-center mb-2'>{isSent ? 'Enter Code Here...' : 'Verify Your Email Address'}</h3>
          <div className="">
             <p style={{display: isSent ? 'none' : 'block'}} className='text-center text-white'>To continue using Build Me Up, please verify your email address.</p>
              <button style={{display: isSent ? 'none' : 'block'}} type="button"  onClick={sendEmail} className="text-center btn mt-5 mx-auto text-white hover:text-red-600 hover:bg-white hover:pl-2 hover:pr-2 rounded-md"><u>SEND VERIFICATION EMAIL</u></button>
            </div>
             
            </div>
            
          <div className="otp-container rounded-md shadow-2xl container d-flex flex-column gap-3 " style={{display: isSent ? 'block' : 'none'}}>
          <h2 className="text-white text-center">Enter Authentication Code </h2>
          <div className="input-container">
          <input style={{ display: isSent ? 'block' : 'none' }} className='form-control text-center code' type="text" name='code' id='code' placeholder='Code' ref={codeRef} />
          <input style={{display: isSent ? 'block' : 'none'}} className='form-control btn btn-primary text-center mt-2 otp-button hover:text-red-600 hover:bg-white hover:pl-1 hover:pr-1 ' type="submit" value="Submit" />
          </div> 
          <div className="resend">
            <h2 className="text-white">Need new code? </h2>
            <a style={{display: isSent ? 'block' : 'none'}} className='resend-btn text-black' onClick={sendEmail}>Resend now</a>
          </div>
          
          
          </div>

        </form>
    </div>
  )
}
