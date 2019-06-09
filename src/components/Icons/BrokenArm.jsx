import React from 'react';
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/
export const BrokenArm = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512}  viewBox="0 0 512 512" {...props} >
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill={colorPrimary}
        d="M371.2 249.4c-4.7-5.1-10-9.6-15.7-13.5l-58 130.8-31.9 71.9h21c0-1.9.4-3.9 1.2-5.7l79.3-178.2c.9-2.1 2.4-3.9 4.1-5.3z"
        className="prefix__st1"
      />
      <circle
        fill={colorPrimary}
        r={74.7}
        cy={106.7}
        cx={247.2}
        className="prefix__st1"
      />
      <path
        fill={colorSecondary}
        d="M261.1 352.8h27.3l54.3-122.5.6-1.2c-11.4-5.3-24.2-8.3-37.7-8.3h-99.3c-49.3 0-89.3 40-89.3 89.3v134.1c0 9.9 4 18.9 10.5 25.4s15.5 10.5 25.4 10.5c11.8 0 22.3-5.7 28.9-14.6v-145c0-5.3 3.1-9.5 7-9.5s7 4.3 7 9.5v118.1h30.7c-9.4-9.1-15.3-21.8-15.3-35.9-.1-27.6 22.3-49.9 49.9-49.9z"
        className="prefix__st0"
      />
      <path
        fill={colorPrimary}
        className="prefix__st1"
        d="M335 438.6h59.9V332.5l-19.3 34.3zM379.9 260.4l-47.3 106.3-32 71.9H321c0-2.4.6-4.7 1.8-6.9l59.9-106.1c2.5-4.5 7.2-7.1 12.2-7.1V310c0-18.3-5.5-35.4-15-49.6z"
      />
      <path
        fill={colorSecondary}
        d="M261.1 366.8c-19.9 0-35.9 16.1-35.9 35.9 0 16.6 11.2 30.5 26.5 34.7.1-1.5.5-3 1.1-4.4l29.4-66.2h-21.1z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

BrokenArm.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
