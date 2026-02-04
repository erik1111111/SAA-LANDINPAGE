'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <div className="bg-gray-200 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center py-20 px-6 sm:py-24 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          <div className="whitespace-nowrap">¿Listo para llevar tu</div>
          <div className="whitespace-nowrap">gimnasio al siguiente nivel?</div>
        </h2>
        <p className="mt-6 text-xl leading-8 text-gray-700 max-w-2xl mx-auto">
          Únete a cientos de gimnasios que ya están transformando su negocio con nuestra plataforma.
        </p>
        <div className="mt-10">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-black bg-primary-600 hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
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
