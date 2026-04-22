"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-white font-sans overflow-hidden">
      
      {/* ========================================= */}
      {/* KIRI: BAGIAN FORM REGISTER */}
      {/* ========================================= */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-28 xl:px-36 py-10 overflow-y-auto">
        
       {/* Logo */}
               <div className="mb-10">
                 <Image
                   src="/logo.png"
                   alt="logo"
                   width={600}
                   height={200}
                   className="w-auto h-20 md:h-20 object-contain"
                 />
               </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Register</h1>
        <p className="text-gray-500 mb-8 text-lg">
          Let’s get you all set up so you can access your personal account.
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-6">
          
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              {/* Ditambahkan z-10 di sini */}
              <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="Fill your First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
            </div>
            <div className="relative">
              {/* Ditambahkan z-10 di sini */}
              <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Fill your Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              {/* Ditambahkan z-10 di sini */}
              <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
            </div>
            <div className="relative">
              {/* Ditambahkan z-10 di sini */}
              <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
            </div>
          </div>

          {/* Row 3: Role */}
          <div className="relative">
            {/* Ditambahkan z-10 di sini */}
            <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Role</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all text-gray-500 bg-transparent cursor-pointer">
                <option value="" disabled selected>Enter your Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Row 4: Country */}
          <div className="relative">
            {/* Ditambahkan z-10 di sini */}
            <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Country</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all text-gray-500 bg-transparent cursor-pointer">
                <option value="" disabled selected>Choose your Country</option>
                <option value="indonesia">Indonesia</option>
                <option value="malaysia">Malaysia</option>
                <option value="singapore">Singapore</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Row 5: Password */}
          <div className="relative">
            {/* Ditambahkan z-10 di sini */}
            <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
          </div>

          {/* Row 6: Confirm Password */}
          <div className="relative">
            {/* Ditambahkan z-10 di sini */}
            <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center gap-2.5 mt-2">
            <input type="checkbox" className="w-5 h-5 accent-[#213B7F] rounded cursor-pointer" />
            <span className="text-gray-600 font-medium text-sm md:text-base">
              I agree to all the <Link href="#" className="text-red-500 hover:underline">Terms</Link> and <Link href="#" className="text-red-500 hover:underline">Privacy Policies</Link>
            </span>
          </div>

          {/* Button Submit */}
          <button className="bg-[#213B7F] text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all mt-2 text-lg shadow-md">
            Create account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm text-gray-600 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 font-bold hover:underline">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm font-medium text-gray-400">Or Sign up with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="flex-1 border border-gray-300 rounded-xl p-3.5 hover:bg-gray-50 transition-colors flex justify-center items-center">
            <FaFacebookF className="text-[#1877F2] text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-xl p-3.5 hover:bg-gray-50 transition-colors flex justify-center items-center">
            <FcGoogle className="text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-xl p-3.5 hover:bg-gray-50 transition-colors flex justify-center items-center">
            <FaApple className="text-black text-2xl mb-0.5" />
          </button>
        </div>
      </div>

      {/* ========================================= */}
      {/* KANAN: KOTAK BIRU */}
      {/* ========================================= */}
      <div className="hidden lg:flex w-[45%] p-6 pl-0">
        <div className="bg-[#213B7F] w-full h-full rounded-[2.5rem] flex flex-col items-center justify-between text-center px-12 py-16 shadow-2xl relative overflow-hidden">
          
          <div className="flex-1"></div>
          
          <div className="flex items-center justify-center z-10">
            <Image
              src="/stamp.png"
              alt="stamp"
              width={420}
              height={420}
              className="drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-500 -mt-10"
            />
          </div>

           <div className="flex-1 flex flex-col justify-end items-center z-10 w-full mb-35">

            <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
              Manage Your Tasks
            </h2>

            <p className="text-blue-200 text-lg mb-12">
              Organize your tasks easily.
            </p>

            {/* Slider Indicator */}
            <div className="flex gap-2.5">
              <div className="w-8 h-2.5 bg-white rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            </div>

          </div>
          
        </div>
      </div>

    </div>
  );
}