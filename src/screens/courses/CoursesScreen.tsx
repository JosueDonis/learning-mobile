import { Header, HeaderCondense, SearchInput } from "@/components/atoms";
import { Content } from "@/components/templates";
import { IonContent, IonPage } from "@ionic/react";
import { Segments } from "./components";

const CoursesScreen: React.FC<any> = () => {
  return (
    <IonPage>
      <Header title="Cursos" />
      <Content>
        <HeaderCondense title="Mi curso" />
        <section>
          <SearchInput onInput={() => null} />
          <Segments/>
        </section>
      </Content>
    </IonPage>
  );
};

export default CoursesScreen;
