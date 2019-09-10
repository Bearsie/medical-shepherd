import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Chip, Page } from 'framework7-react';
import { isEmpty, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { routePath } from '../../../routes';
import RegisterBackButtonActionWithConfirmation from '../../../services/RegisterBackButtonActionWithConfirmation';
import { chipWithNoEllipsis } from '../../../styles';
import { COLLECTIONS, FirebaseContext } from '../../Firebase';
import { BrokenArm } from '../../Icons';
import { MultiSelect } from '../../MultiSelect';
import { PagePopup } from '../../PagePopup';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

export const Symptoms = (props) => {
  const firebase = useContext(FirebaseContext);
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState(props.selectedSymptoms || {});
  const [profileData, setProfileData] = useState(props.profileData || {});

  useEffect(() => {
    const getProfileCollection = async () => {
      if (isEmpty(profileData)) {
        const fetchedProfileData = await firebase.getUserData(COLLECTIONS.Profile, firebase.authUserId);
        
        if (fetchedProfileData) {
          setProfileData(fetchedProfileData);
        } else {
          props.f7router.app.dialog.alert('To get diagnosis You need to fill your profile data! Go to Profile tab!');
          return;
        }
      }

      fetchSymptoms();
    };

    getProfileCollection();
  }, []);

  useEffect(() => {
    RegisterBackButtonActionWithConfirmation(
      props.f7router,
      routePath.Home,
      'Do you want to quit diagnosis?',
    );
  }, []);

  const showErrorMessage = (error) => {
    console.log(error);
    Dialogs.prompt('Connection with server failed. Unable to load symptoms.', 'Error');
  };

  const fetchSymptoms = async () => {
    try {
      const { symptoms } = await firebase.getApiData();
      setSymptoms(symptoms);
    } catch(error) {
      showErrorMessage(error);
    }
  };

  return (
    <Page>
      <Topbar title="Diagnosis" linkProps={{ href: routePath.Home }}/>
      <UnderlinedHeader title="Symptoms" />
      <Block className="text-align-center">
        <BrokenArm className={mergeStyles({ width: '100px', height: '100px' })} />
        <Button
          fill
          disabled={isEmpty(profileData)}
          popupOpen=".symptom-list"
        >
          Add symptoms
        </Button>
      </Block>
      <BlockTitle>{isEmpty(selectedSymptoms) ? '' : 'Selected symptoms:'}</BlockTitle>
      <Block noHairlines>
        {map(selectedSymptoms, (symptom) => (
          <Chip
            text={symptom.common_name}
            key={symptom.id}
            deleteable
            onDelete={() => { setSelectedSymptoms(omit(selectedSymptoms, symptom.id)); }}
            className={chipWithNoEllipsis}
          />
        ))}
      </Block>
      <Block>
        <Button
          fill
          className={mergeStyles({
            visibility: isEmpty(selectedSymptoms) ? 'hidden' : 'visible',
          })}
          href={routePath.RiskFactors}
          routeProps={{ selectedSymptoms, profileData }}
        >
          Continue
        </Button>
      </Block>
      <PagePopup
        header="Symptoms"
        name="symptom-list"
      >
        <MultiSelect
          getTitle={(symptom) => symptom.common_name}
          items={symptoms}
          onChange={(symptom) => {
            if (selectedSymptoms[symptom.id]) {
              setSelectedSymptoms(omit(selectedSymptoms, symptom.id));
              return;
            }
  
            setSelectedSymptoms({
              ...selectedSymptoms,
              [symptom.id]: { ...symptom, choice_id: 'present' },
            })
          }}
          selectedItems={selectedSymptoms}
        />
      </PagePopup>
    </Page>
  );
};

Symptoms.propTypes = {
  f7router: PropTypes.object,
  profileData: PropTypes.object,
  selectedSymptoms: PropTypes.object,
};