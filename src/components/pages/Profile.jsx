import { Block, BlockTitle, Button, Page, PageContent } from 'framework7-react';
import { keyBy, map, reduce, values } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { db, FirebaseContext } from '../Firebase';
import { useValue } from '../hooks';
import { RadioSelect } from '../RadioSelect';
import { RangeSelect } from '../RangeSelect';
import { Topbar } from '../Topbar';

const commonRisks = [
  { name: 'Aortic aneurysm', id: "p_182" },
  { name: 'Asthma', id: "p_167" },
  { name: 'Atherosclerosis', id: "p_173" },
  { name: 'Chronic obstructive pulmonary disease', id: "p_164" },
  { name: 'Contact lenses', id: "p_139" },
  { name: 'Coronary disease', id: "p_78" },
  { name: 'Diabetes', id: 'p_8' },
  { name: 'Frequent alcohol consumption', id: 'p_38' },
  { name: 'Hemophilia', id: "p_202" },
  { name: 'High cholesterol', id: 'p_10' },
  { name: 'Hypertension', id: 'p_9' },
  { name: 'Peripheral vascular disease', id: "p_183" },
  { name: 'Smoking', id: 'p_28' },
];

const getChoiceName = (choiceId) => choiceId === 'present' ? 'Yes'
  : choiceId === 'absent' ? 'No'
  : 'Unknown';

const profileCollection = db.collection('profile');

export const Profile = (props) => {
  const firebase = useContext(FirebaseContext);
  const age = useValue(18);
  const weight = useValue(30);
  const height = useValue(130);
  const sex = useValue('Male');
  const place = useValue('Europe', 'p_19');
  const risks = reduce(commonRisks, (currentRisks, risk) => ({
    ...currentRisks,
    [risk.name]: useValue('Unknown', risk.id, risk.name),
  }), {});

  useEffect(() => {
    const getProfileCollection = async () => {
      const snapshot = await firebase.getCollection(profileCollection, firebase.authUserId);
      const profileData = snapshot.data();

      if(profileData) {
        age.onChange(profileData.age);
        weight.onChange(profileData.weight);
        height.onChange(profileData.height);
        sex.onChange(profileData.sex);

        const dictionaryRisks = keyBy(profileData.commonRisks, 'id');
        place.onChange(dictionaryRisks[place.id].name);
        
        for (let riskName in risks) {
          const risk = risks[riskName];
          risk.onChange(getChoiceName(dictionaryRisks[risk.id].choice_id));
        }
      }
    };

    getProfileCollection();
  }, []);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const Save = async () => {
    const payload = {
      sex: sex.value,
      age: age.value,
      weight: weight.value,
      height: height.value,
      commonRisks: [
        {
          id: place.id,
          name: place.value,
          choice_id: 'present',
          initial: true,
        },
        ...map([...values(risks)], (risk) => ({
          id: risk.id,
          name: risk.name,
          choice_id: risk.value,
          initial: true,
        })),
      ],
    };

    try {
      await firebase.setCollection(profileCollection, firebase.authUserId, payload);
      props.f7router.app.dialog.alert('Changes saved!');
    } catch (error) {
      onError(error);
    }
  };

  const onError = (error) => {
    props.f7router.app.dialog.alert('An error occured: ', error.message);
  };

  return (
    <Page>
      <Topbar title="Profile" />
      <PageContent className="no-padding">
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
        {map(commonRisks, (risk) => (
          <RadioSelect
            key={risk.id}
            title={risk.name}
            {...risks[risk.name]}
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
