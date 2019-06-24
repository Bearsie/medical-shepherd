import { ListItem } from 'framework7-react';
import { get, map } from 'lodash';
import React from 'react';
import { itemTitleWithNoEllipsis } from '../../../../styles';

export const SingleQuestion = ({ symptom, selectedSymptoms, setSelectedSymptoms }) =>
  map(get(symptom, 'choices'), (choice) => (
    <ListItem
      className={itemTitleWithNoEllipsis}
      radio
      checked={get(selectedSymptoms[symptom.id], 'choice_id') === choice.id }
      key={choice.id}
      title={choice.label}
      onChange={
        () => {
          setSelectedSymptoms({
            [symptom.id]: { id: symptom.id, choice_id: choice.id },
          });
        }
      }
    />
  ));
  