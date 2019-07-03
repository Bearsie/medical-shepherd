import { Block, Button, List, ListInput, LoginScreenTitle, Page } from "framework7-react";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { routePath } from '../../routes';
import { Divider } from "../Divider";
import { Topbar } from '../Topbar';
import { FirebaseConsumer } from '../Firebase';

const socialMediaButtonStyles = {
  height: '48px',
  fontFamily: 'inherit',
  fontSize: '14px',
  textTransform: 'uppercase',
};

export const Register = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const register = (fireProps) => {
    fireProps.firebase
      .createUserWithEmail(userName, password)
      .then(authUser => {
        fireProps.saveAuthUser(authUser.user)
      })
      .then(() => {
        props.f7router.app.dialog.alert(`Registration successful!`, () => {
          props.f7router.navigate(routePath.Home);
        });
      })
      .catch((error) => {
        props.f7router.app.dialog.alert(error.message, () => {
          console.log(error)
        });
      });
  };

  const registerSocial = () => {
  };

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <Topbar />
      <LoginScreenTitle className="no-margin">Register</LoginScreenTitle>
      <Block className="text-align-center">
        You are one step away from better health!<br />
        Go ahead.
      </Block>
      <FirebaseConsumer>
        {fireProps => <List form>
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
          <Block>
            <Button large fill onClick={() => register(fireProps)}>Sign up</Button>
            <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
            <GoogleLoginButton text="Sign up with google" onClick={registerSocial} style={socialMediaButtonStyles} />
            <FacebookLoginButton text="SIgn up with facebook" onClick={registerSocial} style={socialMediaButtonStyles} />
          </Block>
        </List>}
      </FirebaseConsumer>
    </Page>
  );
};

Register.propTypes = {
  f7router: PropTypes.object,
  fireProps: PropTypes.object,
};