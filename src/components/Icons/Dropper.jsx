import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Dropper = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M400.4 195.1L287.9 82.7c-2.8-2.8-7.4-2.8-10.3 0l-26.9 26.9c-2.8 2.8-2.8 7.4 0 10.2l19.8 19.8-35.1 35.1 26 26c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2-5 2s-3.6-.7-5-2l-26-26-23.3 23.3 26 26c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2.1-5 2.1s-3.6-.7-5-2.1l-26-26-23.4 23.4 26 26c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2.1-5 2.1-1.8 0-3.6-.7-5-2.1l-26-26-25.6 25.6c-4.1 4.2-6 10.1-5 15.8l1.9 10.2c1 5.8-.8 11.7-5 15.9l-26 26.5c-10.9 10.9-10.7 28.8.6 39.5 10.9 10.3 28.2 9.6 38.8-1l25.9-25.9c4.1-4.2 10.1-6 15.9-5l10.2 1.8c5.8 1.1 11.7-.8 15.8-4.9l137.1-137.1 19.8 19.8c2.8 2.8 7.4 2.8 10.2 0l26.9-26.9c3-2.8 3-7.4.2-10.3zm-190.8 96.8c-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.4.1-.9.1-1.4.1-1.8 0-3.6-.7-5-2-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-1.8.8-3.7 2-5 1.6-1.6 4-2.4 6.3-1.9.4.1.9.2 1.3.4l1.2.6c.4.3.8.5 1.1.9 1.3 1.3 2.1 3.1 2.1 5s-.7 3.7-2 5zm35.2-36.8c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-1.3 1.3-3.1 2-4.9 2-1.8 0-3.6-.8-5-2-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-1.8.8-3.7 2-5 1.3-1.3 3.1-2 5-2s3.6.8 4.9 2c1.3 1.3 2.1 3.1 2.1 5-.1.4-.1.9-.2 1.4zm33.2-33.3c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.8-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.4.1-.9.1-1.4.1-.5 0-.9 0-1.4-.1-.5-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-1.9.8-3.7 2-5 .3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .5.1.9.2 1.3.4l1.2.6c.4.3.7.5 1.1.9.3.3.6.7.9 1.1s.5.8.6 1.2c.2.4.3.9.4 1.3.1.4.1.9.1 1.4.1.5.1.9 0 1.4z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M443.4 39.6c-21.6-21.6-56.6-21.6-78.2 0-10.6 10.6-16 24.5-16.2 38.5l-23 23 56 55.9 23-23c13.9-.2 27.8-5.5 38.5-16.2 21.5-21.6 21.5-56.6-.1-78.2zm-16.3 26.3c-1.4 1.4-3.2 2-5 2s-3.6-.7-4.9-2c-7.1-7.1-18.6-7.1-25.7 0-2.7 2.7-7.2 2.7-9.9 0s-2.7-7.2 0-9.9c12.5-12.5 33-12.5 45.5 0 2.7 2.7 2.7 7.1 0 9.9zM52.4 458.8c0 19.3 11.2 29.8 25 29.8s25-10.4 25-29.8c0-19.3-25-45-25-45s-25 25.7-25 45z"
        className="prefix__st1"
      />
    </g>
  </svg>
);

Dropper.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
