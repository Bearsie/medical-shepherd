import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Chip, Page } from 'framework7-react';
import { isEmpty, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getSymptoms } from '../../../api/api';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { chipWithNoEllipsis } from '../../../styles';
import { BrokenArm } from '../../Icons';
import { PopupSelect } from '../../PopupSelect';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

import mockedProfileData from '../../../api/mockedResponses';

export const Symptoms = (props) => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [popupOpened, togglePopupOpened] = useState(false);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
    fetchSymptoms();
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

  const handleOpenSymptoms = () => {
    togglePopupOpened(true);
  };

  const handleCloseSymptoms = () => {
    togglePopupOpened(false);
  };

  return (
    <Page>
      <Topbar title="Diagnosis" />
      <UnderlinedHeader title="Symptoms" />
      <Block className="text-align-center">
        <BrokenArm className={mergeStyles({ width: '100px', height: '100px' })} />
        <Button
          fill
          onClick={handleOpenSymptoms}
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
          routeProps={{ selectedSymptoms, profileData: mockedProfileData }}
        >
          Continue
        </Button>
      </Block>
      <PopupSelect
        getTitle={(symptom) => symptom.common_name}
        header="Symptoms"
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
        onPopupClosed={handleCloseSymptoms}
        popupOpened={popupOpened}
        selectedItems={selectedSymptoms}
      />
    </Page>
  );
};

Symptoms.propTypes = {
  f7router: PropTypes.object,
};