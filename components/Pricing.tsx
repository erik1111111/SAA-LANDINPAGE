'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const pricing = {
  tiers: [
    {
      name: 'Básico',
      price: 49,
      description: 'Perfecto para gimnasios pequeños o entrenadores personales',
      features: [
        'Hasta 100 miembros',
        'Gestión de pagos',
        'App móvil básica',
        'Soporte por correo',
        'Reportes básicos',
      ],
      cta: 'Empezar',
      featured: false,
    },
    {
      name: 'Estándar',
      price: 99,
      description: 'Ideal para gimnasios en crecimiento',
      features: [
        'Hasta 500 miembros',
        'Todas las características Básicas',
        'App móvil premium',
        'Soporte prioritario',
        'Reportes avanzados',
        'Integración de marketing',
      ],
      cta: 'Popular',
      featured: true,
    },
    {
      name: 'Premium',
      price: 199,
      description: 'Para cadenas de gimnasios o instalaciones grandes',
      features: [
        'Miembros ilimitados',
        'Todas las características Estándar',
        'Soporte 24/7',
        'Entrenamiento personalizado',
        'API de integración',
        'Soporte dedicado',
      ],
      cta: 'Empresarial',
      featured: false,
    },
  ],
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Planes a tu medida
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Elige el plan que mejor se adapte a las necesidades de tu gimnasio.
            <br />
            Sin sorpresas, sin contratos a largo plazo.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Facturación mensual
            </span>
            <button
              type="button"
              className="mx-4 flex h-6 w-11 items-center rounded-full bg-black p-0.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="sr-only">Toggle billing</span>
              <span
                className={`h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">Facturación anual</span>
              <span className="ml-2 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                Ahorra 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid max-w-5xl grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                tier.featured ? 'ring-2 ring-black' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <span className="inline-flex items-center rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
                    Más popular
                  </span>
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-600">{tier.description}</p>
                
                <div className="mt-6">
                  <p className="flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      ${isAnnual ? Math.round(tier.price * 12 * 0.8) : tier.price}
                    </span>
                    <span className="ml-1 text-base font-medium text-gray-500">
                      /{isAnnual ? 'año' : 'mes'}
                    </span>
                  </p>
                  {isAnnual && (
                    <p className="mt-1 text-sm text-gray-500">
                      ${tier.price}/mes facturado anualmente
                    </p>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" aria-hidden="true" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className={`block w-full rounded-md px-4 py-3 text-center text-sm font-semibold shadow-sm transition-colors duration-200 ${
                    tier.featured
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-white text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: '¿Puedo cambiar de plan en cualquier momento?',
                answer: 'Sí, puedes cambiar entre planes en cualquier momento desde tu panel de control.'
              },
              {
                question: '¿Ofrecen prueba gratuita?',
                answer: 'Sí, ofrecemos una prueba gratuita de 14 días para que puedas probar todas las características.'
              },
              {
                question: '¿Qué métodos de pago aceptan?',
                answer: 'Aceptamos todas las tarjetas de crédito y débito principales, así como transferencias bancarias.'
              },
              {
                question: '¿Ofrecen soporte técnico?',
                answer: 'Sí, ofrecemos soporte por correo electrónico, chat en vivo y teléfono en nuestros planes superiores.'
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
