import { EventWork } from "@/src/types/event";

export const events: EventWork[] = [
  {
    id: 1,
    slug: "Evento 1",
    title: "Evento 1",
    description: "descrição do evento 1.",
    medias: [
      { id: 1, type: "photo", title: "Descrição 01", image: "/images/casamento-1.jpg" },
      { id: 2, type: "video", title: "Descrição 02", image: "/images/casamento-2.jpg", duration: "02:15" },
      { id: 3, type: "photo", title: "Descrição 03", image: "/images/casamento-3.jpg" },
      { id: 4, type: "photo", title: "Descrição 04", image: "/images/casamento-4.jpg" },
      { id: 5, type: "video", title: "Descrição 05", image: "/images/casamento-5.jpg", duration: "01:30" },
      { id: 6, type: "photo", title: "Descrição 06", image: "/images/casamento-6.jpg" },
      { id: 7, type: "photo", title: "Descrição 07", image: "/images/casamento-7.jpg" },
      { id: 8, type: "video", title: "Descrição 08", image: "/images/casamento-8.jpg", duration: "03:20" },
    ],
  },
  {
    id: 2,
    slug: "Evento 2",
    title: "Evento 2",
    description: "descrição do evento 2.",
    medias: [
      { id: 1, type: "photo", title: "Descrição 01", image: "/images/aniversario-1.jpg" },
      { id: 2, type: "video", title: "Descrição 02", image: "/images/aniversario-2.jpg", duration: "01:10" },
      { id: 3, type: "photo", title: "Descrição 03", image: "/images/aniversario-3.jpg" },
      { id: 4, type: "photo", title: "Descrição 04", image: "/images/aniversario-4.jpg" },
      { id: 5, type: "video", title: "Descrição 05", image: "/images/aniversario-5.jpg", duration: "02:00" },
      { id: 6, type: "photo", title: "Descrição 06", image: "/images/aniversario-6.jpg" },
    ],
  },
  {
    id: 3,
    slug: "Evento 3",
    title: "Evento 3",
    description: "descrição do evento 3.",
    medias: [
      { id: 1, type: "photo", title: "Descrição 01", image: "/images/aniversario-1.jpg" },
      { id: 2, type: "video", title: "Descrição 02", image: "/images/aniversario-2.jpg", duration: "01:10" },
      { id: 3, type: "photo", title: "Descrição 03", image: "/images/aniversario-3.jpg" },
      { id: 4, type: "photo", title: "Descrição 04", image: "/images/aniversario-4.jpg" },
      { id: 5, type: "video", title: "Descrição 05", image: "/images/aniversario-5.jpg", duration: "02:00" },
      { id: 6, type: "photo", title: "Descrição 06", image: "/images/aniversario-6.jpg" },
    ],
  },
];