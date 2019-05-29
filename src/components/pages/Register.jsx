import { Block, Button, List, ListInput, LoginScreenTitle, Page } from "framework7-react";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { routePath } from '../../routes';
import { Divider } from "../Divider";
import { Topbar } from '../Topbar';

const socialMediaButtonStyles = {
  height: '48px',
  fontFamily: 'inherit',
  fontSize: '14px',
  textTransform: 'uppercase',
};

export const Register = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const register =  () => {
    props.f7router.app.dialog.alert(`Username: ${userName}<br>Password: ${password}`, () => {
      props.f7router.navigate(routePath.Home);
    });
  };
  
  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <Topbar backLink={routePath.Welcome} />
      <LoginScreenTitle className="no-margin">Register</LoginScreenTitle>
      <Block className="text-align-center">
        You are one step away from better health!<br />
        Go ahead.
      </Block>
      <List form>
        <ListInput
          floatingLabel
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          value={userName}
          onInput={(e) => {
            setUserName(e.target.value);
          }}
        />
        <ListInput
          floatingLabel
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <Block>
        <List>
          <Button large fill onClick={register}>Sign up</Button>
          <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
          <GoogleLoginButton text="Sign up with google" onClick={register} style={socialMediaButtonStyles} />
          <FacebookLoginButton text="SIgn up with facebook" onClick={register} style={socialMediaButtonStyles} />
        </List>
      </Block>
    </Page>
  );
};

Register.propTypes = {
  f7router: PropTypes.object,
};