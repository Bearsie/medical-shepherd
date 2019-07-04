import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { db } from './firebase';

export const FirebaseContext = React.createContext({
  authUserId: '',
  setAuthUserId: () => {},
  userData: [],
});

export const FirebaseProvider = (props) => {
  const [authUserId, setAuthUserId] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      console.log(authUserId);
      const userDocument = await getUserIdCollection(authUserId);
      console.log(userDocument.data());
      setUserData(userDocument.data());
    };

    if (authUserId) {
      getUserData();
    }
  }, [authUserId])

  // User API
  const usersCollection = (userId) => db.collection(userId).doc('profile');
  const getUserIdCollection = (userId) => usersCollection(userId).get();

  return (
    <FirebaseContext.Provider value={{
      authUserId,
      setAuthUserId,
      userData,
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}
  
FirebaseProvider.propTypes = {
  f7router: PropTypes.object,
  children: PropTypes.object,
};

export const FirebaseConsumer = FirebaseContext.Consumer;
