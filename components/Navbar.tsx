'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Características', href: '/#features' },
    { name: 'Precios', href: '/precios' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contacto', href: '/contacto' },
  ];

  // Add scroll effect to navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full max-w-5xl mx-auto px-0 bg-white">
        <div className="flex justify-between items-center bg-white h-28">
          <div className="flex items-center h-full -ml-8">
            <Link href="/" className="flex items-center h-full">
              <img 
                src="/images/trainerfit3.png" 
                alt="TainerFit Logo" 
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-black font-semibold'
                      : 'text-gray-700 hover:text-black transition-colors duration-200'
                  } text-base font-medium focus:outline-none focus:ring-0 focus:ring-offset-0`}
                  tabIndex={0}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              Probar Gratis
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden navbar-black" id="mobile-menu">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${pathname === item.href
                  ? '!bg-primary-100 border-primary-600 text-gray-900 font-bold'
                  : 'border-transparent text-white hover:!bg-gray-800 hover:border-primary-400 hover:text-white'
                  } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pl-3">
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-md shadow-sm text-gray-900 bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 transition-all duration-200 transform hover:scale-105"
              >
                Probar Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
