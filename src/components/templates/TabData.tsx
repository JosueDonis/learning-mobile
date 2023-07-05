import { CoursesScreen, HomeScreen, ProfileScreen } from "@/screens";
import { school, schoolOutline } from "ionicons/icons";

export const tabs = [
  {
    label: "Inicio",
    path: "/home",
    tab: "home",
    icon: "../assets/icons/house_fill.svg",
    iconOutline: "../assets/icons/house.svg",
    screen: (props: any) => <HomeScreen {...props} />,
  },
  {
    label: "Cursos",
    path: "/courses",
    tab: "courses",
    icon: school,
    iconOutline: schoolOutline,
    screen: (props: any) => <CoursesScreen {...props} />,
  },
  {
    label: "Perfil",
    path: "/profile",
    tab: "profile",
    icon: "../assets/icons/person_fill.svg",
    iconOutline: "../assets/icons/person.svg",
    screen: (props: any) => <ProfileScreen {...props} />,
  },
];
