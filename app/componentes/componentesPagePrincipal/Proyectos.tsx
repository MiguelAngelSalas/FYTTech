import Link from "next/link";
import ProyectoCard from "@/app/componentes/componentesPagePrincipal/ProyectoCard";

export default function Proyectos() {
  return (
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
          <ProyectoCard 
            titulo="Clipp - Plataforma de Reservas"
            descripcion="Sistema integral SaaS (Software as a Service) para barberías y salones de belleza. Permite a los comercios gestionar su agenda, notificar a clientes y eliminar la dependencia de responder turnos por WhatsApp."
            tags={["Next.js", "PostgreSQL", "Tailwind"]}
            linkHref="/proyectos/clipp"
          />
          <ProyectoCard 
            titulo="Automatización de Imprenta"
            descripcion="Pipeline completo para gráficas. Los clientes suben sus archivos PDF o imágenes, el sistema formatea y calcula el costo exacto por página, cobrando de forma automática antes de imprimir."
            tags={["React", "MercadoPago API", "Cloudflare R2"]}
            linkHref="/proyectos/impresionesATuCasa"
          />
        </div>
      </div>
    </section>
  );
}