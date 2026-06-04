import Image from "next/image";
import heroImage from "../../../assets/hero.png";
import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";
import { Button } from "@/src/components/Button/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full overflow-hidden bg-background"
    >
      <Image
        src={heroImage}
        alt="Filmmaker registrando um evento"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

      <Box className="relative z-10 flex min-h-screen items-center px-5 pt-24 md:px-10 lg:px-16">
        <div className="w-full max-w-[720px]">
          <Text preset="badge" bold className="mb-6">
            Fotografia & Filmagem de Eventos
          </Text>

          <Text as="h1" preset="hero" bold>
            Registrando
          </Text>

          <Text as="span" preset="hero" className="block">
            momentos reais<span className="text-primary">.</span>
          </Text>

          <div className="mt-8 h-[3px] w-20 bg-primary" />

          <Text preset="body" className="mt-8 max-w-[520px]">
            Transformo momentos em imagens e histórias <br/>
            que permanecem para sempre.
          </Text>

            <Button
              title="Ver Trabalhos"
              href="#trabalhos"
              className="mt-5"
            />

            
        </div>
      </Box>
    </section>
  );
}