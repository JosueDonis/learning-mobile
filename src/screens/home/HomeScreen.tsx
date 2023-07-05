import {
  Header,
  HeaderCondense,
  Indicators,
  Progress,
} from "@/components/atoms";
import Chart from "@/components/atoms/Chart";
import { Content } from "@/components/templates";
import { dayChartOptions } from "@/mocks/charts";
import { setHideAvatar } from "@/stores/app";
import { AuthStore } from "@/stores/auth";
import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { Calendar, ProgressIndicators } from "./components";

const HomeScreen: React.FC<any> = () => {
  const { user } = AuthStore.useState((s) => s);
  const [chartLoading, setChartLoading] = useState(false);
  useEffect(() => {
    setChartLoading(true);
    setTimeout(() => {
      setChartLoading(false);
    }, 500);
  }, []);

  return (
    <IonPage>
      <Header title="Inicio" />
      <Content>
        <HeaderCondense title={`Hola, ${user?.name}`} />
        <section className="h-full mb-12">
          <div className="flex flex-col mt-2 mb-4">
            <h2 className="font-poppins font-bold mb-4 text-lg">Tu progreso</h2>
            <div className="flex flex-row justify-evenly items-center">
              <ProgressIndicators />
            </div>
          </div>
          <Indicators />
          <Calendar />
          <div className="mt-6">
            <p className="font-poppins text-xs mb-2">
              Aquí se muestra el total de horas invertidas en los cursos de cada
              día para que puedas realizar un seguimiento de tu progreso de
              aprendizaje. 👇
            </p>
            <Chart loading={chartLoading} options={dayChartOptions} />
          </div>
        </section>
      </Content>
    </IonPage>
  );
};

export default HomeScreen;
