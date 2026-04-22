"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { image: "/clock.png", title: "Stay Productive", desc: "Focus on what matters most." },
    { image: "/stamp.png", title: "Manage Your Tasks", desc: "Organize your tasks easily." },
    { image: "/note.png", title: "Access Anywhere", desc: "Your data is synced across devices." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/verify-code");
  };

  return (
    <div className="flex min-h-screen bg-white font-sans overflow-hidden">
      
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-32 xl:px-40">
        {/* Logo */}
        <div className="mb-10">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={150} 
            height={50} 
            className="w-auto h-22 md:h-22 object-contain" 
          />
        </div>
        
        {/* Link Kembali ke Login */}
        <Link href="/login" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors font-medium">
          <ChevronLeft size={20} /> Back to login
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Forgot your password?</h1>
        <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-md">
            Don’t worry, happens to all of us. Enter your email below to recover your password.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="relative">
            <label className="absolute z-10 -top-2.5 left-3 bg-white px-1 text-sm font-medium text-gray-700">Email</label>
            <input 
              required
              type="email" 
              placeholder="Enter your Email" 
              className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#213B7F] transition-all placeholder-gray-400" 
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-[#213B7F] text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all text-lg shadow-md"
          >
            Submit
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm font-medium text-gray-400">Or login with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="flex-1 border border-gray-300 rounded-xl p-3.5 flex justify-center items-center hover:bg-gray-50 transition-colors">
            <FaFacebookF className="text-[#1877F2] text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-xl p-3.5 flex justify-center items-center hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-xl p-3.5 flex justify-center items-center hover:bg-gray-50 transition-colors">
            <FaApple className="text-black text-2xl mb-0.5" />
          </button>
        </div>
      </div>

      {/* KANAN: KOTAK BIRU (SINKRON DENGAN LOGIN/REGISTER) */}
      <div className="hidden lg:flex w-[45%] p-6 pl-0 max-h-screen">
        <div className="bg-[#213B7F] w-full h-full rounded-[2.5rem] flex flex-col items-center justify-between text-center px-12 py-16 shadow-2xl relative overflow-hidden">
          
          <div className="flex-1"></div>
          
          {/* Container Gambar (h-[32rem] agar jarak ke teks stabil seperti di Register) */}
          <div className="flex items-center justify-center z-10 h-[32rem] w-full">
            <Image 
              key={activeIndex} 
              src={slides[activeIndex].image} 
              alt="illustration" 
              width={550} 
              height={550} 
              className="drop-shadow-2xl object-contain transition-all duration-700 animate-in fade-in zoom-in" 
            />
          </div>

          {/* Container Teks & Dots */}
          <div className="flex-1 flex flex-col justify-center items-center z-10 w-full">
            <h2 key={`title-${activeIndex}`} className="text-white text-4xl font-bold mb-3 tracking-wide animate-in slide-in-from-bottom duration-500">
              {slides[activeIndex].title}
            </h2>
            <p key={`desc-${activeIndex}`} className="text-blue-200 text-lg mb-10 animate-in slide-in-from-bottom duration-700">
              {slides[activeIndex].desc}
            </p>
            
            <div className="flex gap-2.5">
              {slides.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2.5 rounded-full transition-all duration-700 ease-in-out ${activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/30"}`}
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}