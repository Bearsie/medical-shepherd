import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Scalpel = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#16ade1"
        d="M184 396.3l-54.9-54.9L23.5 447l9.2 9.2c25.3 25.3 66.2 25.3 91.5 0l59.8-59.9zm-68.1 42.1c-10 10-23.3 15.5-37.5 15.5-3.9 0-7-3.1-7-7s3.1-7 7-7c10.4 0 20.2-4.1 27.6-11.4 2.7-2.7 7.2-2.7 9.9 0s2.7 7.1 0 9.9z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M484.1 99.6l-58.4-58.4c-6-6-15.8-5.9-21.6.3l-247.4 263c-5.6 5.9-5.4 15.2.3 21l42.7 42.7c5.8 5.8 15.1 5.9 21 .3l263-247.4c6.3-5.6 6.4-15.4.4-21.5zM210.8 333.5l-18.9-18.9 76.3-81.1 23.7 23.7-81.1 76.3zm144.8-127.7c-1.4 1.4-3.2 2.1-5 2.1s-3.6-.7-5-2.1l-26.1-26.1c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l26.1 26.1c2.8 2.7 2.8 7.2.1 9.9zM387 178c-1.4 1.4-3.2 2.1-5 2.1s-3.6-.7-5-2.1l-29.7-29.7c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l29.7 29.7c2.8 2.7 2.8 7.2.1 9.9zm31.3-27.8c-1.4 1.4-3.2 2.1-5 2.1s-3.6-.7-5-2.1L375.2 117c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l33.2 33.2c2.8 2.7 2.8 7.1 0 9.9zm31.4-27.9c-1.4 1.4-3.2 2.1-5 2.1s-3.6-.7-5-2.1L403 85.6c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l36.7 36.7c2.8 2.8 2.8 7.2.1 9.9zM241.9 460.6H139.5l-5.5 5.5c-3.2 3.2-6.5 6-10.1 8.5h117.9c3.9 0 7-3.1 7-7 .1-3.8-3-7-6.9-7zM272.5 461.8c-.4-.3-.8-.5-1.2-.6-.4-.2-.9-.3-1.3-.4-.9-.2-1.8-.2-2.7 0-.5.1-.9.2-1.3.4l-1.2.6c-.4.3-.7.5-1.1.9-1.3 1.3-2 3.1-2 4.9 0 1.8.7 3.6 2 5 .3.3.7.6 1.1.9.4.3.8.5 1.2.6.4.2.9.3 1.3.4.5.1.9.1 1.4.1.5 0 .9 0 1.4-.1.4-.1.9-.2 1.3-.4l1.2-.6c.4-.3.7-.6 1.1-.9 1.3-1.3 2-3.1 2-5 0-1.8-.8-3.6-2-4.9-.5-.3-.8-.6-1.2-.9z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Scalpel.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
