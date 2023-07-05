import { ButtonProps } from "@/types/input";
import { IonButton, IonIcon, IonRippleEffect } from "@ionic/react";
import { MouseEventHandler } from "react";
import { Orbit } from "@uiball/loaders";
import { DotPulse } from "@uiball/loaders";

export const Button: React.FC<ButtonProps> = ({
  disabled,
  loading,
  label,
  icon,
  form,
  slotIcon,
  onClick,
  klass = "rounded-md ",
  type,
  klassIcon,
}) => {
  return (
    <button
      disabled={loading || disabled}
      form={form}
      type={type}
      onClick={onClick}
      className={`ion-activatable font-poppins flex justify-center items-center self-center gap-2 ripple-parent rectangle min-h-12 h-12 p-4 box-border text-white bg-primary  ${klass}`}
    >
      {icon && !loading && (
        <IonIcon icon={icon} className={`text-xl  ${klassIcon}`} />
      )}
      {loading && (
        <span >
          <DotPulse size={25} speed={1.3} color="white" />
        </span>
      )}
      {!loading && label && <span>{label}</span>}
      <IonRippleEffect />
    </button>
  );
};
