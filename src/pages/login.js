/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from '@heroicons/react/solid'
import  Navbar from '../component/navbar'
export default function LogIn() {
  


  return (
    <>
      <Navbar/>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="container main-container  lg:flex-row  shadow-2xl h-[500px] w-[800px] mt-[200px] ml-[auto] mr-[auto] border-black">
        <div className="min-h-full  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-[400px]  ">
        <div className=" space-y-8">
          <div>
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-red-600">Sign in to your account</h2>
           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={userRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-red-600 hover:text-black">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:border-black hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-[red]"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white group-hover:text-red-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
        </div>
        <div className=" w-[400px]  container-hidden text-center pl-[10px] pr-[10px] pt-[50px]">
          <h1 className="text-white text-[2rem] mt-[100px] ml-[auto] mr-[auto]">Create your own custom PC Build</h1>
        </div>
      </div>
      
    </>
  )
}
