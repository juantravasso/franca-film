import { events } from "@/src/data/events";
import { Header } from "@/src/components/Header/Header";
import { EventSection } from "./components/EventSection/EventSection";
import { Footer } from "@/src/components/Footer/Footer";
import { PortfolioHeader } from "@/src/components/PortifolioHeader/PortifolioHeader";

export default function WorkPage() {
  return (
    <>
      <Header />

      <main className="bg-background pt-28">
        <PortfolioHeader
          badge="Portfólio"
          title="Trabalhos"
          description="Confira uma seleção de fotos e vídeos."
        />

        {events.map((event) => (
          <EventSection
            key={event.id}
            event={event}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}