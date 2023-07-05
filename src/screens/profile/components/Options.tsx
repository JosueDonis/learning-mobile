import { IonIcon, IonRippleEffect } from "@ionic/react";
import {
    card,
  chevronForward,
  exit,
  person,
  settings,
} from "ionicons/icons";

const Options = () => {
  return (
    <div className="flex flex-col gap-2 rounded-xl w-full bg-light p-2 font-poppins mt-4">
      <div className="flex p-2 items-center justify-between w-full ion-activatable ripple-parent">
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl bg-gray-light p-4">
            <IonIcon icon={settings} />
          </div>
          <p className="text-sm">Configuración</p>
        </div>
        <IonIcon icon={chevronForward} />
        <IonRippleEffect className="rounded-xl" />
      </div>
      <div className="flex p-2 items-center justify-between w-full ion-activatable ripple-parent">
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl bg-gray-light p-4">
            <IonIcon icon={card} />
          </div>
          <p className="text-sm">Detalle de facturación</p>
        </div>
        <IonIcon icon={chevronForward} />
        <IonRippleEffect className="rounded-xl" />
      </div>
      <div className="flex p-2 items-center justify-between w-full ion-activatable ripple-parent">
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl bg-gray-light p-4">
            <IonIcon icon={person} />
          </div>
          <p className="text-sm">Gestión de usuario</p>
        </div>
        <IonIcon icon={chevronForward} />
        <IonRippleEffect className="rounded-xl" />
      </div>
      <div className="flex p-2 items-center justify-between w-full ion-activatable ripple-parent">
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl bg-gray-light p-4">
            <IonIcon icon={exit} />
          </div>
          <p className="text-sm">Cerrar cesión</p>
        </div>
        <IonIcon icon={chevronForward} />
        <IonRippleEffect className="rounded-xl" />
      </div>
    </div>
  );
};

export default Options;
