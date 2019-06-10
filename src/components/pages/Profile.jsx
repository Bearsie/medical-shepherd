import { Block, Page, List, ListInput, ListItem, Button } from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { Topbar } from '../Topbar';
import { colorPrimary, colorSecondary } from '../../styles';

const subtitleStyle = {
  color: colorSecondary,
  fontFamily: 'inherit',
  textAlign: 'center',
  fontSize: 25,
  fontWeight: 700,
  marginTop: 15,
};
const underlineStyle01 = {
  width: '50%',
  marginLeft: '25%',
  height: 1,
  backgroundColor: colorPrimary,
};
const underlineStyle02 = {
  marginTop: 4,
  width: '42%',
  marginLeft: '29%',
  height: 1,
  backgroundColor: colorPrimary,
};
const checkboxItem = {
  width: '70%',
  marginLeft: '15%',
  '::after': {
    content: 'none',
  }
};

export const Profile = (props) => {
  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const Subtitle = (props) => <div style={subtitleStyle}>{props.subtitleText}</div>
  const Underline = (props) => <div style={props.styleVersion}></div>

  return (
    <Page>
      <Topbar title="Profile" />
      <Block>
        <Subtitle subtitleText="Interview" />
        <Underline styleVersion={underlineStyle01} />
        <Underline styleVersion={underlineStyle02} />
        <List style={{ margin: 0 }} noHairlines >
          <ListInput
            label="Birth date"
            type="datepicker"
            placeholder="Your birth date"
            readonly
          />
          <ListItem style={{ width: '96%' }}
            title="Gender"
            smartSelect
            smartSelectParams={{ openIn: 'sheet' }}
          >
            <select name="mac-windows" defaultValue="male">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </ListItem>
          <ListInput
            label="Weight"
            type="text"
            placeholder="Enter weight"
            errorMessage="Only numbers please!"
            required
            validate
            pattern="[0-9]*"
            clearButton
          />
          <ListInput
            label="Height"
            type="text"
            placeholder="Enter height"
            errorMessage="Only numbers please!"
            required
            validate
            pattern="[0-9]*"
            clearButton
          />
        </List>
      </Block>
      <Block>
        <Subtitle subtitleText="Risk factors" />
        <Underline styleVersion={underlineStyle01} />
        <Underline styleVersion={underlineStyle02} />
        <List style={{ margin: 0, marginTop: 5 }} noHairlines>
          <ListItem checkbox title="High cholesterol" style={checkboxItem}></ListItem>
          <ListItem checkbox title="Hypertension" style={checkboxItem}></ListItem>
          <ListItem checkbox title="Diabetes" style={checkboxItem}></ListItem>
          <ListItem checkbox title="Tumor" style={checkboxItem}></ListItem>
        </List>
        <Button style={{ width: '40%', marginLeft: '30%', marginTop: 20 }} large fill >Save</Button>
      </Block>
    </Page>
  );
};

Profile.propTypes = {
  f7router: PropTypes.object,
  subtitleText: PropTypes.string,
  styleVersion: PropTypes.object,
};
