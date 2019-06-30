import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem} from 'framework7-react';
import { map } from 'lodash';

export const RadioSelect = ({ title, select, options }) => (
    <List className="no-margin">
      <ListItem title={title} smartSelect smartSelectParams={{ openIn: 'sheet' }} >
        <select name={title} {...select}>
          {map(options, (option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </ListItem>
    </List>
  );
  
  RadioSelect.propTypes = {
    options: PropTypes.array,
    select: PropTypes.object,
    title: PropTypes.string,
  };