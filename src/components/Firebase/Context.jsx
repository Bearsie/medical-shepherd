import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const FirebaseContext = React.createContext({
  authUserId: '',
  setAuthUserId: () => {},
  getCollection: () => {},
  setCollection: () => {},
  updateCollection: () => {},
});

export const FirebaseProvider = (props) => {
  const [authUserId, setAuthUserId] = useState('');

  const getCollection = (collection, userId) => collection.doc(userId).get();
  const setCollection = (collection, userId, payload) => collection.doc(userId).set(payload);
  const updateCollection = (collection, userId, payload) => collection.doc(userId).update(payload);

  return (
    <FirebaseContext.Provider value={{
      authUserId,
      setAuthUserId,
      getCollection,
      setCollection,
      updateCollection,
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
