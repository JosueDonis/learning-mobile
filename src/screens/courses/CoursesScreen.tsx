import { Header, HeaderCondense, SearchInput } from "@/components/atoms";
import { Content } from "@/components/templates";
import { IonContent, IonPage } from "@ionic/react";
import { CardCourse, Segments } from "./components";
import { SegmentType } from "@/types/elements";
import { useState } from "react";

const CoursesScreen: React.FC<any> = () => {
  const segments: SegmentType[] = [
    {
      label: "En curso",
      value: "ON_GOING",
    },
    {
      label: "Completado",
      value: "COMPLETED",
    },
  ];
  const [segmentSelected, setSegmentSelected] = useState<string | undefined>(
    "ON_GOING"
  );

  return (
    <IonPage>
      <Header title="Cursos" />
      <Content>
        <HeaderCondense title="Mis cursos" />
        <section>
          <SearchInput onInput={() => null} />
          <div className="mt-4">
            <Segments
              value={segmentSelected}
              segments={segments}
              onChange={(e?: string) => {
                setSegmentSelected(e);
              }}
            />
          </div>
          <div className="mt-4">
          <CardCourse />
          </div>
        </section>
      </Content>
    </IonPage>
  );
};

export default CoursesScreen;
