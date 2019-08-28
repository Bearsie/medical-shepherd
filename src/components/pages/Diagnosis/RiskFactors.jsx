import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Chip, List, Page } from 'framework7-react';
import { isEmpty, keyBy, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { chipWithNoEllipsis } from '../../../styles';
import { Divider } from '../../Divider';
import { FirebaseContext } from '../../Firebase';
import { MultiSelect } from '../../MultiSelect';
import { PagePopup } from '../../PagePopup';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';
import { getRiskFactorsFromProfile, getRiskFactorsToSelectFrom } from './utils';

export const RiskFactors = (props) => {
  const firebase = useContext(FirebaseContext);
  const [riskFactors, setRiskFactors] = useState([]);
  const [selectedRiskFactors, setSelectedRiskFactors] = useState({});

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
    fetchRiskFactors();
  }, []);

  const showErrorMessage = (error) => {
    console.log(error);
    Dialogs.prompt('Connection with server failed. Unable to load risk factors.', 'Error');
  };

  const fetchRiskFactors = async () => {
    try {
      const { risks } = await firebase.getApiData();
      setRiskFactors(
        getRiskFactorsToSelectFrom(
          risks,
          props.profileData.sex,
          props.profileData.commonRisks,
        )
      );
    } catch(error) {
      showErrorMessage(error);
    }
  };

  const commonRisksFromProfile = getRiskFactorsFromProfile(props.profileData);

  return (
    <Page>
      <Topbar title="Diagnosis" />
      <UnderlinedHeader title="Risk factors" />
      <Block noHairlines className="no-margin-top no-margin-bottom">
        <div className="margin-bottom text-align-justify">Based on your profile data we identified following risk factors:</div>
        {map(commonRisksFromProfile, (commonRisk) => (
          <Chip
            text={commonRisk.common_name}
            key={commonRisk.id}
            color={commonRisk.choice_id === 'absent' ? 'red' : undefined}
            className={mergeStyles([chipWithNoEllipsis, 'bg-color-primary'])}
          />
        ))}
      </Block>
      <BlockTitle className={mergeStyles(isEmpty(selectedRiskFactors) && { display: 'none' })}>
        Selected additional risk factors:
      </BlockTitle>
      <Block noHairlines>
        {map(selectedRiskFactors, (riskFactor) => (
          <Chip
            text={riskFactor.common_name}
            key={riskFactor.id}
            deleteable
            onDelete={() => { setSelectedRiskFactors(omit(selectedRiskFactors, riskFactor.id)); }}
            className={chipWithNoEllipsis}
          />
        ))}
      </Block>
      <Block>
        <List>
          <Button
            fill
            popupOpen=".risk-factor-list"
          >
            Add more
          </Button>
          <Divider text="or" color="lightGray" className="padding-top padding-bottom" />
          <Button
            fill
            href={routePath.SuggestedSymptoms}
            routeProps={{
              age: props.profileData.age,
              sex: props.profileData.sex,
              selectedSymptoms: {
                ...keyBy(commonRisksFromProfile, 'id'),
                ...selectedRiskFactors,
                ...props.selectedSymptoms,
              },
            }}
          >
            Continue
          </Button>
        </List>
      </Block>
      <PagePopup
        header="Risk factors"
        name="risk-factor-list"
      >
        <MultiSelect
          getTitle={(riskFactor) => riskFactor.common_name}
          items={riskFactors}
          onChange={(riskFactor) => {
            if (selectedRiskFactors[riskFactor.id]) {
              setSelectedRiskFactors(omit(selectedRiskFactors, riskFactor.id));
              return;
            }
  
            setSelectedRiskFactors({
              ...selectedRiskFactors,
              [riskFactor.id]: { ...riskFactor, choice_id: 'present' },
            })
          }}
          selectedItems={selectedRiskFactors}
        />
      </PagePopup>
    </Page>
  );
};

RiskFactors.propTypes = {
  f7router: PropTypes.object,
  profileData: PropTypes.object,
  selectedSymptoms: PropTypes.object,
};