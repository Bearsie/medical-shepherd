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

export const Register = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useContext(FirebaseContext);
  const [isSocial, setSocial] = useState(props.social);


  const register = async () => {
    try {
      const newUser = await auth.createUserWithEmailAndPassword(userName, password);
      firebase.setAuthUserId(newUser.user.uid);
      props.f7router.navigate(routePath.Home)
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    props.f7router.app.dialog.alert(error.message, () => {
      console.log(error);
    });
  };

  const registerSocial = () => {
    setSocial(true);
  };

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <Topbar />
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
        <Block>
          <Button large fill onClick={register}>Sign up</Button>
          {!props.social && !isSocial &&
            <>
              <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
              <GoogleLoginButton text="Sign up with google" onClick={registerSocial} style={socialMediaButtonStyles} />
              <FacebookLoginButton text="SIgn up with facebook" onClick={registerSocial} style={socialMediaButtonStyles} />
            </>
          }
        </Block>
      </List>
    </Page>
  );
};

Register.propTypes = {
  f7router: PropTypes.object,
  social: PropTypes.bool,
};