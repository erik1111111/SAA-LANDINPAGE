'use client';

import Link from 'next/link';

export function MobileCTASection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Listo para transformar tu gimnasio?
        </h2>
        <p className="text-gray-600 mb-8">
          Únete a cientos de gimnasios que ya están creciendo con nosotros.
        </p>
        <div className="space-y-4">
          <Link
            href="/demo"
            className="block w-full px-6 py-3 text-base font-bold text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
          >
            Comenzar Ahora
          </Link>
          <p className="text-sm text-gray-500">
            Sin tarjeta de crédito. Cancela en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}
