import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const SmallPills = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M485.3 168.6L355.9 39.2c-8.8-8.8-23-8.8-31.8 0L44.7 318.5c-8.8 8.8-8.8 23 0 31.8l129.4 129.4c8.8 8.8 23 8.8 31.8 0L341 344.6c-.1-.1-.3-.2-.4-.4L325.5 329c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l15.2 15.2.4.4 134.3-134.3c8.7-8.8 8.7-23.1 0-31.8zM154.6 347l-20-20c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20 20c-11.8 7.3-27.4 5.8-37.6-4.4-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.2 10.2 11.7 25.8 4.4 37.6zm64.8 64.8l-20-20c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20 20c-11.8 7.3-27.4 5.8-37.6-4.4-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.2 10.2 11.7 25.9 4.4 37.6zm4.5-134.1l-20-20c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20 20c-11.8 7.3-27.4 5.8-37.6-4.4-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.2 10.2 11.7 25.8 4.4 37.6zM289 342l-20.3-20.3c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20.5 20.5c-11.8 7.6-27.7 6.3-38.1-4.1-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.1 10.1 11.6 25.4 4.7 37.1zm4.5-134.1l-20.3-20.3c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20.5 20.5c-11.8 7.6-27.7 6.3-38.1-4.1-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.1 10.1 11.6 25.4 4.7 37.1zm30.7 105.2c-.1.5-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-1.3 1.3-3.1 2-4.9 2-.5 0-.9 0-1.4-.1-.5-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.5-1.1-.9-1.3-1.3-2.1-3.1-2.1-5 0-1.8.8-3.7 2.1-4.9.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.7.4-.2.9-.3 1.3-.4 2.3-.4 4.7.3 6.3 1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.4.1.9.1 1.4 0 .5 0 1-.1 1.4zm34.1-40.3L338 252.4c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20.5 20.5c-11.8 7.6-27.7 6.3-38.1-4.1-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.1 10.1 11.6 25.4 4.7 37.2zm4.5-134.2l-20.3-20.3c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20.5 20.5c-11.8 7.6-27.7 6.3-38.1-4.1-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.1 10.1 11.6 25.4 4.7 37.1zm64.8 64.8l-20.4-20.3c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l20.5 20.5c-11.8 7.6-27.7 6.3-38.1-4.1-11.9-11.9-11.9-31.2 0-43.1 11.9-11.9 31.2-11.9 43.1 0 10.2 10.1 11.7 25.5 4.8 37.1z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

SmallPills.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};