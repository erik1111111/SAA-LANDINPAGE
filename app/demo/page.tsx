import { DemoForm } from "@/components/DemoForm";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Solicita una Demo
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo podemos transformar la gestión de tu gimnasio
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
