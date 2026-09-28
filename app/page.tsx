import { Space_Grotesk } from "next/font/google";
import Hero from "@/app/componentes/componentesPagePrincipal/Hero";
import Sintomas from "@/app/componentes/componentesPagePrincipal/Sintomas";
import Proyectos from "@/app/componentes/componentesPagePrincipal/Proyectos";
import ContactoWhatsApp from "@/app/componentes/componentesPagePrincipal/ContactoWhatsApp";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <div className={`${space.className} bg-neutral-950 min-h-screen text-neutral-200 scroll-smooth selection:bg-indigo-500/30`}>
      <Hero />
      
      <Sintomas 
        sintomas={[
          "Tus clientes tienen que esperar a que te desocupes para que les confirmes un turno.",
          "Recibís archivos o pedidos por WhatsApp y se te pierden entre los mensajes.",
          "El control de tu caja o de tu stock depende de que te acuerdes de anotarlo.",
          "Sentís que sos el único que sabe cómo hacer funcionar el negocio."
        ]}
      />
      
      <Proyectos />
      
      <ContactoWhatsApp />
    </div>
  );
}