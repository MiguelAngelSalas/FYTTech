"use client"

export default function ContactoWhatsApp() {
  const enviarAWhatsApp = (formData: FormData) => {
    const nombre = formData.get("nombre");
    const whatsapp = formData.get("whatsapp");
    const problema = formData.get("problema");
    const miWhatsApp = "5491123909529"; 

    const mensaje = `¡Hola Miguel! Vi tu portfolio web y me interesa que armemos un sistema a medida.\n\n*Datos de mi local:*\n- Comercio: ${nombre}\n- Contacto: ${whatsapp}\n\n*Lo que me urge automatizar es:*\n${problema}\n\n¿Qué día de esta semana podés pasarte por el local así tomamos un café, te muestro cómo estamos trabajando hoy y coordinamos el desarrollo?`;
    const url = `https://wa.me/${miWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-32 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="border border-neutral-800 bg-neutral-950 p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-2">Construyamos tu solución</h2>
          <p className="text-neutral-400 mb-10">Completá el formulario para enviarme un WhatsApp directo. Te respondo hoy mismo.</p>

          <form action={enviarAWhatsApp} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-semibold text-neutral-400">Nombre / Negocio</label>
                <input id="nombre" name="nombre" type="text" required className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-semibold text-neutral-400">Tu WhatsApp</label>
                <input id="whatsapp" name="whatsapp" type="text" required className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="problema" className="text-sm font-semibold text-neutral-400">¿Qué proceso manual querés automatizar?</label>
              <textarea id="problema" name="problema" rows={3} required className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 hover:bg-indigo-500 transition-colors">
              Enviar por WhatsApp ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}