import { HideElements, setHideAvatar } from "@/stores/app";
import { IonContent } from "@ionic/react";
import { useEffect } from "react";

interface ContentProps {
  children?: any;
  fullScreen?: boolean;
}
const Content: React.FC<ContentProps> = ({ children, fullScreen = true }) => {
  useEffect(() => {
    setHideAvatar(true);
  }, []);
  return (
    <IonContent
      fullscreen={fullScreen}
      className="learning-content"
      scrollEvents
      onIonScroll={(e) => {
        const { scrollTop } = e.detail;
        if (scrollTop === 0) {
          setHideAvatar(true);
        } else if (scrollTop > 62) {
          setHideAvatar(false);
        }
      }}
    >
      <main className="w-full h-full grid self-center md:justify-center">
        <section className="flex flex-col h-full  md:w-[650px] w-full">
          {children}
        </section>
      </main>
    </IonContent>
  );
};

export default Content;
