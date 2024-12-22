import { ChefHat, Globe, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [ // TODO: Legg til flere kategorier
  {
    id: 0,
    name: "hunder",
    title: "Hunder",
    image: <Globe />,
  },
  {
    id: 1,
    name: "katter",
    title: "Katter",
    image: <ChefHat />,
  }
];
