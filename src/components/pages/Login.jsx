import { Block, Button, List, ListInput, LoginScreenTitle, Page } from "framework7-react";
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { routePath } from '../../routes';
import { Divider } from "../Divider";
import { auth, FirebaseContext } from '../Firebase';
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
  const firebase = useContext(FirebaseContext);

  const signIn = async () => {
    try {
      const regularUser = await auth.signInWithEmailAndPassword(userName, password);
      firebase.setAuthUserId(regularUser.user.uid);
      props.f7router.navigate(routePath.Home);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    props.f7router.app.dialog.alert(error.message, () => {
      console.log(error);
    });
  };

  const signInSocial = () => {
  };

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <Topbar />
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
        <Block>
          <Button large fill onClick={signIn}>Log in</Button>
          <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
          <GoogleLoginButton onClick={signInSocial} style={socialMediaButtonStyles} />
          <FacebookLoginButton onClick={signInSocial} style={socialMediaButtonStyles} />
        </Block>
      </List>
    </Page>
  );
}

Login.propTypes = {
  f7router: PropTypes.object,
};