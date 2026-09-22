import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <div className={`${space.className} bg-neutral-950 min-h-screen text-neutral-200 scroll-smooth selection:bg-indigo-500/30`}>
      
      {/* 1. HERO: Minimalista y Directo */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
        {/* Efecto de luz sutil en la esquina */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8 font-semibold">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Desarrollo de Software a Medida
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.05]">
            Dejá de apagar incendios. <br />
            <span className="text-neutral-500">Empezá a sistematizar.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            Construyo plataformas web que automatizan la gestión de tu comercio. Si tu negocio creció pero tu forma de organizarlo se quedó en el Excel y WhatsApp, necesitamos hablar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-white text-neutral-950 px-8 py-4 font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              Agendar consultoría
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a 
              href="#sintomas" 
              className="px-8 py-4 font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-center"
            >
              ¿Necesito un sistema?
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN "CHECKLIST" (Identificación del problema) */}
      <section id="sintomas" className="py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Tu negocio te está pidiendo software a gritos si:
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                El trabajo manual no escala. Llega un punto donde vender más significa trabajar el doble y vivir estresado. Un sistema rompe ese límite.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Items del Checklist */}
              {[
                "Tus clientes tienen que esperar a que te desocupes para que les confirmes un turno.",
                "Recibís archivos o pedidos por WhatsApp y se te pierden entre los mensajes.",
                "El control de tu caja o de tu stock depende de que te acuerdes de anotarlo.",
                "Sentís que sos el único que sabe cómo hacer funcionar el negocio."
              ].map((sintoma, i) => (
                <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 flex gap-4 hover:border-indigo-500/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-neutral-300">{sintoma}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECCIÓN CONTACTO: Minimalista */}
      <section id="contacto" className="py-32 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-2">Construyamos tu solución</h2>
            <p className="text-neutral-400 mb-10">Completá el formulario y me pongo en contacto con vos hoy mismo.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-400">Nombre / Negocio</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-400">WhatsApp</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400">¿Qué proceso manual querés automatizar?</label>
                <textarea rows={3} className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-indigo-600 text-white font-bold py-4 hover:bg-indigo-500 transition-colors">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

///////////////////// Nuevo Ejemplo

import { Manrope } from "next/font/google";

// Manrope es una tipografía geométrica, súper limpia y corporativa
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export default function Home() {
  return (
    <div className={`${manrope.className} bg-white min-h-screen text-neutral-900 scroll-smooth selection:bg-teal-200`}>
      
      {/* 1. HERO: Blanco puro, tipografía masiva */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
        
        {/* Etiqueta de Autoridad */}
        <div className="mb-8">
          <span className="text-teal-700 font-bold tracking-widest uppercase text-xs border-b-2 border-teal-700 pb-1">
            Consultoría & Desarrollo Web
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-[1.05] text-neutral-900 mb-8">
          Ordená tu negocio. <br />
          <span className="text-neutral-400">Multiplicá tu tiempo.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-neutral-200 pt-8 mt-4">
          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-medium leading-relaxed">
            Un negocio que depende de tu memoria o de tu WhatsApp, tiene un techo. Construyo sistemas web a medida para que tu operativa diaria funcione sola.
          </p>
          
          <a 
            href="#contacto" 
            className="group flex items-center justify-between gap-6 bg-teal-700 text-white px-8 py-5 rounded-none font-bold text-lg hover:bg-teal-800 transition-colors w-full md:w-auto"
          >
            Hablemos hoy
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN "EL ANTES Y EL DESPUÉS" (Contraste de dolores) */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            La diferencia entre <span className="text-teal-700 italic">sobrevivir</span> y <span className="text-teal-700 italic">escalar</span>.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bloque 1 */}
            <div className="bg-white p-10 border border-neutral-200 shadow-sm">
              <div className="text-neutral-400 font-bold mb-4 line-through">El cuaderno de turnos</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Agenda Automatizada</h3>
              <p className="text-neutral-600">Una plataforma donde tus clientes ven disponibilidad, eligen su horario y vos solo recibís la notificación de la reserva confirmada.</p>
            </div>

            {/* Bloque 2 */}
            <div className="bg-white p-10 border border-neutral-200 shadow-sm">
              <div className="text-neutral-400 font-bold mb-4 line-through">Presupuestos por chat</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Cotización Dinámica</h3>
              <p className="text-neutral-600">Sistema de carga de archivos donde el cliente sube su pedido, el sistema calcula el precio exacto y cobra automáticamente vía MercadoPago.</p>
            </div>

            {/* Bloque 3 */}
            <div className="bg-white p-10 border border-neutral-200 shadow-sm">
              <div className="text-neutral-400 font-bold mb-4 line-through">Memoria y Excel</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Panel de Control (Dashboard)</h3>
              <p className="text-neutral-600">Toda la base de datos de tus clientes, ingresos y métricas centralizadas en una sola pantalla a la que podés acceder desde el celular.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTACTO B2B (Estilo Agencia) */}
      <section id="contacto" className="py-32 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Empecemos a <br/>sistematizar.</h2>
            <p className="text-xl text-neutral-400 mb-12">
              El primer paso es entender cómo funciona tu operación hoy. Completá el formulario, analizamos tus cuellos de botella y te presento una propuesta técnica sin costo.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">01</div>
                <div>Diagnóstico operativo</div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">02</div>
                <div>Propuesta de arquitectura web</div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">03</div>
                <div>Desarrollo y puesta en marcha</div>
              </div>
            </div>
          </div>

          <div className="bg-white text-neutral-900 p-10">
            <h3 className="text-2xl font-bold mb-8">Detalles del negocio</h3>
            <form className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500">Nombre o Comercio</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-neutral-200 px-0 py-3 focus:border-teal-700 outline-none transition-colors bg-transparent font-medium" 
                  placeholder="Escribí acá..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500">WhatsApp de contacto</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-neutral-200 px-0 py-3 focus:border-teal-700 outline-none transition-colors bg-transparent font-medium" 
                  placeholder="Cod. Área + Número"
                />
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-sm font-bold text-neutral-500">Describí brevemente tu proceso manual actual</label>
                <textarea 
                  rows={3} 
                  className="w-full border-b-2 border-neutral-200 px-0 py-3 focus:border-teal-700 outline-none transition-colors bg-transparent resize-none font-medium" 
                  placeholder="Ej: Tomo pedidos por Instagram y los paso a un Excel..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-teal-700 text-white font-bold py-5 mt-4 hover:bg-teal-800 transition-colors flex justify-center items-center gap-2"
              >
                Solicitar análisis
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}