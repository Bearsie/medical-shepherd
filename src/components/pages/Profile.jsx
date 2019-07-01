import { Block, BlockTitle, Button, Page, PageContent} from 'framework7-react';
import { map, reduce } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { routePath } from '../../routes';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { Topbar } from '../Topbar';
import {RadioSelect} from '../RadioSelect';
import {RangeSelect} from '../RangeSelect';
import {useSelectValue} from '../hooks';

const commonRisks = [
  'Aortic aneurysm',
  'Asthma',
  'Atherosclerosis',
  'Chronic obstructive pulmonary disease',
  'Contact lenses',
  'Coronary disease',
  'Diabetes',
  'Frequent alcohol consumption',
  'Hemophilia',
  'High cholesterol',
  'Hypertension',
  'Peripheral vascular disease',
  'Smoking',
];

export const Profile = (props) => {
  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const Save = () => {
    props.f7router.navigate(routePath.Home);
  };

  const age = useSelectValue(52);
  const weight = useSelectValue(95);
  const height = useSelectValue(180);
  const sex = useSelectValue('Male');
  const place = useSelectValue('Europe');
  const risks = reduce(commonRisks, (currentRisks, risk) => ({
    ...currentRisks,
    [risk]: useSelectValue('Unknown'),
  }), {});

  return (
    <Page>
      <Topbar title="Profile" />
      <PageContent className="no-padding">
        <RangeSelect title="Age" {...age} range={[18, 122]} />
        <RangeSelect title="Weight" {...weight} range={[30, 300]} />
        <RangeSelect title="Height" {...height} range={[130, 220]} />
        <RadioSelect title="Sex" select={sex} options={['Male', 'Female']} />
        <RadioSelect
          title="Place of Residence"
          select={place}
          options={[
            'United States or Canada',
            'Latin or South America',
            'Europe',
            'Northern Africa',
            'Central Africa',
            'Southern Africa',
            'Australia and Oceania',
            'Russia, Kazakhstan or Mongolia',
            'Southwestern Asia',
          ]}
        />
        <BlockTitle className="text-color-primary">Common risks:</BlockTitle>
        {map(commonRisks, (riskName) => (
          <RadioSelect
            key={riskName}
            title={riskName}
            select={risks[riskName]}
            options={['Yes', 'No', 'Unknown']}
          />
        ))}
        <Block>
          <Button large fill onClick={Save}>
            Apply
          </Button>
        </Block>
      </PageContent>
    </Page>
  );
};

Profile.propTypes = {
  f7router: PropTypes.object,
};
