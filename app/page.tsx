"use client"

import { Space_Grotesk } from "next/font/google";
import Link from "next/link";


const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  
  // Función que captura los datos y abre WhatsApp
  const enviarAWhatsApp = (formData: FormData) => {
    
    const nombre = formData.get("nombre");
    const whatsapp = formData.get("whatsapp");
    const problema = formData.get("problema");

    // ACÁ PONÉS TU NÚMERO DE TELÉFONO (Con código de país, sin el +)
    const miWhatsApp = "5491123909529"; 

    // Armamos el texto predeterminado
    const mensaje = `¡Hola Miguel! Vi tu portfolio web y me interesa que armemos un sistema a medida.\n\n*Datos de mi local:*\n- Comercio: ${nombre}\n- Contacto: ${whatsapp}\n\n*Lo que me urge automatizar es:*\n${problema}\n\n¿Qué día de esta semana podés pasarte por el local así tomamos un café, te muestro cómo estamos trabajando hoy y coordinamos el desarrollo?`;
    // Codificamos el texto para que los espacios y saltos de línea funcionen en la URL
    const url = `https://wa.me/${miWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrimos WhatsApp en una pestaña nueva
    window.open(url, '_blank');
  };

  return (
    <div className={`${space.className} bg-neutral-950 min-h-screen text-neutral-200 scroll-smooth selection:bg-indigo-500/30`}>
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 rounded-full backdrop-blur-sm w-fit">
  <span className="text-white">FYT</span>
  <span className="text-indigo-400">Tech</span>
</div>
      {/* 1. HERO: Minimalista y Directo */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
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
              href="#proyectos" 
              className="px-8 py-4 font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-center"
            >
              Ver sistemas en producción
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN "CHECKLIST" */}
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

      {/* 3. SECCIÓN PROYECTOS / CASOS DE ÉXITO */}
      <section id="proyectos" className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Sistemas en producción.
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl">
              No vendo plantillas de diseño. Construyo herramientas operativas que ya están resolviendo cuellos de botella en negocios reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Proyecto 1: Clipp */}
            <div className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-indigo-500/50 transition-colors flex flex-col h-full">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">Next.js</span>
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">PostgreSQL</span>
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">Tailwind</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Clipp - Plataforma de Reservas</h3>
              <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                Sistema integral SaaS (Software as a Service) para barberías y salones de belleza. Permite a los comercios gestionar su agenda, notificar a clientes y eliminar la dependencia de responder turnos por WhatsApp.
              </p>
              <div className="border-t border-neutral-800 pt-6 flex items-center justify-between">
                <Link href="/proyectos/clipp" className="text-indigo-400 font-semibold text-sm group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  Ver detalles de arquitectura <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Proyecto 2: Impresiones a tu Casa */}
            <div className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-indigo-500/50 transition-colors flex flex-col h-full">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">React</span>
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">MercadoPago API</span>
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">Cloudflare R2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Automatización de Imprenta</h3>
              <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                Pipeline completo para gráficas. Los clientes suben sus archivos PDF o imágenes, el sistema formatea y calcula el costo exacto por página, cobrando de forma automática antes de imprimir.
              </p>
              <div className="border-t border-neutral-800 pt-6 flex items-center justify-between">
                <Link href="/proyectos/impresiones" className="text-indigo-400 font-semibold text-sm group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  Ver detalles de arquitectura <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CONTACTO: Minimalista conectada a WhatsApp */}
      <section id="contacto" className="py-32 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border border-neutral-800 bg-neutral-950 p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-2">Construyamos tu solución</h2>
            <p className="text-neutral-400 mb-10">Completá el formulario para enviarme un WhatsApp directo. Te respondo hoy mismo.</p>

            {/* El onSubmit llama a nuestra función */}
            <form action={enviarAWhatsApp} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-semibold text-neutral-400">Nombre / Negocio</label>
                  {/* Agregamos el atributo name para que FormData lo pueda leer */}
                  <input 
                    id="nombre"
                    name="nombre" 
                    type="text" 
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-semibold text-neutral-400">Tu WhatsApp</label>
                  <input 
                    id="whatsapp"
                    name="whatsapp" 
                    type="text" 
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="problema" className="text-sm font-semibold text-neutral-400">¿Qué proceso manual querés automatizar?</label>
                <textarea 
                  id="problema"
                  name="problema" 
                  rows={3} 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Cambiamos el type="button" a type="submit" */}
              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white font-bold py-4 hover:bg-indigo-500 transition-colors"
              >
                Enviar por WhatsApp ↗
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}