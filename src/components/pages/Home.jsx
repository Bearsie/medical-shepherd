import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Dialogs } from '@ionic-native/dialogs';
import { Block, BlockTitle, Page } from 'framework7-react';
import React, { useEffect } from 'react';
import * as config from '../../config';
import Platform from '../../services/Platform';
import { Topbar } from '../Topbar';

export const Home = () => {
  useEffect(() => {
    Platform.registerBackButtonAction((event) => {
      event.preventDefault();

      Dialogs.confirm("Do you want to close the application?", config.name)
      .then((index) => {
          if (index === 1) {
            Platform.exitApp();
          }
      });

      return false;
    }, 101);
  }, []);

  return (
    <Page>
      <Topbar iconName={faBars} title={config.name} linkProps={{ panelOpen: "left" }} />
      <BlockTitle>Welcome to Medical Shepherd!</BlockTitle>
      <Block strong>
        <p>
          This app will help you to diagnose your diseases based on symptoms, store prescriptions and remind you about medical appointments.
        </p>
      </Block>
    </Page>
  );
};
