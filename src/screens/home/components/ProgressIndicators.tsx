import { Progress } from "@/components/atoms";
import { ProgressType } from "@/types/elements";
import { ReactElement } from "react";
const items: ProgressType[] = [
  {
    color: "primary",
    value: 19,
    total: 40,
    title: "Horas de trabajo",
    description: "Excedido por 3 horas",
  },
  {
    klass: "bg-secondary",
    color: "secondary",
    value: 82,
    type: "progress",
    title: "Eficiencia",
    description: "Excelente resultado",
  },
];
const ProgressIndicators = () => {
  return (
    <>
      {items.map(({ klass, color, value, type, total, title, description }) => (
        <Progress
          key={color}
          klass={klass}
          color={color}
          value={value}
          total={total}
          type={type}
          title={title}
          description={description}
        />
      ))}
    </>
  );
};

export default ProgressIndicators;
