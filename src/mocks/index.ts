import { CourseType } from "@/types/course";
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


export const courses: CourseType[] = [{
  id: crypto.randomUUID(),
  title: "Fundamentos de Algebra",
  teacher: "Raul Chux",
  tags: ["Matemáticas", "Algebra", "Principiante"],
  progress: "70%",
  lessons: 20,
  totalLessons: 24,
  dueDate: new Date(),
  picture: "../assets/img/math.jpg"
}, {
  id: crypto.randomUUID(),
  title: "Fundamentos de Javascript",
  teacher: "Raul Chux",
  tags: ["Programación", "Javascript", "Web"],
  progress: "12%",
  lessons: 4,
  totalLessons: 50,
  dueDate: new Date(),
  picture: "../assets/img/javascript.jpg"
},
{
  id: crypto.randomUUID(),
  title: "Photoshop Básico",
  teacher: "Paola Mazariegos",
  tags: ["Diseño", "Arte", "Imagen"],
  progress: "30%",
  lessons: 12,
  totalLessons: 40,
  dueDate: new Date(),
  picture: "../assets/img/photosop.jpg"
},
{
  id: crypto.randomUUID(),
  title: "Fundamentos de UX",
  teacher: "Pamela Donis",
  tags: ["Diseño", "Arte", "Imagen"],
  progress: "90%",
  lessons: 40,
  totalLessons: 60,
  dueDate: new Date(),
  picture: "../assets/img/ux.jpg"
}]


export const coursesCompleted: CourseType[] = [{
  id: crypto.randomUUID(),
  title: "Fundamentos de Aritmética",
  teacher: "Hugo Donis",
  tags: ["Matemáticas", "Algebra", "Principiante"],
  progress: "100%",
  lessons: 30,
  totalLessons: 30,
  dueDate: new Date(),
  picture: "../assets/img/arithmetic.jpg"
},
{
  id: crypto.randomUUID(),
  title: "Fundamentos Básico de Office",
  teacher: "Paola Mazariegos",
  tags: ["Ofimática", "Personal", "Word", "Excel", "PowerPoint"],
  progress: "100%",
  lessons: 40,
  totalLessons: 40,
  dueDate: new Date(),
  picture: "../assets/img/office.jpg"
}]