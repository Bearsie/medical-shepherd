import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Microscop = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M286.3 108.3v43.1c51 6.8 90.4 50.6 90.4 103.5s-39.4 96.6-90.4 103.4v43.1c74.8-7.1 133.2-70 133.2-146.6 0-76.5-58.5-139.4-133.2-146.5zM258.2 65.9V29.3h-32.1v18.6h-32v18h32z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M272.3 79.9H180v126.2h92.3V79.9zm-46.2 68.3c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3 20.3 9.1 20.3 20.3-9.1 20.3-20.3 20.3z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        className="prefix__st0"
        d="M237.9 258.4v-23.7h22.6v-14.6h-68.8v14.6h22.7v23.7zM272.3 402.1v-58.8H168.2v-24.6h-39.5v83.4h39.5z"
      />
      <path
        fill="#16ade1"
        d="M114.7 402.1H92.5v27.6h64.1c3.9 0 7 3.1 7 7s-3.1 7-7 7H92.5v38.9H371v-66.5l-256.3-.1v-13.9zm198.6 22.2c10.4 0 18.8 8.4 18.8 18.8s-8.4 18.8-18.8 18.8-18.9-8.4-18.9-18.8 8.5-18.8 18.9-18.8zm-141.2 11.1c.1-.5.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1 1.6-1.6 4.1-2.4 6.3-1.9.4.1.9.2 1.3.4l1.2.6c.4.3.7.6 1.1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.4.1.9.1 1.4 0 .5 0 .9-.1 1.4-.1.5-.2.9-.4 1.3l-.6 1.2c-.2.4-.6.7-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.5.1-.9.1-1.4.1-.4 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.5-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3s-.1-.9-.1-1.4c.1-.5.1-1 .2-1.4z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        className="prefix__st0"
        d="M144.7 96.2H166v93.7h-21.3z"
      />
    </g>
  </svg>
);

Microscop.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
