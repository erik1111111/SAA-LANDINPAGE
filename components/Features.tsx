'use client';

const features = [
  {
    name: 'Gestión de Miembros',
    description: 'Administra fácilmente la información de los miembros, seguimiento de asistencia y estado de membresías.',
    icon: '👥',
  },
  {
    name: 'Pagos Automatizados',
    description: 'Cobros recurrentes automáticos, seguimiento de pagos y recordatorios personalizables.',
    icon: '💳',
  },
  {
    name: 'Programación de Clases',
    description: 'Crea horarios de clases, gestiona instructores y permite reservas en línea.',
    icon: '📅',
  },
  {
    name: 'Aplicación Móvil',
    description: 'Acceso para miembros e instructores a través de nuestra aplicación móvil dedicada.',
    icon: '📱',
  },
  {
    name: 'Reportes y Análisis',
    description: 'Métricas detalladas sobre asistencia, ingresos y rendimiento de tu gimnasio.',
    icon: '📊',
  },
  {
    name: 'Soporte 24/7',
    description: 'Asistencia técnica disponible en todo momento para resolver cualquier duda o problema.',
    icon: '🛟',
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Características</h2>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Todo lo que necesitas</span>
            <span className="block text-primary-600">para tu gimnasio</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Una solución completa diseñada para simplificar la gestión de tu negocio de fitness.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white text-2xl">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
