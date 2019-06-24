import { ListItem } from 'framework7-react';
import { omit } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { itemTitleWithNoEllipsis } from '../../../../styles';

export const SingleGroupQuestion = ({ symptom, selectedSymptoms, setSelectedSymptoms }) => (
  <ListItem
    className={itemTitleWithNoEllipsis}
    radio
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
          [symptom.id]: { id: symptom.id, choice_id: 'present' },
        });
      }
    }
  />
);

SingleGroupQuestion.propTypes = {
  symptom: PropTypes.object,
  selectedSymptoms: PropTypes.object,
  setSelectedSymptoms: PropTypes.func,
};