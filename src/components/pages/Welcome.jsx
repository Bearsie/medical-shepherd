import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { Block, Button, Col, Navbar, NavTitle, Page, PageContent, Row } from 'framework7-react';
import React, { useEffect, useState } from 'react';
import welcomeImage from '../../assets/img/welcoming-shepherd.jpg';
import * as config from '../../config';
import { routePath } from '../../routes';
import Platform from '../../services/Platform';
import { colorSecondary } from '../../styles';

const styles = mergeStyleSets({
  navbar: {
    '--f7-navbar-bg-color': 'transparent',
  },
  page: {
    backgroundImage: `url(${welcomeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  title: {
    '--f7-navbar-title-font-size': '30px',
    width: '-webkit-fill-available',
    color: colorSecondary,
    paddingTop: '30px',
  },
  wrapperBlock: [
    'display-flex',
    'justify-content-flex-end',
    { flexDirection: 'column', fontSize: '15px' },
  ],
});

export const Welcome = () => {
  const [isBackroundImageLoaded, setIsBackgroundImageLoaded] = useState(false);

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

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.onload = () => { setIsBackgroundImageLoaded(true) };
    backgroundImage.src = welcomeImage;
  }, []);

  return isBackroundImageLoaded && (
    <Page className={styles.page}>
      <Navbar noShadow noHairline className={styles.navbar}>
        <NavTitle className={styles.title}>{config.name}</NavTitle>
      </Navbar>
      <PageContent className="display-flex">
      <Block className={styles.wrapperBlock}>
        <Block className="no-margin-bottom text-align-center">
          Diagnose your disease symptoms, store your prescriptions and information about medical appointments
        </Block>
        <Block>
          <Row tag="p">
            <Col tag="span">
              <Button large outline href={routePath.Register}>Register</Button>
            </Col>
            <Col tag="span">
              <Button large fill color="#ffffff" href={routePath.Login}>Log in</Button>
            </Col>
          </Row>
        </Block>
      </Block>
      </PageContent>
    </Page>
  );
};
