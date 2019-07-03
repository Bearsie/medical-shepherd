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

export const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (fireProps) => {
    fireProps.firebase
      .logInWithEmail(userName, password)
      .then(authUser => {
        fireProps.saveAuthUser(authUser.user)
      })
      .then(() => {
        props.f7router.navigate(routePath.Home);
      })
      .catch((error) => {
        props.f7router.app.dialog.alert(error.message, () => {
          console.log(error)
        });
      });
  };
  const signInSocial = () => {
  };

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <Topbar backLink={routePath.Welcome} />
      <LoginScreenTitle className="no-margin">Log in</LoginScreenTitle>
      <Block className="text-align-center">
        Great to have you here with us!<br />
        Drop by every time you want.
      </Block>
      <FirebaseConsumer>
        {props => <List form>
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
          <Block>
              <Button large fill onClick={() => signIn(props)}>Log in</Button>
            <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
            <GoogleLoginButton onClick={signInSocial} style={socialMediaButtonStyles} />
            <FacebookLoginButton onClick={signInSocial} style={socialMediaButtonStyles} />
          </Block>
        </List>}
      </FirebaseConsumer>
    </Page>
  );
}

Login.propTypes = {
  f7router: PropTypes.object,
  props: PropTypes.object,
};