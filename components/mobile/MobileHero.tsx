'use client';

import Link from 'next/link';

export function MobileHero() {
  return (
    <section className="bg-gray-200 font-sans pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 font-poppins">
            <span className="block">Potencia</span>
            <span className="block">la Gestión de tu</span>
            <span className="block">Gimnasio</span>
          </h1>
          
          <p className="mt-4 text-base text-gray-600">
            La solución todo en uno para la gestión de miembros, pagos, clases y más.
          </p>
          
          <div className="mt-6 space-y-3">
            <Link
              href="/demo"
              className="block w-full px-6 py-3 text-base font-bold text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
            >
              Probar Gratis
            </Link>
            <Link
              href="#contacto"
              className="block w-full px-6 py-3 text-base font-bold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Contactar Ventas
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative rounded-xl shadow-lg overflow-hidden">
            <img
              className="w-full h-auto"
              src="/images/img111112.png"
              alt="Aplicación de gestión de gimnasio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
