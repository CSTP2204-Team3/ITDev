import axios from 'axios';
import { useEffect, useState } from 'react';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/router';
export default function Login() {


const [user, setUser] = useState({
  email: "",
  password: ""
})
const router = useRouter()
const [errorMessage, setErrorMessage] = useState('')

// useEffect(()=>{
  
// }, [errorMessage])
const onChangeHandler =(e: any)=>{
  setUser({
    ...user,
    [e.target.name]: e.target.value
    });
    console.log(user)
}


const submitHandler = async (e:any)=>{
  e.preventDefault()
  try{
    
    const data = await signIn('credentials', {
      redirect: false,
      email: user.email,
      password: user.password
    })

    console.log(data)
    if(data?.ok !== true){
      throw new Error("Email or password is not correct!")
    }
    if(data?.ok === true){
      router.push('/')
    }
  }catch(e: any){
    setErrorMessage(e.message)
  }
}

  return (
    <>
      <div className="flex min-h-full bg-indigo-900 lg:px-[5rem]">
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="mt-[100px] p-8">
            <h2 className="mt-6 text-slate-100 font-bold tracking-tight lg:text-3xl xl:text-5xl ">
              vExpert is an online resource where you can get advice from
              professionals in real time.{" "}
            </h2>
            <h2 className="mt-6 text-slate-100 font-bold tracking-tight lg:text-3xl xl:text-6xl">
              Video chat with your expert now!
            </h2>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-12 w-auto" src="" alt="Vexpert Logo" />
              <h2 className="mt-6 text-slate-100 text-3xl font-bold tracking-tight text-slate-100">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form method="POST"  className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-100"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={(e)=>{onChangeHandler(e)}}
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-100"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        name="password"
                        id="password"
                        type="password"
                        onChange={(e)=>{onChangeHandler(e)}}
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <p className='text-white'>{errorMessage}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-slate-100 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-slate-100"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-slate-100 hover:text-slate-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <a
                        href="/register"
                        className="font-medium text-slate-100 hover:text-slate-500"
                      >
                        Don&apos;t have an account?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={(e)=>submitHandler(e)}
                      className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-slate-100 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                         
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
