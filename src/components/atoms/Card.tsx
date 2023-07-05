import { IonIcon } from "@ionic/react";

interface CardProps {
  icon?: string;
  title?: string;
  description?: string | number;
  klass?: string;
  klassIcon?: string;
  klassTitle?: string;
  klassDescription?: string;
  klassContentText?: string;
}
const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  klass,
  klassIcon,
  klassTitle,
  klassDescription,
  klassContentText,
}) => {
  return (
    <div
      className={`bg-primary gap-3 items-center justify-between flex flex-col p-4 font-poppins text-white rounded-xl ${klass}`}
    >
      <div
        className={`flex text-white bg-primary-tint rounded-full p-4 ${klassIcon}`}
      >
        <IonIcon icon={icon} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className={`text-xs ${klassTitle}`}>{title}</p>
        <h2 className={`text-base font-bold ${klassDescription}`}>
          {description}
        </h2>
      </div>
    </div>
  );
};

export default Card;
