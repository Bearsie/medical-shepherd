import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Stomach = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M429.1 78c-31.6-23.4-73.3-3.9-102.8 13-5 2.9-21.2 16.6-21 2.8.1-17.6.5-35.2.5-52.8h-33.3v61.5c0 3.9-3.1 7-7 7s-7-3.1-7-7V41.1H234v110.2c0 51.3-34.8 96.2-84.5 108.9l-47.7 12.2c-29.7 7.6-50.4 34.4-50.4 65V460h58.5v-44.4c0-16.6 18.6-16.6 29.5-10.4 16.1 9.2 27.3 24.1 42.2 34.9 56.6 40.9 150.1 42.2 204.4-3.5 38.2-32.1 55.7-85.1 65.1-132.5 7.5-38.2 9.5-77.3 9.4-116.3 0-35.4.2-86.4-31.4-109.8zm-168.6 46.9c.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .5.1.9.2 1.3.4l1.2.6c.4.3.7.5 1.1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.4.1.9.1 1.4 0 1.8-.8 3.6-2 4.9-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.5.1-.9.1-1.4.1-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-1.3-1.3-2.1-3.1-2.1-4.9.2-1.9.9-3.7 2.2-5zM365 411.5c-20.1 16.9-49.8 26.6-81.7 26.6-30.8 0-60.8-8.9-82.4-24.5-3.1-2.3-3.8-6.6-1.6-9.8 2.3-3.1 6.6-3.8 9.8-1.6 19.2 13.9 46.3 21.9 74.2 21.9 28.6 0 55.1-8.5 72.7-23.3a7 7 0 0 1 9.9.9c2.4 2.9 2 7.3-.9 9.8z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Stomach.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
