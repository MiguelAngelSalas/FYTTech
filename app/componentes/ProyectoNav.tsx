import Link from "next/link";
interface ProjectoNavProps {
  ruta: string;
  textoLink: string;
}
export default function ProjectoNav({ruta, textoLink}: ProjectoNavProps) {
  return (
    <nav className="p-6 md:px-12 max-w-6xl mx-auto flex justify-between items-center">
      <Link href={ruta} className="text-neutral-400 hover:text-white transition flex items-center gap-2 font-medium">
        ← {textoLink}
      </Link>
    </nav>
  );
}