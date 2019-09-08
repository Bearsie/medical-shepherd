import { Page } from 'framework7-react';
import { keyBy, map, values } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { routePath } from '../../routes';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { COLLECTIONS, FirebaseContext } from '../Firebase';
import { Topbar } from '../Topbar';
import { ProfileData } from './ProfileData';

const commonRisks = [
  { common_name: 'Aortic aneurysm', id: "p_182" },
  { common_name: 'Asthma', id: "p_167" },
  { common_name: 'Atherosclerosis', id: "p_173" },
  { common_name: 'Chronic obstructive pulmonary disease', id: "p_164" },
  { common_name: 'Contact lenses', id: "p_139" },
  { common_name: 'Coronary disease', id: "p_78" },
  { common_name: 'Diabetes', id: 'p_8' },
  { common_name: 'Frequent alcohol consumption', id: 'p_38' },
  { common_name: 'Hemophilia', id: "p_202" },
  { common_name: 'High cholesterol', id: 'p_10' },
  { common_name: 'Hypertension', id: 'p_9' },
  { common_name: 'Peripheral vascular disease', id: "p_183" },
  { common_name: 'Smoking', id: 'p_28' },
];

export const Profile = (props) => {
  const firebase = useContext(FirebaseContext);
  const [profileData, setProfileData] = useState(undefined);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  useEffect(() => {
    const getProfileData = async () => {
      props.f7router.app.preloader.show();
      try {
        const profileData = await firebase.getUserData(COLLECTIONS.Profile, firebase.authUserId);

        if (profileData) {
          const dictionaryRisks = keyBy(profileData.commonRisks, 'id');
          const { 'p_19': placeOfResidence, ...restCommonRisks } = dictionaryRisks;
          
          setProfileData({
            age: profileData.age,
            weight: profileData.weight,
            height: profileData.height,
            sex: profileData.sex,
            place: placeOfResidence,
            risks: values(restCommonRisks),
          });
        } else {
          setProfileData({
            age: 18,
            weight: 30,
            height: 130,
            sex: 'male',
            place: {
              choice_id: "present",
              id: "p_19",
              initial: true,
              common_name: 'Europe',
            },
            risks: map(commonRisks, (risk) => ({
              ...risk,
              initial: true,
              choice_id: 'unknown',
            })),
          });
        }
      } catch (error) {
        onError(error);
      }

      props.f7router.app.preloader.hide();
    };

    getProfileData();
  }, []);

  const onError = (error) => {
    props.f7router.app.dialog.alert('An error occured: ', error.message);
  };

  return (
    <Page>
      <Topbar title="Profile" />
      {profileData &&
        <ProfileData profileData={profileData} dialog={props.f7router.app.dialog} />
      }
    </Page>
  );
};

Profile.propTypes = {
  f7router: PropTypes.object,
};
