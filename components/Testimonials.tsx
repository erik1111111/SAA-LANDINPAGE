'use client';

const testimonials = [
  {
    id: 1,
    quote: "GymManager ha transformado completamente la forma en que manejamos nuestro gimnasio. La gestión de miembros es ahora un juego de niños.",
    attribution: 'María González',
    role: 'Dueña, PowerFit Gym',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 2,
    quote: "La aplicación móvil ha sido un éxito entre nuestros miembros. Las reservas de clases están siempre llenas y el pago automático ha reducido nuestros impagos en un 90%.",
    attribution: 'Carlos Mendez',
    role: 'Gerente, Fitness Pro',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    id: 3,
    quote: "El soporte al cliente es excepcional. Cualquier duda o problema que hemos tenido lo han resuelto en cuestión de minutos.",
    attribution: 'Laura Torres',
    role: 'Directora, CrossFit Evolution',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
];

export function Testimonials() {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Testimonios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center">
                  <img 
                    className="h-12 w-12 rounded-full" 
                    src={testimonial.image} 
                    alt={testimonial.attribution}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.attribution}</h3>
                    <p className="text-primary-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
