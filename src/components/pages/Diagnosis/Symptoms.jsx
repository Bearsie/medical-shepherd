import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Chip, Page } from 'framework7-react';
import { isEmpty, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { getSymptoms } from '../../../api';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { chipWithNoEllipsis } from '../../../styles';
import { db, FirebaseContext } from '../../Firebase';
import { BrokenArm } from '../../Icons';
import { MultiSelect } from '../../MultiSelect';
import { PagePopup } from '../../PagePopup';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

const profileCollection = db.collection('profile');

export const Symptoms = (props) => {
  const firebase = useContext(FirebaseContext);
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [profileData, setProfileData] = useState({});
  const [allowDiagnosis, setAllowDiagnosis] = useState(false);

  useEffect(() => {
    const getProfileCollection = async () => {
      const snapshot = await firebase.getCollection(profileCollection, firebase.authUserId);
      const profileData = snapshot.data();

      if (profileData) {
        setProfileData(profileData);
        setAllowDiagnosis(true);
        fetchSymptoms();
      } else {
        props.f7router.app.dialog.alert('To get diagnosis You need to fill your profile data! Go to Profile tab!');
      }
    };

    getProfileCollection();
  }, []);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const showErrorMessage = (error) => {
    console.log(error);
    Dialogs.prompt('Connection with server failed. Unable to load symptoms.', 'Error');
  };

  const fetchSymptoms = async () => {
    try {
      const { data } = await getSymptoms();
      setSymptoms(data);
    } catch(error) {
      showErrorMessage(error);
    }
  };

  return (
    <Page>
      <Topbar title="Diagnosis" />
      <UnderlinedHeader title="Symptoms" />
      <Block className="text-align-center">
        <BrokenArm className={mergeStyles({ width: '100px', height: '100px' })} />
        <Button
          fill
          disabled={!allowDiagnosis}
          popupOpen=".symptom-list"
        >
          Add symptoms
        </Button>
      </Block>
      <BlockTitle>{isEmpty(selectedSymptoms) ? '' : 'Selected symptoms:'}</BlockTitle>
      <Block noHairlines>
        {map(selectedSymptoms, (symptom) => (
          <Chip
            text={symptom.name}
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
              [symptom.id]: symptom,
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
};