interface ProyectoHeaderProps {
    categoria: string;
    titulo: string;
    descripcion: string;
}

export default function ProyectoHeader({categoria, titulo, descripcion}: ProyectoHeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex gap-2 mb-4">
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 font-bold tracking-widest uppercase rounded">
          {categoria}
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
        {titulo}
      </h1>
      <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
        {descripcion}
      </p>
    </header>
  );
}