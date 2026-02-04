'use client';

const features = [
  {
    name: 'Dashboard central',
    description:
      'Métricas de ventas, membresías activas, asistencia diaria e ingresos/pérdidas en un solo panel.',
    icon: '📊',
  },
  {
    name: 'Gestión de clientes',
    description:
      'Registro completo de clientes, historial, renovaciones, datos de salud y objetivos fitness.',
    icon: '👥',
  },
  {
    name: 'Pagos y membresías',
    description:
      'Integración con tarjetas, transferencias, QR y wallets digitales, con renovaciones automáticas.',
    icon: '💳',
  },
  {
    name: 'Clases y reservas',
    description:
      'Calendario de clases con límite de cupos, listas de espera y gestión de cancelaciones.',
    icon: '🗓️',
  },
  {
    name: 'Control de acceso',
    description:
      'Integración con códigos QR, tarjetas o huellas para controlar la entrada al gimnasio.',
    icon: '🔑',
  },
  {
    name: 'Productos y ventas',
    description:
      'Gestión de inventario y ventas de suplementos, ropa deportiva y accesorios.',
    icon: '🏷️',
  },
  {
    name: 'Marketing integrado',
    description:
      'Notificaciones push, email y WhatsApp automatizados, como avisos de vencimiento de membresía.',
    icon: '📩',
  },
  {
    name: 'Reportes avanzados',
    description:
      'Reportes de ingresos por mes, retención de clientes y clases más rentables.',
    icon: '📈',
  },
];

export function Features() {
  return (
    <div id="features" className="py-12 bg-white">
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
