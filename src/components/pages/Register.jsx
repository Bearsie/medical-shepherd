import { Block, Button, List, ListInput, LoginScreenTitle, Page } from "framework7-react";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { routePath } from '../../routes';
import { Divider } from "../Divider";
import { Topbar } from '../Topbar';
import { FirebaseContext } from '../Firebase';

const socialMediaButtonStyles = {
  height: '48px',
  fontFamily: 'inherit',
  fontSize: '14px',
  textTransform: 'uppercase',
};

export const Register = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const register = (firebase) => {
    firebase
      .createUserWithEmail(userName, password)
      .then((authUser) => {
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
      <FirebaseContext.Consumer>
      {firebase => <List form firebase={firebase}>
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
          <Button large fill onClick={() => register(firebase)}>Sign up</Button>
          <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
          <GoogleLoginButton text="Sign up with google" onClick={registerSocial} style={socialMediaButtonStyles} />
          <FacebookLoginButton text="SIgn up with facebook" onClick={registerSocial} style={socialMediaButtonStyles} />
        </Block>
      </List>}
    </FirebaseContext.Consumer>
    </Page>
  );
};

Register.propTypes = {
  f7router: PropTypes.object,
  firebase: PropTypes.object,
};