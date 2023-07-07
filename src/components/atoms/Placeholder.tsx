import { IonIcon } from "@ionic/react";

interface PlaceholderProps {
  klass?: string | "h-[70vh] w-full";
  state?: string;
  title?: string;
  description?: string;
  klassIcon?: string;
  img?: string;
  icon?: string;
  klassImage?: string;
}
const Placeholder: React.FC<PlaceholderProps> = ({
  klass = "h-[70vh] w-full",
  state,
  title,
  description,
  img,
  icon,
  klassIcon,
  klassImage,
}) => {
  return (
    <div
      className={`gridia-placeholder flex flex-col justify-center items-center animate__animated animate__fadeIn  ${klass}`}
    >
      {img && (
        <img
          className={`object-cover mb-8 animate__animated animate__fadeIn ${klassImage}`}
          src={img}
          alt=""
        />
      )}
      {icon && (
        <IonIcon
          className={`text-6xl mb-2 animate__animated animate__fadeIn ${klassIcon}`}
          icon={icon}
        />
      )}
      {title && (
        <p className="text-center text-gray-2 mb-4 text-base font-raleway font-bold">
          {title}
        </p>
      )}
      {description && (
        <p className="text-center text-gray-2 text-xs font-raleway">
          {description}
        </p>
      )}
    </div>
  );
};

export default Placeholder;
