"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen bg-white font-sans overflow-hidden">

      {/* ========================================= */}
      {/* KIRI: BAGIAN FORM */}
      {/* ========================================= */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-32 xl:px-40">

        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={500}
            height={100}
            className="w-auto h-20 md:h-20 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-500 mb-8 text-lg">
          Login to access your travelwise account
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              // Ditambahkan: placeholder-gray-400 agar tulisan lebih gelap
              className="border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your Password"
                // Ditambahkan: placeholder-gray-400 agar tulisan lebih gelap
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {show ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm mt-1">
            <label className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#213B7F] rounded cursor-pointer" />
              <span className="font-medium">Remember me</span>
            </label>

            <Link href="/forgot-password" className="text-red-500 font-semibold hover:underline">
              Forgot Password
            </Link>
          </div>

          {/* Button */}
          <button className="bg-[#213B7F] text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all mt-2 text-lg shadow-md">
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center mt-6 text-sm text-gray-600 font-medium">
          Don’t have an account?{" "}
          <Link href="/register" className="text-red-500 font-bold hover:underline">
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm font-medium text-gray-400">Or login with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social */}
        <div className="flex gap-4 justify-center">
          <button className="border border-gray-300 rounded-xl p-3.5 hover:bg-gray-50 transition-colors w-16 flex justify-center items-center">
            <FaFacebookF className="text-[#1877F2] text-xl" />
          </button>
          <button className="border border-gray-300 rounded-xl p-3.5 hover:bg-gray-50 transition-colors w-16 flex justify-center items-center">
            <FcGoogle className="text-xl" />
          </button>
          <button className="border border-gray-300 rounded-xl p-3.5 hover:bg-gray-50 transition-colors w-16 flex justify-center items-center">
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
              src="/note.png"
              alt="note"
              width={400}
              height={380}
              className="drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-600 -mt-20"
            />
          </div>

          <div className="flex-1 flex flex-col justify-end items-center z-10 w-full mb-20">

            <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
              Welcome to Lumina
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