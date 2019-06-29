import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Chip, List, Page } from 'framework7-react';
import { isEmpty, keyBy, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getRiskFactors } from '../../../api/mockedResponses';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { chipWithNoEllipsis } from '../../../styles';
import { Divider } from '../../Divider';
import { PopupSelect } from '../../PopupSelect';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';
import { getRiskFactorsFromProfile, getRiskFactorsToSelectFrom } from './utils';

export const RiskFactors = (props) => {
  const [riskFactors, setRiskFactors] = useState([]);
  const [selectedRiskFactors, setSelectedRiskFactors] = useState({});
  const [popupOpened, togglePopupOpened] = useState(false);

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
      const { data } = await getRiskFactors();
      setRiskFactors(getRiskFactorsToSelectFrom(data, props.profileData.sex, props.profileData.commonRisks));
    } catch(error) {
      showErrorMessage(error);
    }
  };

  const handleOpenRiskFactors = () => {
    togglePopupOpened(true);
  };

  const handleCloseRiskFactors = () => {
    togglePopupOpened(false);
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
            text={commonRisk.name}
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
            text={riskFactor.name}
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
            onClick={handleOpenRiskFactors}
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
              selected: {
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
      <PopupSelect
        getTitle={(riskFactor) => riskFactor.common_name}
        header="Risk factors"
        items={riskFactors}
        onChange={(riskFactor) => {
          if (selectedRiskFactors[riskFactor.id]) {
            setSelectedRiskFactors(omit(selectedRiskFactors, riskFactor.id));
            return;
          }

          setSelectedRiskFactors({
            ...selectedRiskFactors,
            [riskFactor.id]: riskFactor,
          })
        }}
        onPopupClosed={handleCloseRiskFactors}
        popupOpened={popupOpened}
        selectedItems={selectedRiskFactors}
      />
    </Page>
  );
};

RiskFactors.propTypes = {
  f7router: PropTypes.object,
  profileData: PropTypes.object,
  selectedSymptoms: PropTypes.object,
};