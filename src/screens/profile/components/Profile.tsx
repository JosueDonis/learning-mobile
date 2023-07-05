import { Button } from "@/components/atoms";
import { AuthStore } from "@/stores/auth";
import { IonIcon } from "@ionic/react";
import { cameraOutline } from "ionicons/icons";

interface AvatarProps {
  klass?: string;
}
const Avatar: React.FC<AvatarProps> = ({klass}) => {
  const { user } = AuthStore.useState((s) => s);
  return (
    <div className={`flex justify-center items-center flex-col gap-4 ${klass} h-fit`}>
      <div className="flex flex-col relative">
        <img
          src="../assets/img/profile.png"
          className="w-40 rounded-full ring-4 ring-offset-2 ring-secondary"
        />
        <Button
          icon={cameraOutline}
          klass="!bg-secondary rounded-full !absolute top-28 right-0 origin-top-right"
        />
      </div>
      <div className="flex font-poppins flex-col items-center justify-center">
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-sm">{user?.email}</p>
        <p className="text-xs text-center mt-2">
          Soy un apasionado de la tecnología, me considero una persona
          responsable, dinámica y creativa, con facilidad de adaptación y
          capacidad de trabajar en equipo.
        </p>
      </div>
    </div>
  );
};

export default Avatar;
