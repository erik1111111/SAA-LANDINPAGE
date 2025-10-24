'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Precios', href: '/precios' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="navbar-black shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-0 navbar-black">
        <div className="flex justify-between h-28 navbar-black">
          <div className="flex items-center -ml-4">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/trainer7.jpg" 
                alt="Tainer7 Gym Logo" 
                className="h-48 w-auto rounded-lg"
              />
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white transition-colors duration-200'
                  } text-sm font-medium focus:outline-none focus:ring-0 focus:ring-offset-0`}
                  tabIndex={0}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
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
          <div className="pt-2 pb-3 space-y-1 navbar-black">
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
