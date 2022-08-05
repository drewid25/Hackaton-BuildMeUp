import React from 'react'

export default function Verify() {
  return (
    <div className='verified w-100 m-3 d-flex justify-content-center'>
        <form action="" onSubmit={handleSubmit} className='p-5 card'>
            
            <div className="container d-flex flex-column gap-3 justify-content-center" style={{display: isSent ? 'none' : 'block'}}>
              <h3 className='text-center'>{isSent ? 'Enter Code Here...' : 'Verify Your Email Address'}</h3>
              <p style={{display: isSent ? 'none' : 'block'}} className='text-center'>To continue using Build Me Up, please verify your email address.</p>
              <button style={{display: isSent ? 'none' : 'block'}} type="button" className='btn' onClick={sendEmail} ><u>SEND VERIFICATION EMAIL</u></button>
            </div>
            
            <div className="container d-flex flex-column gap-3" style={{display: isSent ? 'block' : 'none'}}>
              <a style={{display: isSent ? 'block' : 'none'}} className='w-100' href="" onClick={sendEmail}>resend?</a>
              <input style={{display: isSent ? 'block' : 'none'}} className='form-control text-center ' type="text" name='code' id='code' placeholder='Code' ref={codeRef}/>
              <input style={{display: isSent ? 'block' : 'none'}} className='form-control btn btn-primary' type="submit" value="Submit" />
            </div>

        </form>
    </div>
  )
}
