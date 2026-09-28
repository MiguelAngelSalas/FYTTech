import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import ProyectoHeader from "@/app/componentes/ProyectoHeader";
import ProyectoDescripcion from "@/app/componentes/ProyectoDescripcion";
import CaracteristicasTecnologicas from "@/app/componentes/CaracteristicasTecnologicas";

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
        
        {/* Molde 1: Cabecera */}
        <ProyectoHeader 
          categoria="SaaS / Dashboard"
          titulo="Clipp - Plataforma de Reservas"
          descripcion="Un sistema integral que elimina la gestión manual de turnos por WhatsApp. Los clientes se autogestionan, mientras el local opera desde un panel de control."
        />

        {/* CONTENEDOR DEL VIDEO */}
        <section className="mb-16">
          <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 p-2 rounded-xl shadow-2xl relative">
            <video 
              src="/clipp-demo.mp4" 
              controls 
              autoPlay 
              muted 
              loop
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Contenido a dos columnas */}
        <div className="grid lg:grid-cols-3 gap-12 pb-24">
          
          {/* Molde 2: Descripción y Arquitectura */}
          <ProyectoDescripcion 
            tituloProblema="El Problema"
            textoProblema="La gestión de turnos a través de mensajes directos generaba cuellos de botella operativos. El personal del local perdía tiempo de trabajo respondiendo mensajes, los turnos se solapaban por errores humanos y no existía un registro histórico del flujo de clientes ni del ingreso diario."
            tituloSolucion="Solución y Arquitectura"
            textoSolucion="Construí un sistema en dos partes: una interfaz móvil ultrarrápida para que el usuario final agende su turno viendo la disponibilidad real, y un Dashboard administrativo para el local."
            destacados={[
              {
                titulo: "Base de datos relacional",
                descripcion: "Diseñada para evitar el solapamiento de reservas leyendo los rangos horarios ocupados."
              },
              {
                titulo: "Server Actions",
                descripcion: "Todo el procesamiento del formulario de reservas corre del lado del servidor en Next.js para máxima seguridad."
              },
              {
                titulo: "UI Modular",
                descripcion: "Creada con Tailwind CSS para garantizar que el sistema se vea como una aplicación nativa en el celular del cliente."
              }
            ]}
          />

          {/* Molde 3: Barra lateral de Tecnologías */}
          <CaracteristicasTecnologicas 
            linkSitio="https://clipp.com.ar"
            textoLink="Visitar sitio en vivo"
            stack={[
              { label: "Frontend", value: "Next.js App Router" },
              { label: "Base de Datos", value: "Neon (PostgreSQL)" },
              { label: "Estilos", value: "Tailwind CSS" },
              { label: "Deploy", value: "Vercel" }
            ]}
          />

        </div>
      </main>
    </div>
  );
}