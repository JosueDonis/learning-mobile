import { CalendarType } from "@/types/elements";

export const meetings: CalendarType[] = [
  {
    id: crypto.randomUUID(),
    klass: "bg-[#FEE2E7] text-[#9b6670]",
    title: "Llamada con frontend developers",
    description: "Buenas practicas",
    date: new Date(),
    endDate: new Date(new Date().setHours(20)),
    users: [
      "https://xsgames.co/randomusers/assets/avatars/male/51.jpg",
      "https://xsgames.co/randomusers/assets/avatars/male/50.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    klass: "bg-[#aeb8fe] text-[#27187e]",
    title: "Matemática Algebra",
    description: "Regla para dividir dos polinomios",
    date: new Date(new Date(new Date().setDate(1)).setHours(8)),
    endDate: new Date(new Date(new Date().setDate(1)).setHours(10)),
    users: [
      "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
      "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
      "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
      "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
      "https://xsgames.co/randomusers/assets/avatars/female/51.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    klass: "bg-[#aeb8fe] text-[#27187e]",
    title: "Curso de Photosop",
    description: "Uso de capas",
    date: new Date(new Date(new Date().setDate(2)).setHours(10)),
    endDate: new Date(new Date(new Date().setDate(2)).setHours(11)),
    users: [
      "https://xsgames.co/randomusers/assets/avatars/male/43.jpg",
      "https://xsgames.co/randomusers/assets/avatars/male/12.jpg",
      "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
      "https://xsgames.co/randomusers/assets/avatars/female/45.jpg",
    ],
  },
];
