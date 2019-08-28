import { Dialogs } from '@ionic-native/dialogs';
import { Block, Button, List, ListItem, Page } from 'framework7-react';
import { keyBy, map, mapValues } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getSuggestedSymptoms } from '../../../api';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { itemTitleWithNoEllipsis } from '../../../styles';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';
import { getEvidence } from './utils';

export const SuggestedSymptoms = (props) => {
	const [suggestedSymptoms, setSuggestedSymptoms] = useState({});

	useEffect(() => {
		RegisterBackButtonAction(props.f7router);
		fetchSymptoms();
  }, []);

	const showErrorMessage = (error) => {
		console.log(error);
		Dialogs.prompt('Connection with server failed. Unable to load symptoms.', 'Error');
	};

	const fetchSymptoms = async () => {
    const evidence = getEvidence(props.selectedSymptoms);

		try {
      const { data } = await getSuggestedSymptoms(evidence, props.age, props.sex);
			setSuggestedSymptoms(keyBy(data, 'id'));
		} catch(error) {
			showErrorMessage(error);
		}
  };
  
	return (
    <Page>
      <Topbar title="Diagnosis" />
      <UnderlinedHeader title="Symptoms suggestions" />
      <Block noHairlines className="no-margin-top no-margin-bottom">
        <div className="text-align-justify">
          Based on symptoms similarity we have selected following symtoms, that might also apply to you.
        </div>
        <div className="margin-top text-align-justify">
          Do you have any of these symptoms?
        </div>
      </Block>
      <List>
        {map(suggestedSymptoms, (symptom) => (
          <ListItem
            className={itemTitleWithNoEllipsis}
            checkbox
            checked={!!symptom.selected}
            key={symptom.id}
            title={symptom.common_name}
            onChange={
              () => {
                setSuggestedSymptoms({
                  ...suggestedSymptoms,
                  [symptom.id]: { ...symptom, selected: !symptom.selected },
                });
              }
            }
          />
        ))}
      </List>
      <Block>
        <Button
          fill
          href={routePath.Interview}
          routeProps={{
            age: props.age,
            sex: props.sex,
            selectedSymptoms: {
              ...mapValues(suggestedSymptoms, ({ selected, ...symptom }) => ({
                ...symptom,
                choice_id: selected ? 'present' : 'absent',
              })),
              ...props.selectedSymptoms,
            },
          }}
        >
          Continue
        </Button>
      </Block>
    </Page>
  );
}

SuggestedSymptoms.propTypes = {
  f7router: PropTypes.object,
  age: PropTypes.number,
  selectedSymptoms: PropTypes.object,
  sex: PropTypes.string,
};