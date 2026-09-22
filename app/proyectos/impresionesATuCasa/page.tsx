import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function DetalleImpresiones() {

    
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
              E-commerce / Automatización
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Impresiones a tu Casa
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            Pipeline completo para negocios gráficos. Desde la carga de archivos del cliente hasta el cálculo automático de costos y cobro online sin intervención humana.
          </p>
        </header>

        {/* CONTENEDOR DEL VIDEO */}
        <section className="mb-16">
          <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 p-2 rounded-xl shadow-2xl relative">
            {/* 
              Cuando grabes la pantalla de la web funcionando, guardala como "impresiones-demo.mp4" 
              adentro de la carpeta "public" y descomentá esto:
              
              <video 
                src="/impresiones-demo.mp4" 
                controls 
                autoPlay 
                muted 
                loop
                className="w-full h-full object-cover rounded-lg"
              />
            */}
            
            <div className="w-full h-full bg-neutral-950 rounded-lg flex flex-col items-center justify-center border border-neutral-800/50">
              <svg className="w-16 h-16 text-neutral-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <p className="font-mono text-sm text-neutral-500">[ Área reservada para la demo en video del flujo de impresión ]</p>
            </div>
          </div>
        </section>

        {/* Detalles de la Arquitectura */}
        <div className="grid lg:grid-cols-3 gap-12 pb-24">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">El Problema Operativo</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                Las imprentas y gráficas pierden horas productivas todos los días recibiendo PDFs por WhatsApp, contando páginas manualmente para pasar presupuestos y esperando que el cliente envíe el comprobante de transferencia para recién empezar a imprimir. Es un proceso lento, propenso a errores y difícil de escalar.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Solución y Arquitectura</h2>
              <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                Desarrollé un flujo de trabajo (pipeline) donde el usuario es el que hace el trabajo administrativo interactuando con el sistema, dejando a la imprenta enfocada solo en la producción.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p className="text-neutral-300"><strong>Gestión de Archivos en la Nube:</strong> Integración con Cloudflare R2 para procesar y almacenar de forma segura los PDFs e imágenes que suben los clientes a un costo de infraestructura bajísimo.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p className="text-neutral-300"><strong>Cálculo Dinámico:</strong> Lógica en el frontend que permite al cliente seleccionar tamaño, color y anillado, calculando el precio final al instante.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <p className="text-neutral-300"><strong>Cobros Automatizados:</strong> Conexión con la API de MercadoPago. El pedido solo ingresa a la cola de impresión cuando el pago es confirmado por el sistema (vía Webhooks), eliminando la morosidad.</p>
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
                  <span className="text-neutral-400">Frontend / Lógica</span>
                  <span className="text-white font-semibold">React</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400">Almacenamiento</span>
                  <span className="text-white font-semibold">Cloudflare R2</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400">Pasarela de Pagos</span>
                  <span className="text-white font-semibold">MercadoPago API</span>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-neutral-400">UI / Estilos</span>
                  <span className="text-white font-semibold">Tailwind CSS</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-800">
                <a 
                  href="https://impresionesatucasa.com.ar" 
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