import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, List, Page } from 'framework7-react';
import { get, isEmpty, keyBy, map, values } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getDiagnosis } from '../../../../api';
import { routePath } from '../../../../routes';
import RegisterBackButtonAction from '../../../../services/RegisterBackButtonAction';
import { InterviewCard } from '../../../Icons';
import { Topbar } from '../../../Topbar';
import { UnderlinedHeader } from '../../../UnderlinedHeader';
import { MultipleGroupQuestion } from './MultipleGroupQuestion';
import { SingleGroupQuestion } from './SingleGroupQuestion';
import { SingleQuestion } from './SingleQuestion';

export const Interview = (props) => {
	const [interview, setInterview] = useState({});
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [step, setStep] = useState(0);
  const [evidence, setEvidence] = useState(props.evidence);
  const [shouldStopInterview, setShouldStopInterview] = useState(false);

	useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  useEffect(() => {
    fetchDiagnosis();
    if (step === 1) {
      setShouldStopInterview(true);
    }
  }, [step]);

  useEffect(() => {
		if (shouldStopInterview) {
      props.f7router.navigate(routePath.DiagnosisResults, { props: {
        evidence,
        age: props.age,
        conditions: interview.conditions,
        sex: props.sex,
      }});
    }
  }, [shouldStopInterview]);

	const showErrorMessage = (error) => {
		console.log(error);
		Dialogs.prompt('Connection with server failed. Unable to load symptoms.', 'Error');
	};

	const fetchDiagnosis = async () => {
		try {
			const { data } = await getDiagnosis(
        values(evidence),
        props.age,
        props.sex,
      );
      setInterview(data);
      setShouldStopInterview(data.question.should_stop);
		} catch(error) {
			showErrorMessage(error);
		}
	};
  
  const questionType = get(interview, 'question.type');

	return (
    <Page>
      <Topbar title="Diagnosis" />
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
          <ul>
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
              setStep(step + 1);
              setSelectedSymptoms({});
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
  evidence: PropTypes.object,
  sex: PropTypes.string,
};