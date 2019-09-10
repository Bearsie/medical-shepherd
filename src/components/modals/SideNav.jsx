import { Dialogs } from '@ionic-native/dialogs';
import { List, ListItem, Panel } from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import * as config from '../../config';
import { routePath } from '../../routes';
import { svgIcons } from '../../styles';
import { auth, FirebaseContext } from '../Firebase';
import { Crutches, Files, Head, Pills, Search } from '../Icons';
import { Topbar } from '../Topbar';

export const SideNav = () => {
  const firebase = useContext(FirebaseContext);

  const mainMenuItems = [
    { title: 'Profile', path: routePath.Profile, Icon: Head },
    { title: 'Diagnosis', path: routePath.Symptoms, Icon: Search },
    { title: 'Prescriptions', path: routePath.PrescriptionList, Icon: Pills },
    { title: 'History', path: routePath.History, Icon: Files },
  ];

  const handleLogOut = async (event) => {
    event.preventDefault();
    
    try {
      await auth.signOut();
    } catch (error) {
      handleError(error);
    } finally {
      firebase.setAuthUserId('');
    }
  };

  const handleError = (error) => {
    Dialogs.alert(error.message, config.name);
  };

  return (
    <Panel left cover>
      <Topbar linkProps={{ panelClose: true }} />
      <List simple-list noHairlinesBetween noHairlines>
        {mainMenuItems.map(({ Icon, path, title }) => (
          <ListItem key={path} link={path} title={title} noChevron panelClose="left">
            <Icon className={svgIcons} slot="media" />
          </ListItem>
        ))}
        <ListItem />
        <ListItem
          key={routePath.Welcome}
          link={routePath.Welcome}
          title="Log out"
          onClick={handleLogOut}
          noChevron
          panelClose="left"
        >
          <Crutches className={svgIcons} slot="media" />
        </ListItem>
      </List>
    </Panel>
  );
};
