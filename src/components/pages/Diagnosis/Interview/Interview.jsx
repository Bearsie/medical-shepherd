import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, List, Page } from 'framework7-react';
import { get, isEmpty, keyBy, map } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getDiagnosis } from '../../../../api';
import { routePath } from '../../../../routes';
import RegisterBackButtonActionWithConfirmation from '../../../../services/RegisterBackButtonActionWithConfirmation';
import { InterviewCard } from '../../../Icons';
import { Topbar } from '../../../Topbar';
import { UnderlinedHeader } from '../../../UnderlinedHeader';
import { getSanitizedEvidence } from '../utils';
import { MultipleGroupQuestion } from './MultipleGroupQuestion';
import { SingleGroupQuestion } from './SingleGroupQuestion';
import { SingleQuestion } from './SingleQuestion';

export const Interview = (props) => {
  const initialEvidence = {
    ...props.commonRisksFromProfile,
    ...props.selectedRiskFactors,
    ...props.selectedSymptoms,
    ...props.suggestedSymptoms,
  };
	const [interview, setInterview] = useState({});
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [step, setStep] = useState(0);
  const [evidence, setEvidence] = useState(initialEvidence);
  const [shouldStopInterview, setShouldStopInterview] = useState(false);

	useEffect(() => {
    RegisterBackButtonActionWithConfirmation(
      props.f7router,
      routePath.Home,
      'Do you want to quit diagnosis?',
    );
  }, []);

  useEffect(() => {
    fetchDiagnosis();
  }, [step]);

  useEffect(() => {
		if (shouldStopInterview) {
      props.f7router.navigate(routePath.DiagnosisResults, { props: {
        evidence,
        age: props.age,
        conditions: interview.conditions,
        sex: props.sex,
        selectedSymptoms: props.selectedSymptoms,
        suggestedSymptoms: props.suggestedSymptoms,
        commonRisksFromProfile: props.commonRisksFromProfile,
        selectedRiskFactors: props.selectedRiskFactors,
      }});
    }
  }, [shouldStopInterview]);

	const showErrorMessage = (error) => {
		console.log(error);
		Dialogs.prompt('Connection with server failed. Unable to load symptoms.', 'Error');
	};

	const fetchDiagnosis = async () => {
    const sanitizedEvidence = getSanitizedEvidence(evidence);

		try {
			const { data } = await getDiagnosis(sanitizedEvidence, props.age, props.sex);
      setInterview(data);
      setShouldStopInterview(data.question.should_stop);
		} catch(error) {
			showErrorMessage(error);
		}
	};
  
  const questionType = get(interview, 'question.type');

	return (
    <Page>
      <Topbar
        title="Diagnosis"
        linkProps={{
          href: routePath.SuggestedSymptoms,
          routeProps: {
            age: props.age,
            sex: props.sex,
            commonRisksFromProfile: props.commonRisksFromProfile,
            selectedRiskFactors: props.selectedRiskFactors,
            selectedSymptoms: props.selectedSymptoms,
            suggestedSymptoms: props.suggestedSymptoms,
          },
        }}
      />
      <UnderlinedHeader title="Interview" />
      <Block className="text-align-center">
        <InterviewCard className={mergeStyles({ width: '100px', height: '100px' })} />
      </Block>
      <BlockTitle className={mergeStyles([
        { fontSize: '18px', wordBreak: 'break-word', whiteSpace: 'pre-wrap', lineHeight: '1.5' },
        'no-margin-top',
        'no-margin-bottom',
        'text-align-justify',
        ])}
      >
        {get(interview, 'question.text')}
      </BlockTitle>
      <List>
        {map(get(interview, 'question.items'), (symptom) => (
          <ul key={symptom.id}>
              {
                questionType === 'single' ?
                  <SingleQuestion {...{ symptom, selectedSymptoms, setSelectedSymptoms }} />
                : questionType === 'group_single' ?
                  <SingleGroupQuestion {...{ symptom, selectedSymptoms, setSelectedSymptoms }} />
                : questionType === 'group_multiple' ?
                  <MultipleGroupQuestion {...{ symptom, selectedSymptoms, setSelectedSymptoms }} />
                : questionType === 'scale' ?
                  <SingleGroupQuestion {...{ symptom, selectedSymptoms, setSelectedSymptoms }} />
                : null
              }
          </ul>
        ))}
      </List>
      <Block>
        {!isEmpty(selectedSymptoms) &&
          <Button
            fill
            onClick={() => {
              setEvidence({
                ...keyBy(selectedSymptoms, 'id'),
                ...evidence,
              });
              setSelectedSymptoms({});
              setStep(step + 1);
            }}
          >
            Continue
          </Button>
        }
      </Block>
    </Page>
  );
}

Interview.propTypes = {
  f7router: PropTypes.object,
  age: PropTypes.number,
  selectedSymptoms: PropTypes.object,
  suggestedSymptoms: PropTypes.object,
  commonRisksFromProfile: PropTypes.object,
  selectedRiskFactors: PropTypes.object,
  sex: PropTypes.string,
};