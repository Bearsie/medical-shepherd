import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Plus = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M253.5 30c-92.3 1.3-167.3 77-167.8 169.3-.3 47.7 19 90.9 50.4 121.9 37.9 37.6 71 79.7 98.6 125.4l17.2 28.4h-77.3c-3.9 0-7 3.1-7 7s3.1 7 7 7h163c3.9 0 7-3.1 7-7s-3.1-7-7-7h-77.3l17.2-28.4c27.4-45.3 59.7-87.4 97.6-124.4 31.7-30.9 51.4-74.1 51.4-121.9-.2-94.9-77.8-171.7-173-170.3zm2.5 300.4c-71.8 0-130.1-58.3-130.1-130.1s58.3-130 130.1-130 130.1 58.2 130.1 130.1-58.3 130-130.1 130zM369.5 479.3l-.6-1.2c-.3-.4-.6-.7-.9-1.1s-.7-.6-1.1-.9c-.4-.3-.8-.5-1.2-.6-.4-.2-.9-.3-1.3-.4-.9-.2-1.8-.2-2.7 0-.4.1-.9.2-1.3.4l-1.2.6c-.4.2-.7.5-1.1.9s-.6.7-.9 1.1c-.3.4-.5.8-.6 1.2-.2.4-.3.9-.4 1.3-.1.5-.1.9-.1 1.4s.1.9.1 1.4c.1.4.2.9.4 1.3l.6 1.2c.2.4.6.7.9 1.1 1.3 1.3 3.1 2 4.9 2 1.8 0 3.6-.8 5-2 .3-.3.6-.7.9-1.1.3-.4.5-.8.6-1.2.2-.4.3-.9.4-1.3.1-.5.1-.9.1-1.4s0-.9-.1-1.4c-.1-.4-.2-.9-.4-1.3z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        className="prefix__st1"
        d="M290.1 120.9h-68.2v45.3h-45.3v68.3h45.3v45.2h68.2v-45.2h45.3v-68.3h-45.3z"
      />
    </g>
  </svg>
);

Plus.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
