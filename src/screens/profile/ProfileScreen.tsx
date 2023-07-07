import { IonPage } from "@ionic/react";
import { Profile, Options } from "./components";
import { HeaderCondense } from "@/components/atoms";
import { Content } from "@/components/templates";

const ProfileScreen: React.FC<any> = () => {
  return (
    <IonPage>
      <Content>
        <HeaderCondense title="Mi perfil" showAvatar={false} />
        <Profile klass="my-8" />
        <Options />
        <div className="flex h-24"></div>
      </Content>
    </IonPage>
  );
};

export default ProfileScreen;
