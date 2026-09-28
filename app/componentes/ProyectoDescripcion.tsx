import ElementosDestacados from "@/app/componentes/ElementosDestacados";
interface Destacados {
  titulo: string;
  descripcion: string;
}

interface ProyectoDescripcionProps {
    tituloProblema?: string;
    textoProblema?: string;
    tituloSolucion?: string;
    textoSolucion?: string;
    destacados?: Destacados[];
  // Define any props if needed in the future
}
export default function ProyectoDescripcion({tituloProblema, textoProblema, tituloSolucion, textoSolucion, destacados}: ProyectoDescripcionProps) {
  return (
    <div className="lg:col-span-2 space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{tituloProblema}</h2>
        <p className="text-neutral-400 leading-relaxed text-lg">
          {textoProblema}
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{tituloSolucion}</h2>
        <p className="text-neutral-400 leading-relaxed text-lg mb-6">
          {textoSolucion}
        </p>
        <ul className="space-y-4">
            {destacados?.map((destacado, index) => (
              <ElementosDestacados
                key={index}
                text={
                <>
                  <strong>{destacado.titulo}:</strong> {destacado.descripcion}
                </>
              }
              />
            ))}
        </ul>
      </section>
    </div>
  );
}