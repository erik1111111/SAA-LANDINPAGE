'use client';

export function MobileFeatures() {
  const features = [
    {
      name: 'Gestión de Miembros',
      description: 'Controla el acceso, pagos y membresías de todos tus clientes en un solo lugar.',
      icon: '👥',
    },
    {
      name: 'Agenda de Clases',
      description: 'Programa y gestiona tus clases de manera sencilla y eficiente.',
      icon: '📅',
    },
    {
      name: 'Pagos en Línea',
      description: 'Acepta pagos de manera segura y automatizada.',
      icon: '💳',
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Todo lo que necesitas para tu gimnasio
        </h2>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
