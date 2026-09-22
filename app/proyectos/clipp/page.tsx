import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function DetalleProyecto() {
  return (
    <div className={`${space.className} bg-neutral-950 min-h-screen text-neutral-200 selection:bg-indigo-500/30`}>
      
      {/* Navegación para volver atrás */}
      <nav className="p-6 md:px-12 max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-neutral-400 hover:text-white transition flex items-center gap-2 font-medium"
        >
          ← Volver al inicio
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        
        {/* Cabecera del Proyecto */}
        <header className="mb-12">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 font-bold tracking-widest uppercase rounded">
              SaaS / Dashboard
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Clipp - Plataforma de Reservas
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            Un sistema integral que elimina la gestión manual de turnos por WhatsApp. Los clientes se autogestionan, mientras el local opera desde un panel de control.
          </p>
        </header>

        {/* CONTENEDOR DEL VIDEO */}
        <section className="mb-16">
          <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 p-2 rounded-xl shadow-2xl relative">
            {/* 
              Cuando tengas tu video grabado, poné el archivo (ej: clipp-demo.mp4) 
              adentro de la carpeta "public" de Next.js y descomentá esta etiqueta:
              
              <video 
                src="/clipp-demo.mp4" 
                controls 
                autoPlay 
                muted 
                loop
                className="w-full h-full object-cover rounded-lg"
              />
            */}
            
            {/* Esto es un placeholder visual temporal hasta que pongas el video */}
            <div className="w-full h-full bg-neutral-950 rounded-lg flex flex-col items-center justify-center border border-neutral-800/50">
              <svg className="w-16 h-16 text-neutral-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="font-mono text-sm text-neutral-500">[ Área reservada para la demo en video de Clipp ]</p>
            </div>
          </div>
        </section>

        {/* Detalles de la Arquitectura */}
        <div className="grid lg:grid-cols-3 gap-12 pb-24">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">El Problema</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                La gestión de turnos a través de mensajes directos generaba cuellos de botella operativos. El personal del local perdía tiempo de trabajo respondiendo mensajes, los turnos se solapaban por errores humanos y no existía un registro histórico del flujo de clientes ni del ingreso diario.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Solución y Arquitectura</h2>
              <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                Construí un sistema en dos partes: una interfaz móvil ultrarrápida para que el usuario final agende su turno viendo la disponibilidad real, y un Dashboard administrativo para el local.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p className="text-neutral-300"><strong>Base de datos relacional:</strong> Diseñada para evitar el solapamiento de reservas leyendo los rangos horarios ocupados.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p className="text-neutral-300"><strong>Server Actions:</strong> Todo el procesamiento del formulario de reservas corre del lado del servidor en Next.js para máxima seguridad.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p className="text-neutral-300"><strong>UI Modular:</strong> Creada con Tailwind CSS para garantizar que el sistema se vea como una aplicación nativa en el celular del cliente.</p>
                </li>
              </ul>
            </section>
          </div>

          {/* Barra lateral con el Tech Stack */}
          <div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 sticky top-8">
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Stack Tecnológico</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400">Frontend</span>
                  <span className="text-white font-semibold">Next.js App Router</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400">Base de Datos</span>
                  <span className="text-white font-semibold">Neon (PostgreSQL)</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400">Estilos</span>
                  <span className="text-white font-semibold">Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-neutral-400">Deploy</span>
                  <span className="text-white font-semibold">Vercel</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-800">
                <a 
                  href="https://clipp.com.ar" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block text-center bg-white text-neutral-950 font-bold py-4 hover:bg-neutral-200 transition-colors"
                >
                  Visitar sitio en vivo
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}