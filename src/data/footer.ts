import { Footer } from "@/src/types/footer";

export const footer: Footer = {
  eyebrow: "Sobre mim",

  title: "Apaixonado por contar histórias",

  description:
    "Fotógrafo e filmmaker especializado em eventos. Acredito que cada momento é único e merece ser registrado com sensibilidade, criatividade e verdade.",

  image: "/images/sobre-mim.jpg",

  contactTitle: "Vamos conversar sobre o seu próximo evento?",

  contactDescription:
    "Entre em contato e vamos criar algo inesquecível juntos.",

  contacts: [
    {
      id: 1,
      type: "whatsapp",
      label: "(21) 99999-9999",
      href: "https://wa.me/5521999999999",
    },
    {
      id: 2,
      type: "instagram",
      label: "@opaulofranca_",
      href: "https://www.instagram.com/opaulofranca_/",
    },
    {
      id: 3,
      type: "email",
      label: "contato@paulofranca.com.br",
      href: "mailto:contato@paulofranca.com.br",
    },
  ],
};