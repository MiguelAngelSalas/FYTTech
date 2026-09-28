interface SintomasProps {
  sintomas: string[];
}

export default function Sintomas({ sintomas }: SintomasProps) {
  return (
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
            {sintomas.map((sintoma, i) => (
              <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 flex gap-4 hover:border-indigo-500/50 transition-colors">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <p className="text-neutral-300">{sintoma}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}