'use client';

import Link from 'next/link';

export function Muestra() {
  return (
    <section id="muestra" className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Cómo funciona</span>
            <span className="block text-primary-600">Nuestro Software</span>
          </h2>
        </div>
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left side - Features */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Aumentar la membresía
              </h2>
              <p className="text-base text-gray-600">
                Consigue nuevas membresías, reservas y pagos directamente desde tu sitio web, redes sociales y app móvil. Aumenta tus reservas un 44 %.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Aumentar la participación de los miembros
              </h2>
              <p className="text-base text-gray-600">
                Envía mensajes de texto, correos electrónicos y notificaciones push. Dirígete a tus miembros con mensajes personalizados para generar más reservas y evitar la pérdida de clientes.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Aumentar los ingresos
              </h2>
              <p className="text-base text-gray-600">
                Genere informes de membresía y rendimiento. Vea cómo el crecimiento y la participación de los miembros se traducen en mayores ingresos.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                Obten una Demostración
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="mt-12 lg:mt-0 lg:relative lg:w-[60%] flex items-center">
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full flex justify-center">
                <img 
                  src="/images/gym2222.png" 
                  alt="Gimnasio" 
                  className="w-[calc(100%+20px)] h-auto max-h-[1350px] object-contain rounded-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
