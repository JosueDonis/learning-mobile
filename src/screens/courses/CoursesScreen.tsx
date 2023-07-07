import { Header, HeaderCondense, SearchInput } from "@/components/atoms";
import { Content } from "@/components/templates";
import { IonContent, IonPage } from "@ionic/react";
import { CardCourse, Segments, TabCompleted, TabOnGoing } from "./components";
import { SegmentType } from "@/types/elements";
import { useState } from "react";
import { courses } from "@/mocks";

const CoursesScreen: React.FC<any> = () => {
  const [search, setSearch] = useState("");
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
      <Header title="Mis cursos" />
      <Content>
        <HeaderCondense title="Mis cursos" />
        <section>
          <SearchInput value={search} onInput={(value) => setSearch(value)} />
          <div className="mt-4">
            <Segments
              value={segmentSelected}
              segments={segments}
              onChange={(e?: string) => {
                setSegmentSelected(e);
              }}
            />
          </div>
          <div className="mt-4 grid md:grid-cols-2 md:justify-normal justify-between grid-cols-1 gap-2">
            {segmentSelected === "ON_GOING" ? (
              <TabOnGoing search={search} />
            ) : (
              <TabCompleted search={search} />
            )}
          </div>
          <div className="flex h-24"></div>
        </section>
      </Content>
    </IonPage>
  );
};

export default CoursesScreen;
