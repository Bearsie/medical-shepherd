import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/


export const Pills1 = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#16ade1"
        d="M289.7 258.1h-45.8v43.4c0 3.9-3.1 7-7 7s-7-3.1-7-7v-43.4H74.1v97.6c0 32.7 14.5 61.9 37.5 81.7 18.9 16.3 43.5 26.1 70.3 26.1 28.9 0 55.1-11.4 74.5-29.9 20.5-19.6 33.3-47.3 33.3-78v-97.5zM241.9 351c-1.3 1.3-3.1 2-5 2-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4s-.8-.4-1.2-.7c-.4-.3-.7-.5-1.1-.9-1.3-1.3-2-3.1-2-5 0-1.8.8-3.6 2-4.9.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.5 4.7.3 6.3 1.9 1.3 1.3 2 3.1 2 4.9.1 2-.6 3.8-1.9 5.1z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M330.6 248.9c-9.3 0-18.3 1.2-26.9 3.4v103.4c0 33.1-13 63.9-36.6 87 17.8 13.1 39.7 20.8 63.5 20.8 27.1 0 51.9-10.1 70.8-26.7-.2-.1-.4-.3-.5-.5l-70.5-70.5c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l70.5 70.5.5.5c16.6-18.9 26.7-43.7 26.7-70.8-.1-59.2-48.1-107.2-107.4-107.2zm-8.2 99.1c-1.3 1.3-3.1 2.1-5 2.1-.5 0-.9-.1-1.4-.1-.5-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.5-1.1-.9-1.3-1.3-2-3.1-2-4.9 0-.5 0-.9.1-1.4.1-.5.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1 1.6-1.6 4.1-2.4 6.3-1.9.5.1.9.2 1.3.4s.8.4 1.2.7.7.5 1.1.9c.3.3.6.7.9 1.1.3.4.5.8.7 1.2.2.4.3.9.4 1.3.1.4.1.9.1 1.4 0 1.5-.7 3.4-2 4.7zM289.7 156.3c0-29.8-12.1-56.7-31.6-76.2s-46.5-31.6-76.2-31.6c-20.1 0-38.9 5.5-55 15.1-31.6 18.8-52.8 53.3-52.8 92.8v87.9h215.6v-88zm-140.3-54.9c-19.3 11.5-31.3 32.5-31.3 54.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-27.3 14.6-53 38.1-67 3.3-2 7.6-.9 9.6 2.5 2 3.3.9 7.6-2.4 9.6z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Pills1.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
