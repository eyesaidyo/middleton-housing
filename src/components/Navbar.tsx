'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-middleton-green shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side navigation */}
          <div className="flex space-x-8">
            <Link href="/for-landlords" className="text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-sm font-medium transition-colors">
              For Landlords
            </Link>
            <Link href="/for-tenants" className="text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-sm font-medium transition-colors">
              For Tenants
            </Link>
            <div className="relative">
              <button
                className="text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                onClick={() => mounted && setServicesOpen(!servicesOpen)}
              >
                Services
                <svg className={`ml-2 h-4 w-4 transition-transform ${mounted && servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mounted && servicesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/services/property-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-middleton-denim">
                      Property Management
                    </Link>
                    <Link href="/services/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-middleton-denim">
                      Maintenance
                    </Link>
                    <Link href="/services/leasing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-middleton-denim">
                      Leasing
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Logo in the middle */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/middleton_logo.png"
                alt="Middleton Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-middleton-neon font-figtree">Middleton</span>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-middleton-neon text-middleton-green hover:bg-white hover:text-middleton-green px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 