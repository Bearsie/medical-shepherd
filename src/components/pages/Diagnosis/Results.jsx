import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Gauge, List, ListItem, Page, PageContent } from 'framework7-react';
import { filter, get, includes, isEmpty, keyBy, map, mapValues, round } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { routePath } from '../../../routes';
import RegisterBackButtonActionWithConfirmation from '../../../services/RegisterBackButtonActionWithConfirmation';
import { colorPrimary, itemTitleWithNoEllipsis } from '../../../styles';
import { COLLECTIONS, FirebaseContext } from '../../Firebase';
import { Skull } from '../../Icons';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

export const Results = (props) => {
  const firebase = useContext(FirebaseContext);
  const [conditions, setConditions] = useState(props.conditions);
  const [allDiagnosis, setAllDiagnosis] = useState([]);

	useEffect(() => {
    RegisterBackButtonActionWithConfirmation(
      props.f7router,
      routePath.Home,
      'Do you want to quit diagnosis?',
    );
    fetchConditions();
    getAllDiagnosis();
  }, []);

  const getAllDiagnosis = async () => {
    const diagnosisData = await firebase.getUserData(COLLECTIONS.Diagnosis, firebase.authUserId);

    if (diagnosisData) setAllDiagnosis(diagnosisData.diagnosis);
  };

  const fetchSymptomsAndConditions = async () => {
    const { symptoms, risks } = await firebase.getApiData();

    return keyBy([...symptoms, ...risks], 'id');
  };

  const fetchConditions = async () => {
		try {
      const { conditions } = await firebase.getApiData();
      const diagnosedConditionsIds = map(props.conditions, 'id');
      const diagnosedConditionsDetails = keyBy(filter(
        conditions,
        (conditionDetalis) => includes(diagnosedConditionsIds, conditionDetalis.id),
      ), 'id');
      const diagnosedConditionsWithDetails = map(
        props.conditions,
        (condition) => ({ ...condition, ...diagnosedConditionsDetails[condition.id] }),
      );
      setConditions(diagnosedConditionsWithDetails);
		} catch(error) {
			showErrorMessage(error);
		}
  };

	const showErrorMessage = (error) => {
		console.log(error);
		Dialogs.prompt('Connection with server failed. Unable to load results.', 'Error');
  };

  const useToFillAnyMissingNames = (symptoms) => mapValues(props.evidence, (symptom) => 'common_name' in symptom ?
    symptom : ({ ...symptom, common_name: symptoms[symptom.id].common_name })
  );

  const saveDiagnosis = async () => {
    try {
      const symptoms = await fetchSymptomsAndConditions();

      const newDiagnosis = {
        conditions,
        date: Date.now(),
        symptoms: useToFillAnyMissingNames(symptoms),
      };

      await firebase.setUserData(
        COLLECTIONS.Diagnosis,
        firebase.authUserId,
        { diagnosis: [...allDiagnosis, newDiagnosis] },
      );

      props.f7router.app.dialog.alert('Diagnosis saved!');
      props.f7router.navigate(routePath.Home);
    } catch (error) {
      onError(error);
    }
  };

  const onError = (error) => {
    props.f7router.app.dialog.alert('An error occured: ', error.message);
  };
  
  const [bestMatchCondition, ...otherConditions] = conditions;

	return (
    <Page>
      <Topbar
        title="Diagnosis"
        linkProps={{
          href: routePath.Interview,
          routeProps: {
            age: props.age,
            sex: props.sex,
            selectedSymptoms: props.selectedSymptoms,
            suggestedSymptoms: props.suggestedSymptoms,
            commonRisksFromProfile: props.commonRisksFromProfile,
            selectedRiskFactors: props.selectedRiskFactors,
          },
        }}
      />
      <UnderlinedHeader title="Results" />
      {bestMatchCondition &&
        <PageContent className="no-padding-top">
          <List className="no-margin-top">
            <ListItem
              className={itemTitleWithNoEllipsis}
              title="Best match diagnosis"
              groupTitle
            />
            <ListItem
              className={itemTitleWithNoEllipsis}
              title={bestMatchCondition.common_name}
            >
              <Gauge
                slot="after"
                type="circle"
                value={round(bestMatchCondition.probability, 2)}
                size={35}
                borderColor={colorPrimary}
                borderWidth={3}
                valueText={`${round(bestMatchCondition.probability * 100)}%`}
                valueFontSize={12}
              />
            </ListItem>
            <ListItem
              className={itemTitleWithNoEllipsis}
              header="Hint:"
              title={get(bestMatchCondition, 'extras.hint')}
            />
          </List>
          <Block>
            <Button
              fill
              onClick={() => saveDiagnosis()}
            >
              Save and quit diagnosis
            </Button>
          </Block>
          {!isEmpty(otherConditions) &&
            <List className="no-margin-top">
              <ListItem
                className={itemTitleWithNoEllipsis}
                title="Other diagnosis"
                groupTitle
              />
              {map(otherConditions, (condition) => (
                <ListItem
                  className={itemTitleWithNoEllipsis}
                  key={condition.id}
                  title={condition.common_name}
                >
                  <Gauge
                    slot="after"
                    type="circle"
                    value={round(condition.probability, 2)}
                    size={35}
                    borderColor={colorPrimary}
                    borderWidth={3}
                    valueText={`${round(condition.probability * 100)}%`}
                    valueFontSize={12}
                  />
                </ListItem>
              ))}
            </List>
          }
        </PageContent>
      }
      {!bestMatchCondition &&
        <PageContent className="no-padding-top padding-left padding-right text-align-center">
          <Skull className={mergeStyles({ width: '100px', height: '100px' })} />
          <BlockTitle className={mergeStyles([
            { fontSize: '18px', wordBreak: 'break-word', whiteSpace: 'pre-wrap', lineHeight: '1.5' },
            'no-margin-top',
            'text-align-justify',
            ])}
          >
            Sorry, we were not able to find the right diagnosis.
          </BlockTitle>
          <Button
            fill
            href={routePath.Home}
          >
            Quit diagnosis
          </Button>
        </PageContent>
      }
    </Page>
  )
}

Results.propTypes = {
  f7router: PropTypes.object,
  age: PropTypes.number,
  conditions: PropTypes.array,
  evidence: PropTypes.object,
  sex: PropTypes.string,
  selectedSymptoms: PropTypes.object,
  suggestedSymptoms: PropTypes.object,
  commonRisksFromProfile: PropTypes.object,
  selectedRiskFactors: PropTypes.object,
};