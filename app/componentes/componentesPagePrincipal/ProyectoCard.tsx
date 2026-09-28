import Link from "next/link";
interface ProyectoCardProps {
  titulo: string;
  descripcion: string;
  tags: string[];
  linkHref: string;
}

export default function ProyectoCard({ titulo, descripcion, tags, linkHref }: ProyectoCardProps) {
  return (
    <div className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-indigo-500/50 transition-colors flex flex-col h-full">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-semibold rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{titulo}</h3>
      <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">{descripcion}</p>
      <div className="border-t border-neutral-800 pt-6 flex items-center justify-between">
        <Link href={linkHref} className="text-indigo-400 font-semibold text-sm group-hover:text-indigo-300 transition-colors flex items-center gap-2">
          Ver detalles de arquitectura <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}