import {
  IonButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import { tabs } from "./TabData";
import { Button } from "../atoms";

const Tabs = () => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("indicators");
  const [pathname, setPathname] = useState(null);
  const tabsRef = useRef<any>(null);
  const [hideTabBar, setHideTabBar] = useState(false);

  const setInitialSelectedTab = () => {
    let { activeTab } = tabsRef?.current?.ionTabContextState;
    setSelectedTab(activeTab ?? "home");
  };

  useEffect(() => {
    return history.listen((location: any) => {
      setHideTabBar(!tabs.some((tab) => tab.path == location.pathname));
      setPathname(location.pathname);
    });
  }, [history]);

  useEffect(() => {
    setInitialSelectedTab();
  }, [tabsRef]);

  return (
    <IonTabs ref={tabsRef}>
      <IonRouterOutlet>
        {tabs.map((tab) => (
          <Route
            key={tab.tab}
            path={tab.path}
            exact={true}
            render={(props) => tab.screen(props)}
          />
        ))}

        <Route exact={true} render={(props) => <Redirect to="/home" />} />
        <Redirect from="/" to="/home" exact />
        <Redirect from="/login" to="/home" exact />
      </IonRouterOutlet>
      <IonTabBar
        mode="ios"
        className={`learning-tabs ${hideTabBar ? "hide" : ""}`}
        slot="bottom"
        translucent={true}
        onIonTabsDidChange={(e) => setSelectedTab(e.detail.tab)}
      >
        {tabs.map((tab) => (
          <IonTabButton mode="ios" key={tab.tab} tab={tab.tab} href={tab.path}>
            <Button
              klass={`${selectedTab === tab.tab && "active"} rounded-[20px] !bg-primary-item`}
              klassIcon="text-2xl text-primary"
              icon={
                selectedTab === tab.tab || tab.path === pathname
                  ? tab.icon
                  : tab.iconOutline
              }
            ></Button>
            {/* <IonLabel>{tab.label}</IonLabel> */}
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
