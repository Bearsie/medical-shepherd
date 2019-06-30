import React from 'react';
import PropTypes from 'prop-types';
import { BlockTitle, List, ListItem, ListItemCell, Range } from 'framework7-react';

export const RangeSelect = ({ title, value, onChange, range: [min, max], step = 1 }) => (
    <>
      <BlockTitle>
        <b>{`${title}: `}</b>{value}
      </BlockTitle>
      <List simpleList className="no-margin">
        <ListItem>
          <ListItemCell className="flex-shrink-3">
            <Range
              min={min}
              max={max}
              step={step}
              value={value}
              label={true}
              color="color-theme-primary"
              onRangeChanged={onChange}
            />
          </ListItemCell>
        </ListItem>
      </List>
    </>
  );
  
  RangeSelect.propTypes = {
    onChange: PropTypes.func,
    range: PropTypes.array,
    step: PropTypes.number,
    title: PropTypes.string,
    value: PropTypes.number,
  };