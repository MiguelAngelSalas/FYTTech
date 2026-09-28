import ElementoTecnologico from "@/app/componentes/ElementoTecnologico";

// 1. Definimos cómo es cada ítem del stack
interface ElementoTecnologico {
  label: string;
  value: string;
}

// 2. Definimos las props del componente completo
interface CaracteristicasTecnologicasProps {
  stack: ElementoTecnologico[];
  linkSitio?: string; // Lo hacemos opcional por si algún proyecto no tiene web en vivo
  textoLink?: string; // Opcional, por defecto dirá "Visitar sitio en vivo"
}

export default function CaracteristicasTecnologicas({ 
  stack, 
  linkSitio, 
  textoLink = "Visitar sitio en vivo" 
}: CaracteristicasTecnologicasProps) {
  return (
    <div>
      <div className="bg-neutral-900 border border-neutral-800 p-8 sticky top-8">
        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Stack Tecnológico</h3>
        
        <div className="flex flex-col gap-4">
          {/* Mapeamos el array de tecnologías */}
          {stack.map((item, index) => (
            <ElementoTecnologico 
              key={index}
              label={item.label} 
              value={item.value} 
              // Le quitamos el borde solo al último elemento de la lista
              border={index !== stack.length - 1} 
            />
          ))}
        </div>

        {/* Renderizado condicional: Solo mostramos el botón si nos pasaron un link */}
        {linkSitio && (
          <div className="mt-8 pt-8 border-t border-neutral-800">
            <a 
              href={linkSitio} 
              target="_blank" 
              rel="noreferrer"
              className="w-full block text-center bg-white text-neutral-950 font-bold py-4 hover:bg-neutral-200 transition-colors"
            >
              {textoLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}