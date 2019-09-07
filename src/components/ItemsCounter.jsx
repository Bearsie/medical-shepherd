import { mergeStyles } from '@uifabric/merge-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { colorPrimary } from '../styles';

export const ItemsCounter = ({ current, max }) => (
  <div
    className={mergeStyles([
      'display-flex',
      'justify-content-center',
      { zIndex: 100, position: 'sticky', bottom: '10px' }
    ])}
  >
    <div
      className={mergeStyles([
        'text-align-center',
        'padding-vertical-half',
        { width: '150px', background: colorPrimary, borderRadius: '10px', opacity: 0.9, color: 'white' },
      ])}
    >
      {current} of {max}
    </div>
  </div>
);

ItemsCounter.propTypes = {
  current: PropTypes.number,
  max: PropTypes.number,
};