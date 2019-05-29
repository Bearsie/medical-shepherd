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

export const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    props.f7router.app.dialog.alert(`Username: ${userName}<br>Password: ${password}`, () => {
      props.f7router.navigate(routePath.Home);
    });
  };
  
  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <Topbar backLink={routePath.Welcome} />
      <LoginScreenTitle className="no-margin">Log in</LoginScreenTitle>
      <Block className="text-align-center">
        Great to have you here with us!<br />
        Drop by every time you want.
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
          placeholder="Your password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <Block>
        <List>
          <Button large fill onClick={signIn}>Log in</Button>
          <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
          <GoogleLoginButton onClick={signIn} style={socialMediaButtonStyles} />
          <FacebookLoginButton onClick={signIn} style={socialMediaButtonStyles} />
        </List>
      </Block>
    </Page>
  );
}

Login.propTypes = {
  f7router: PropTypes.object,
};