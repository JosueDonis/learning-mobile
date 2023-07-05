import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Theme variables */
import "./theme/app.scss";
import { LearningApp } from "@/components/templates";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <LearningApp />
  </IonApp>
);

export default App;
