'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:pt-20 sm:pb-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-4 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left lg:col-span-6">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Potencia</span>
              <span className="block text-primary-600">la Gestión de tu</span>
              <span className="block">Gimnasio <span className="text-gray-900">con Nosotros</span></span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              La solución todo en uno para la gestión de miembros, pagos, clases y más. Optimiza las operaciones de tu gimnasio y lleva tu negocio al siguiente nivel.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                Pruebalo Gratuitamente
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-bold rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                Contactar Ventas
              </Link>
            </div>
          </div>

          {/* Right side - Image with Smooth Zoom */}
          <div className="mt-12 lg:mt-0 lg:col-span-5 lg:col-start-7 lg:-mr-32">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out transform hover:scale-110"
                    src="/images/img111112.png"
                    alt="Aplicación de gestión de gimnasio"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
