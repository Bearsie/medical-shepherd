import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Flash = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M308.9 313.9l-3.4-4.6-48.7-66.2V109.5h6.5c5.6 0 10.7-2.3 14.4-6 3.7-3.7 6-8.8 6-14.4 0-11.2-9.1-20.3-20.3-20.3H156.6c-5.6 0-10.7 2.3-14.3 6-3.7 3.7-6 8.8-6 14.4 0 11.2 9.1 20.3 20.3 20.3h6.5v133.6l-48.7 66.2-70.7 96.1c-11.5 15.6-.3 37.7 19 37.7h294.5c3.5 0 6.8-.7 9.7-2 13-5.8 18.8-22.9 9.4-35.7l-67.4-91.5zm-92.1-179c0-3.9 3.1-7 7-7s7 3.1 7 7v97.4c0 3.9-3.1 7-7 7s-7-3.1-7-7v-97.4zm2.1 123.1c1.6-1.6 4-2.4 6.3-1.9.5.1.9.2 1.3.4l1.2.6c.4.3.7.5 1.1.9 1.3 1.3 2 3.1 2 5 0 1.8-.8 3.6-2 4.9-1.3 1.3-3.1 2.1-5 2.1-1.8 0-3.6-.7-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.9.8-3.7 2.1-5zM95.5 402.8l68.8-93.5h91.1l43.7 59.4 25.1 34.1H95.5z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M223.8 349.1h-6.9v-6.9c0-3.9-3.1-7-7-7s-7 3.1-7 7v6.9H196c-3.9 0-7 3.1-7 7s3.1 7 7 7h6.9v6.9c0 3.9 3.1 7 7 7s7-3.1 7-7v-6.9h6.9c3.9 0 7-3.1 7-7s-3.1-7-7-7zM423.2 276.8V175.5h5.2c4.5 0 8.6-1.8 11.5-4.8 2.9-3 4.8-7 4.8-11.5 0-9-7.3-16.3-16.3-16.3h-85.5c-4.5 0-8.6 1.8-11.5 4.8-2.9 2.9-4.8 7-4.8 11.5 0 9 7.3 16.3 16.3 16.3h5.2v101.3c-8.8 4.2-16.8 9.9-23.8 16.7-2.6 2.5-5 5.2-7.2 8l70.4 95.6c6.8 9.2 9 20.8 6.1 31.8-1.4 5.3-3.8 10-7.1 14.1 47.9-.5 86.5-39.4 86.5-87.4 0-34.7-20.3-64.7-49.8-78.8zm9.5 85.9c-3.9 0-7-3.1-7-7 0-15.4-9-29.6-22.9-36.3-3.5-1.7-5-5.8-3.3-9.3 1.7-3.5 5.8-5 9.3-3.3 18.7 8.9 30.8 28.1 30.8 48.9.1 3.9-3 7-6.9 7z"
        className="prefix__st1"
      />
    </g>
  </svg>
);

Flash.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

