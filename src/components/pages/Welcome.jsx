import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { Block, Button, Col, Navbar, NavTitle, Page, PageContent, Row } from 'framework7-react';
import React, { useEffect } from 'react';
import * as config from '../../config';
import Platform from '../../services/Platform';
import { colorSecondary } from '../../styles';
import { routePath } from '../../routes';

const styles = mergeStyleSets({
  navbar: {
    '--f7-navbar-bg-color': 'transparent',
  },
  page: {
    background: 'no-repeat url(img/welcoming-shepherd.jpg)',
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
              <Button large fill color="#ffffff" href={routePath.Home}>Log in</Button>
            </Col>
          </Row>
        </Block>
      </Block>
      </PageContent>
    </Page>
  );
};
