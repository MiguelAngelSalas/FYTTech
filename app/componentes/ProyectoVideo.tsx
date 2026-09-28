interface ProjectVideoProps {
  src: string;
}

export default function ProyectoVideo({ src }: ProjectVideoProps) {
  return (
    <section className="mb-16">
      <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 p-2 rounded-xl shadow-2xl relative">
        <video 
          src={src} 
          controls autoPlay muted loop
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}