export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nimbo Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Portal de Transformación Digital con AI
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Conectamos programadores y empresas con las metodologías más avanzadas
            para transformación digital con enfoque AI-first.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Explorar Contenido
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border border-blue-600 transition-colors">
              Iniciar Sesión
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-green-500 text-2xl mb-4">✅</div>
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600">Next.js 14 configurado</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-green-500 text-2xl mb-4">✅</div>
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <p className="text-gray-600">NestJS configurado</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-yellow-500 text-2xl mb-4">⏳</div>
            <h3 className="text-lg font-semibold mb-2">Database</h3>
            <p className="text-gray-600">MongoDB pendiente</p>
          </div>
        </div>

        {/* Target Audience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Para Programadores
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Metodologías de transformación digital</li>
              <li>• AI-first development</li>
              <li>• Recursos técnicos avanzados</li>
              <li>• Comunidad de desarrolladores</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Para Empresas
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Consultoría especializada</li>
              <li>• Planes de transformación digital</li>
              <li>• Enfoque en PYMES</li>
              <li>• Acompañamiento personalizado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
