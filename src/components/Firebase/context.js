import React from 'react';
import Firebase from './firebase';
import PropTypes from 'prop-types';

const FirebaseContext = React.createContext({
    firebase:null,
    authUser:null,
    saveAuthUser: () => {},
    clearAuthUser: () => {},
});

export class FirebaseProvider extends React.Component {
    saveAuthUser = newAuthUser => {
      this.setState({ authUser: newAuthUser });
    };
    clearAuthUser = () => {

        console.log("clear")
      this.setState({ authUser: null });

      console.log(this.state.authUser)
      return this.state.authUser === null
    };
  
  
    state = {
        firebase:new Firebase,
        authUser:null,
        saveAuthUser: this.saveAuthUser,
        clearAuthUser: this.clearAuthUser,
    };
  
    render() {
      return (
        <FirebaseContext.Provider value={this.state}>
          {this.props.children}
        </FirebaseContext.Provider>
      );
    }
  }
  


export const FirebaseConsumer = FirebaseContext.Consumer;


FirebaseProvider.propTypes = {
    children: PropTypes.object,
  };