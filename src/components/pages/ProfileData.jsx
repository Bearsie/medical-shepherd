import { Block, BlockTitle, Button, PageContent } from 'framework7-react';
import { lowerCase, map, omit, startCase, values } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { COLLECTIONS, FirebaseContext } from '../Firebase';
import { useValue } from '../hooks';
import { RadioSelect } from '../RadioSelect';
import { RangeSelect } from '../RangeSelect';

const riskChoices = {
  present: 'Yes',
  absent: 'No',
  unknown: 'Unknown',
};

const riskValues = {
  Yes: 'present',
  No: 'absent',
  Unknown: 'unknown',
};

export const ProfileData = (props) => {
  const firebase = useContext(FirebaseContext);
  const age = useValue(props.profileData.age);
  const weight = useValue(props.profileData.weight);
  const height = useValue(props.profileData.height);
  const sex = useValue(startCase(props.profileData.sex));
  const place = useValue(props.profileData.place.common_name, omit(props.profileData.place, 'common_name'));
  const risks = map(props.profileData.risks, (risk) =>
    useValue(riskChoices[risk.choice_id], omit(risk, 'choice_id')),
  );

  const save = async () => {
    const payload = {
      sex: lowerCase(sex.value),
      age: age.value,
      weight: weight.value,
      height: height.value,
      commonRisks: [
        {
          ...omit(place, ['value', 'onChange']),
          common_name: place.value,
        },
        ...map([...values(risks)], (risk) => ({
          ...omit(risk, ['value', 'onChange']),
          choice_id: riskValues[risk.value],
        })),
      ],
    };

    try {
      await firebase.setUserData(COLLECTIONS.Profile, firebase.authUserId, payload);
      props.dialog.alert('Changes saved!');
    } catch (error) {
      onError(error);
    }
  };

  const onError = (error) => {
    props.dialog.alert('An error occured: ', error.message);
  };

  return (
    <PageContent className="no-padding">
      <Block>
        <Button large fill onClick={save}>
          Save changes
        </Button>
      </Block>
      <RangeSelect title="Age" {...age} range={[18, 122]} />
      <RangeSelect title="Weight" {...weight} range={[30, 300]} />
      <RangeSelect title="Height" {...height} range={[130, 220]} />
      <RadioSelect title="Sex" {...sex} options={['Male', 'Female']} />
      <RadioSelect
        title="Place of Residence"
        {...place}
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
      {map(risks, (risk) => (
        <RadioSelect
          key={risk.id}
          title={risk.common_name}
          {...risk}
          options={values(riskChoices)}
        />
      ))}
    </PageContent>
  );
};

ProfileData.propTypes = {
  dialog: PropTypes.object,
  profileData: PropTypes.object,
};