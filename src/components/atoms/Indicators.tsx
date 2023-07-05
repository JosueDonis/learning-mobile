import { Card } from "@/components/atoms";
import { CardType } from "@/types/elements";
import { IonIcon } from "@ionic/react";
import { checkmarkDoneOutline, fileTrayStackedOutline, schoolOutline } from "ionicons/icons";

const Indicators = () => {
  const indicators: CardType[] = [
    {
      id: 1,
      icon: schoolOutline,
      title: "Cursos",
      description: 6,
    },
    {
      id: 2,
      icon: fileTrayStackedOutline,
      title: "Pendientes",
      description: 3,
      klass: "!bg-secondary",
      klassIcon: "!bg-secondary-tint"
    },
    {
      id: 3,
      icon: checkmarkDoneOutline,
      title: "Completados",
      description: 3,
      klass: "!bg-tertiary",
      klassIcon: "!bg-tertiary-tint"
    },
  ];
  return (
    <div className="p-4 w-full mt-6 grid grid-cols-[repeat(3,minmax(80px,1fr))] gap-2">
      {indicators?.map(({ id, icon, title, description, klass, klassIcon }) => (
        <Card key={id} icon={icon} title={title} description={description} klass={klass} klassIcon={klassIcon} />
      ))}
    </div>
  );
};

export default Indicators;
