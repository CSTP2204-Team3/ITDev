import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { NextApiResponse } from "next";
import User from "@/lib/schema/User";

export default function register() {
  const router = useRouter()
  const [password2, setPassword2] = useState('')
    const formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: async (values: any) => {
        // Do something with the form values
        try {
          if(values.password !== password2){
            throw new Error("Password doesn't match!")
          }
          console.log("Submit", values)
          await axios.post("/api/register", { user: values })
          router.push('/login')
        } catch (e: any) {
          setPasswordError(e.message)
        }
      }
    });
    const [passwordError, setPasswordError] = useState('')
    useEffect(()=>{
      console.log(passwordError)
    }, [passwordError])
    return (
      <>
        <div className="flex justify-center min-h-full bg-indigo-900 lg:px-[5rem]">
          <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img className="h-12 w-auto" src="" alt="Vexpert Logo" />
                <h2 className="mt-6 text-3xl text-slate-100 font-bold tracking-tight text-gray-900">
                  Register your account!
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={formik.handleSubmit} method="POST" className="space-y-6">
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
                          value={formik.values.email}
                          type="email"
                          autoComplete="email"
                          required
                          onChange={formik.handleChange}
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
                          id="password"
                          name="password"
                          value={formik.values.password}
                          type="password"
                          autoComplete="password"
                          required
                          onChange={formik.handleChange}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password2"
                        className="block text-sm font-medium text-slate-100"
                      >
                        Re-enter Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password2"
                          name="password2"
                          type="password"
                          autoComplete="current-password"
                          onChange={(e)=>{setPassword2(e.target.value)}}
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <p className="text-white">{passwordError}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                          href="/login"
                          className="font-medium text-slate-100 hover:text-slate-1000"
                        >
                          Already have account?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-slate-100 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Register
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
