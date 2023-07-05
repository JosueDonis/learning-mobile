import { useHistory } from "react-router-dom";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close, notificationsOutline } from "ionicons/icons";
import { MouseEventHandler, useState } from "react";
import { HideElements } from "@/stores/app";
// import { getAvatar } from "helpers/index.js";
// import { ImageProfileStore } from "stores/imageProfile";
// import { User } from "@/types";

interface HeaderProps {
  klass?: string;
  user?: any;
  closeButton?: boolean;
  backButton?: boolean;
  defaultHref?: string;
  title?: string;
  description?: string;
  children?: any;
  onClick?: MouseEventHandler;
  onModalProfile?: Function;
}
const Header: React.FC<HeaderProps> = ({
  klass,
  user,
  closeButton = false,
  backButton = false,
  defaultHref = "/",
  title,
  description,
  children,
  onClick,
  onModalProfile,
}) => {
  const { hideAvatar } = HideElements.useState((s) => s);
  const history = useHistory();
  return (
    <IonHeader
      mode="ios"
      className="px-4 learning-header ion-no-border"
      translucent
    >
      <IonToolbar mode="md" className={`${klass}`}>
        <div className="flex flex-col">
          <IonTitle className="p-0 mb-1 text-base text-dark font-bold font-poppins">
            {title}
          </IonTitle>
          <p className="animate__animated animate__fadeIn p-0 text-xs text-[#8D8D8D] font-poppins">
            {description}
          </p>
        </div>
        <IonButtons slot={backButton ? "start" : "end"}>
          {backButton && <IonBackButton defaultHref={defaultHref} />}

          {!closeButton && !backButton && (
            <>
              {user?.type === "CUSTOMER" && (
                <IonButton
                  className="animate__animated animate__fadeIn"
                  color="cancel"
                  fill="clear"
                  shape="round"
                  onClick={() => history.push("/notifications")}
                >
                  <IonIcon
                    slot="icon-only"
                    color="dark"
                    icon={notificationsOutline}
                  />
                </IonButton>
              )}
              {!hideAvatar && (
                <div
                  className={`animate__animated animate__zoomIn h-12 w-12 rounded-full flex items-center justify-center ring-white `}
                  onClick={() => history.push("/profile")}
                >
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="../assets/img/profile.png"
                    alt=""
                    onError={(e) => {
                      // e.currentTarget.src = `https://api.dicebear.com/5.x/initials/svg?seed=${user?.name}&backgroundColor=1633CC&fontSize=32&fontFamily=Tahoma`;
                    }}
                  />
                </div>
              )}
            </>
          )}
          {closeButton && !backButton && (
            <IonButton
              className="animate__animated animate__fadeIn bg-light rounded-full"
              color="cancel"
              shape="round"
              onClick={onClick}
            >
              <IonIcon slot="icon-only" color="dark" icon={close} />
            </IonButton>
          )}
        </IonButtons>
      </IonToolbar>
      {children}
    </IonHeader>
  );
};

export default Header;
