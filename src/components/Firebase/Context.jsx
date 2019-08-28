import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { db, COLLECTIONS } from './firebase';

export const FirebaseContext = React.createContext({
  authUserId: '',
  setAuthUserId: () => {},
  getApiData: () => {},
  getUserData: () => {},
  setUserData: () => {},
  updateUserData: () => {},
});

export const FirebaseProvider = (props) => {
  const [authUserId, setAuthUserId] = useState('');

  const getApiData = async () => {
    const snapshot = await db.collection(COLLECTIONS.Api).get();

    return snapshot.docs[0].data();
  };

  const getUserData = async (collectionName, userId) => {
    const snapshot = await db.collection(collectionName).doc(userId).get();

    return snapshot.data();
  }

  const setUserData = (collectionName, userId, payload) =>
    db.collection(collectionName).doc(userId).set(payload);

  const updateUserData = (collectionName, userId, payload) =>
    db.collection(collectionName).doc(userId).update(payload);

  return (
    <FirebaseContext.Provider value={{
      authUserId,
      setAuthUserId,
      getApiData,
      getUserData,
      setUserData,
      updateUserData,
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
