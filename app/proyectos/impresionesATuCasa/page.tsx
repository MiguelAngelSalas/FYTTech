import { Space_Grotesk } from "next/font/google";
import ProjectHeader from "@/app/componentes/ProyectoHeader";
import ProyectoVideo from "@/app/componentes/ProyectoVideo";
import ProyectoDescripcion from "@/app/componentes/ProyectoDescripcion";
import CaracteristicasTecnologicas from "@/app/componentes/CaracteristicasTecnologicas";
import ProjectNav from "@/app/componentes/ProyectoNav";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function DetalleImpresiones() {
  return (
    <div className={`${space.className} bg-neutral-950 min-h-screen text-neutral-200 selection:bg-indigo-500/30`}>
      <ProjectNav 
        ruta="/"
        textoLink="Volver a los proyectos"
      />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <ProjectHeader 
          categoria="E-commerce / Automatización"
          titulo="Impresiones a tu Casa"
          descripcion="Pipeline completo para negocios gráficos. Desde la carga de archivos del cliente hasta el cálculo automático de costos y cobro online sin intervención humana."
        />
        <ProyectoVideo src="/impresiones-demo.mp4" />
        
        <div className="grid lg:grid-cols-3 gap-12 pb-24">
          <ProyectoDescripcion 
            tituloProblema="El Problema operativo"
            tituloSolucion="Solución y Arquitectura"
            textoProblema="Las imprentas y gráficas pierden horas productivas todos los días recibiendo PDFs por WhatsApp, contando páginas manualmente para pasar presupuestos y esperando que el cliente envíe el comprobante de transferencia para recién empezar a imprimir. Es un proceso lento, propenso a errores y difícil de escalar."
            textoSolucion="Desarrollé un flujo de trabajo (pipeline) donde el usuario es el que hace el trabajo administrativo..."
            destacados={[
              {
                titulo: "Gestión de Archivos en la Nube",
                descripcion: "Integración con Cloudflare R2 para procesar y almacenar de forma segura los PDFs."
              },
              {
                titulo: "Cálculo Dinámico",
                descripcion: "Lógica en el frontend que permite al cliente seleccionar tamaño y color."
              },
              {
                titulo: "Cobros Automatizados",
                descripcion: "Conexión con la API de MercadoPago para eliminar la morosidad."
              }
            ]}
          />
          <CaracteristicasTecnologicas 
            linkSitio="https://impresionesatucasa.com.ar"
            stack={[
              { label: "Frontend / Lógica", value: "React" },
              { label: "Almacenamiento", value: "Cloudflare R2" },
              { label: "Pasarela de Pagos", value: "MercadoPago API" },
              { label: "UI / Estilos", value: "Tailwind CSS" }
            ]}
          />
        </div>
      </main>
    </div>
  );
}