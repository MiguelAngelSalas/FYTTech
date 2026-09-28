export default function Hero() {
  return (
    // Agregamos pt-32 y pb-16 aquí para crear una zona segura
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-12 lg:px-24 relative">
      
      {/* Badge Superior (Queda igual) */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-24 flex items-center gap-2 font-bold text-xl tracking-tight border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 rounded-full backdrop-blur-sm w-fit z-20">
        <span className="text-white">FYT</span>
        <span className="text-indigo-400">Tech</span>
      </div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-8 font-semibold">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Desarrollo de Software a Medida
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.05]">
          Dejá de apagar incendios. <br />
          <span className="text-neutral-500">Empezá a sistematizar.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
          Construyo plataformas web que automatizan la gestión de tu comercio. Si tu negocio creció pero tu forma de organizarlo se quedó en el Excel y WhatsApp, necesitamos hablar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contacto" className="bg-white text-neutral-950 px-8 py-4 font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
            Agendar consultoría
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
          <a href="#proyectos" className="px-8 py-4 font-semibold text-neutral-300 hover:text-white transition-colors flex items-center justify-center">
            Ver sistemas en producción
          </a>
        </div>
      </div>
    </section>
  );
}