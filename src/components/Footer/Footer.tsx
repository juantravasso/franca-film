import Image from "next/image";
import { Mail } from "lucide-react";

import { footer } from "@/src/data/footer";

import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";
import { Button } from "@/src/components/Button/Button";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <section id="sobre" className="border-t border-dividing-lines bg-background">
      <Box className="grid px-0 lg:grid-cols-[1fr_0.75fr]">
        <div className="grid gap-8 px-5 py-16 md:grid-cols-[220px_1fr] md:px-10 md:py-20 lg:grid-cols-[240px_1fr] lg:px-16">
          <div className="relative h-[220px] shrink-0 overflow-hidden bg-surface md:h-[280px] md:w-[220px] lg:h-[300px] lg:w-[240px]">
            <Image
              src={footer.image}
              alt="Fotógrafo"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center">
            <Text preset="badge" bold>
              {footer.eyebrow}
            </Text>

            <Text as="h2" preset="heading" bold className="mt-4 uppercase">
              {footer.title}
            </Text>

            <Text preset="body" className="mt-5 max-w-xl">
              {footer.description}
            </Text>
          </div>
        </div>

        <div
          id="contato"
          className="border-t border-dividing-lines px-5 py-16 md:px-10 md:py-20 lg:border-l lg:border-t-0 lg:px-16"
        >
          <div className="flex h-full flex-col justify-center">
            <Text as="h3" preset="heading" bold className="uppercase">
              {footer.contactTitle}
            </Text>

            <Text preset="body" className="mt-5 max-w-md">
              {footer.contactDescription}
            </Text>

            <div className="mt-8">
              <Button title="Entrar em contato" href="#contato" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-primary transition hover:scale-110"
              >
                <FaWhatsapp size={24} />
              </a>

              <a
                href="https://www.instagram.com/opaulofranca_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary transition hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="mailto:contato@paulofranca.com.br"
                className="flex items-center gap-3 text-text-primary transition hover:text-primary"
              >
                <Mail size={24} className="text-primary" />

                <Text as="span" preset="small" className="text-current">
                  contato@paulofranca.com.br
                </Text>
              </a>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
}