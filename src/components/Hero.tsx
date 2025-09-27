'use client';

import Image from "next/image";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-middleton-denim">
      <div className="flex items-center max-w-6xl mx-auto px-4 py-16 gap-8 min-h-[600px]">
        <div className="flex-1 text-center flex flex-col justify-center h-full py-8">
          <Typewriter 
            text="Welcome to Middleton: Your Property Management Partner"
            className="text-4xl md:text-5xl font-semibold text-left mb-8 text-middleton-green font-figtree"
            delay={70}
          />
          <p className="text-lg text-left mb-8 text-middleton-green font-figtree">
            At Middleton, we specialize in connecting landlords with reliable tenants while simplifying property management for landlords.
            Discover flexible solutions for your property needs.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="bg-middleton-denim text-middleton-green font-bold hover:bg-middleton-sun px-6 py-2.5 rounded-md text-sm transition-colors border-2 border-middleton-green hover:border-transparent">
              Learn More
            </button>
            <button className="bg-white text-middleton-green font-bold hover:bg-middleton-denim px-6 py-2.5 rounded-md text-sm transition-colors border-2 border-transparent hover:border-middleton-green">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center h-full opacity-0 animate-slide-in">
          <Image 
            src="/house.jpg" 
            alt="Middleton" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero; 