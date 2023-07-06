import { HideElements } from "@/stores/app";
import { IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";

interface HeaderProps {
  title?: string;
  showAvatar?: boolean;
}
const HeaderCondense: React.FC<HeaderProps> = ({ title, showAvatar = true }) => {
  const history = useHistory();
  const { hideAvatar } = HideElements.useState((s) => s);
  return (
    <IonHeader mode="ios" collapse="condense" className="learning-header-condense">
      <IonToolbar className="mb-2">
        <h3 className="p-0 text-2xl break-words font-bold font-poppins">{title}</h3>
        <IonButtons slot="end">
          {showAvatar && hideAvatar && (
            <div
              className={`animate__animated animate__fadeIn h-12 w-12 rounded-full flex items-center justify-center ring-white `}
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
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderCondense;
