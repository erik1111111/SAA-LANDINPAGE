'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <div className="bg-gray-200 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center py-16 px-4 sm:py-24 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 px-2">
          <div>¿Listo para llevar tu</div>
          <div>gimnasio al siguiente nivel?</div>
        </h2>
        <p className="mt-6 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 max-w-2xl mx-auto px-2">
          Únete a cientos de gimnasios que ya están transformando su negocio con nuestra plataforma.
        </p>
        <div className="mt-10">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base font-bold rounded-md text-black bg-primary-600 hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Pruebalo Gratis
          </Link>
          <p className="mt-4 text-base text-gray-600">
            Sin tarjeta de crédito requerida. Cancela en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
}
