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

const mainMenuItems = [
  { title: 'Profile', path: routePath.Profile, Icon: Head },
  { title: 'Diagnosis', path: routePath.Symptoms, Icon: Search },
  { title: 'Prescriptions', path: routePath.PrescriptionList, Icon: Pills },
  { title: 'History', path: routePath.History, Icon: Files },
];

export const SideNav = (props) => {
  const firebase = useContext(FirebaseContext);

  const handleLogOut = async () => {
    const answerIndex = await Dialogs.confirm('Do you want to log out?', config.name);
  
    if (answerIndex !== 1) return;

    try {
      await auth.signOut();
      firebase.setAuthUserId('');
      props.f7router.navigate(routePath.Welcome);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    props.f7router.app.dialog.alert(error.message, () => {
      console.log(error);
    });
  };

  return (
    <Panel left cover>
      <Topbar panelClose />
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

SideNav.propTypes = {
  f7router: PropTypes.object,
};