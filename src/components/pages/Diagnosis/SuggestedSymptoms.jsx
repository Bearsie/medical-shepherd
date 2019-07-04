import { Dialogs } from '@ionic-native/dialogs';
import { Block, Button, List, ListItem, Page } from 'framework7-react';
import { keyBy, keys, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getSuggestedSymptoms } from '../../../api';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { itemTitleWithNoEllipsis } from '../../../styles';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

export const SuggestedSymptoms = (props) => {
	const [symptoms, setSymptoms] = useState([]);
	const [selectedSymptoms, setSelectedSymptoms] = useState({});

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
			const { data } = await getSuggestedSymptoms(
        keys(props.selected),
        props.age,
        props.sex,
      );
			setSymptoms(data);
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
        {map(symptoms, (symptom) => (
          <ListItem
            className={itemTitleWithNoEllipsis}
            checkbox
            checked={!!selectedSymptoms[symptom.id]}
            key={symptom.id}
            title={symptom.name}
            onChange={
              () => {
                if (selectedSymptoms[symptom.id]) {
                  setSelectedSymptoms(omit(selectedSymptoms, symptom.id));
                  return;
                }

                setSelectedSymptoms({
                  ...selectedSymptoms,
                  [symptom.id]: symptom,
                })
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
            evidence: {
              ...keyBy(selectedSymptoms, 'id'),
              ...props.selected,
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
  selected: PropTypes.object,
  sex: PropTypes.string,
};