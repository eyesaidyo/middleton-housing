'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-middleton-green shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side navigation - Desktop */}
          <div className="hidden md:flex space-x-8">
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

          {/* Right side buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && user ? (
              <>
                <span className="text-middleton-neon text-sm hidden md:inline-block">
                  {user.email}
                </span>
                <button
                  onClick={logout}
                  className="text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-middleton-neon hover:text-white p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mounted && mobileMenuOpen && (
        <div className="md:hidden bg-middleton-green shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/for-landlords" className="text-middleton-neon hover:text-white hover:bg-middleton-denim block px-3 py-2 rounded-md text-base font-medium transition-colors">
              For Landlords
            </Link>
            <Link href="/for-tenants" className="text-middleton-neon hover:text-white hover:bg-middleton-denim block px-3 py-2 rounded-md text-base font-medium transition-colors">
              For Tenants
            </Link>
            
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors"
            >
              Services
              <svg className={`ml-2 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link href="/services/property-management" className="text-middleton-neon hover:text-white hover:bg-middleton-denim block px-3 py-2 rounded-md text-sm transition-colors">
                  Property Management
                </Link>
                <Link href="/services/maintenance" className="text-middleton-neon hover:text-white hover:bg-middleton-denim block px-3 py-2 rounded-md text-sm transition-colors">
                  Maintenance
                </Link>
                <Link href="/services/leasing" className="text-middleton-neon hover:text-white hover:bg-middleton-denim block px-3 py-2 rounded-md text-sm transition-colors">
                  Leasing
                </Link>
              </div>
            )}

            <div className="border-t border-middleton-neon/30 pt-4 mt-4">
              {user ? (
                <>
                  <div className="px-3 py-2 text-middleton-neon text-base font-medium">
                    {user.email}
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block text-middleton-neon hover:text-white hover:bg-middleton-denim px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block mt-2 bg-middleton-neon text-middleton-green hover:bg-white hover:text-middleton-green px-3 py-2 rounded-md text-base font-medium text-center transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 