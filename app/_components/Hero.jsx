"use client"
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20 px-6  h-100">
      <div className="text-center max-w-3xl">
        {/* Title */}
        <h2 className="font-extrabold text-[55px] md:text-[60px] text-gray-800 leading-tight">
          Effortless Scheduling Awaits 
        </h2>
        
        {/* Subtitle */}
        <h2 className="text-lg md:text-xl mt-5 text-gray-600">
          Scheduly automates your scheduling and eliminates back-and-forth emails, making booking easier than ever.
        </h2>
        
        {/* Signup Section */}
        <div className="flex flex-col mt-8 gap-6">
          <h3 className="text-sm text-gray-500">Sign up free with Google or Facebook</h3>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <LoginLink>  
            <Button className="flex items-center gap-4 px-6 py-4 bg-[#1877F2] text-white border border-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all">
                <span className="font-medium">Sign up with Google</span>
              </Button>
            </LoginLink>

            <LoginLink>  
              <Button className="flex items-center gap-4 px-6 py-4 bg-[#1877F2] text-white border border-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all">
                <span className="font-medium">Sign up with Facebook</span>
              </Button>
            </LoginLink>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <hr className="w-full border-gray-300" />
            <span className="text-gray-400 text-xs">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Email Signup */}
          <LoginLink>
            <h2 className="text-gray-700 text-sm">
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Sign up free with Email.</span> No credit card required.
            </h2>
          </LoginLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
