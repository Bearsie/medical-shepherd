import { Dialogs } from '@ionic-native/dialogs';
import { List, ListItem, Panel, Toggle } from 'framework7-react';
import React, { useState } from 'react';
import * as config from '../../config';
import { routePath } from '../../routes';
import Platform from '../../services/Platform';
import PropTypes from 'prop-types';
import { svgIcons } from '../../styles';
import { Alarm, Crutches, Doctor, Files, Head, Pills, Search } from '../Icons';
import { Topbar } from '../Topbar';
import { FirebaseConsumer } from '../Firebase';

const mainMenuItems = [
  { title: 'Profile', path: routePath.Profile, Icon: Head },
  { title: 'Diagnosis', path: routePath.Symptoms, Icon: Search },
  { title: 'Prescriptions', path: routePath.Prescriptions, Icon: Pills },
  { title: 'Appointments', path: routePath.Appointments, Icon: Doctor },
  { title: 'History of diseases', path: routePath.History, Icon: Files },
];


const handleLogOut = (props) => {
  Dialogs.confirm('Do you want to log out?', config.name).then((answerIndex) => {
    if (answerIndex === 1) {
        props.firebase.logOut().then(() => {
          if(props.clearAuthUser()){
            Platform.exitApp()
          }
        })
    }
  });
};

export const SideNav = () => {
  const [checked, toggleChecked] = useState(false);

  return (
    <Panel left cover>
      <Topbar panelClose="left" />
      <FirebaseConsumer>
        {props => <List simple-list noHairlinesBetween noHairlines>
          {mainMenuItems.map(({ Icon, path, title }) => (
            <ListItem key={path} link={path} title={title} noChevron panelClose="left">
              <Icon className={svgIcons} slot="media" />
            </ListItem>
          ))}
          <ListItem />
          <ListItem link="#" title="Notifications" onClick={() => toggleChecked(!checked)} noChevron>
            <Alarm className={svgIcons} slot="media" />
            <Toggle slot="after" checked={checked} />
          </ListItem>
          <ListItem key={routePath.Welcome} link={routePath.Welcome} title="Log out" onClick={() => handleLogOut(props)} noChevron panelClose="left">
            <Crutches className={svgIcons} slot="media" />
          </ListItem>
        </List>}
      </FirebaseConsumer>
    </Panel>
  );
};


SideNav.propTypes = {
  props: PropTypes.object,
};