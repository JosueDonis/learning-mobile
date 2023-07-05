import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { LoginScreen } from "../../screens";
import Tabs from "./Tabs";
import { AuthStore } from "@/stores/auth";

const LearningApp: React.FC = () => {
  const token = AuthStore.useState((s) => s.token);

  return (
    <>
      {token ? (
        <IonReactRouter>
          <Tabs />
        </IonReactRouter>
      ) : (
        <IonReactRouter>
          <Redirect from="/" to="/login" exact />
          <Route exact path="/login" render={(props) => <LoginScreen />} />
        </IonReactRouter>
      )}
    </>
  );
};

export default LearningApp;
