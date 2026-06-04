import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { MediaSection } from "./components/MediaSection/MediaSection";
import { Works } from "./components/Works/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works/>  
        <MediaSection />
      </main>
      <Footer />
    </>
  );
}