import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const BrokenLeg = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M68.9 408.9v22.6c0 11.2 9.1 20.4 20.4 20.4h43.4v-80.2l-50.3 18.1c-8.1 2.9-13.5 10.5-13.5 19.1z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M230.4 306.7h-33.9l38.8 167.9c.1.5.2 1.1.2 1.6h117.7L231.8 310.4c-.9-1.1-1.3-2.4-1.4-3.7zM256.6 249.1v32.6c1 .1 2 .4 2.9 1l183.6 112.9v-99.8c-.6 0-1.1-.1-1.7-.2l-184.8-46.5zM423.4 153.7h-93.8l113.5 76.6v-56.9c0-10.9-8.8-19.7-19.7-19.7zM439.2 244.5l-126-85c-2-1.4-3.1-3.6-3.1-5.8h-33.9c-10.9 0-19.6 8.8-19.6 19.6v61.6c.6 0 1.1.1 1.7.2l184.8 46.5v-35.9c-1.4 0-2.7-.4-3.9-1.2zM253.1 295.2c-2.2 3.6-5.2 6.5-8.9 8.6l123.3 168.4c.9 1.2 1.3 2.7 1.3 4.1h5.6c36.8 0 66.9-29 68.5-65.4-1.2 0-2.5-.3-3.6-1L253.1 295.2zM182.4 306.7h-16c-10.9 0-19.6 8.8-19.6 19.6v130.2c0 10.9 8.8 19.6 19.6 19.6h24.1l-11.6-47.9c-.9-3.8 1.4-7.5 5.2-8.5 3.8-.9 7.5 1.4 8.5 5.2l12 49.6c.1.6.2 1.1.2 1.6h16.6l-38.8-167.9c-.2-.4-.2-.9-.2-1.5zm1.5 96.8c.4.3.7.5 1.1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.5.1.9.1 1.4 0 .5 0 .9-.1 1.4-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.8-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.5.1-.9.1-1.4.1s-.9 0-1.4-.1c-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.5-1.1-.9s-.6-.7-.9-1.1c-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-.5 0-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.7.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4.5.2.9.4 1.3.7z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        className="prefix__st0"
        d="M329.6 139.7h88V35.8H297.4v103.9h12.7z"
      />
    </g>
  </svg>
);

BrokenLeg.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
