import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { App as AppRoot, Statusbar, View } from "framework7-react";
import React, { useEffect } from "react";
import * as config from "../config";
import routes from "../routes";
import Platform from "../services/Platform";
import { SideNav } from "./modals/SideNav";

const f7params = {
  id: config.appId,
  name: config.name,
  version: config.version,
  theme: 'auto',
  touch: {
    disableContextMenu: false,
  }
};

export const App = () => {
  useEffect(() => {
    Platform.ready(() => {
      // hide splash screen
      SplashScreen.hide();

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

      // set status bar content to light
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }

      // set to portrait
      ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }, []);

  return (
    <AppRoot params={f7params} routes={routes} >
      <Statusbar />
      <SideNav />
      <View id="main-view" url="/" main/>
    </AppRoot>
  );
};
