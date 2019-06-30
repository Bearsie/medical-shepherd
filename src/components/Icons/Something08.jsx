import React from 'react'
import PropTypes from 'prop-types';

export const Something08 = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M131.4 428.4V93.8H87.3v304.1c0 32 26 58 58 58h.2v-14H149.4c.2 0 .4 0 .6-.1h.4c.4 0 .9-.1 1.3-.2s.9-.1 1.4-.2c9.2-1.7 17.5-6.2 23.8-12.8h-45.5v-.2zM368.9 93.8h24.8v61.7h-24.8z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M187.4 410.4c1.2-4 1.8-8.3 1.8-12.5V155.5h165.7v-24h-67.7c-3.9 0-7-3.1-7-7s3.1-7 7-7h67.7V56.1H145.4v358.3H186c.6-1.3 1-2.6 1.4-4zM247 119.5c.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4l1.2.6c.4.3.7.5 1.1.9 1.3 1.3 2 3.1 2 5 0 .5 0 .9-.1 1.4s-.2.9-.4 1.3l-.6 1.2c-.3.4-.6.7-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.4.1-.9.1-1.4.1-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.3-.9-.4-1.3s-.1-.9-.1-1.4c.1-1.9.9-3.7 2.2-5z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M203.3 169.5v228.4c0 5.7-.8 11.3-2.4 16.5-4.5 15.1-14.9 27.6-28.6 34.8v6.7h194.5c32 0 58-26 58-58V169.5H203.3zm172 170.2H341V374h-54v-34.3h-34.3v-54H287v-34.3h54v34.3h34.3v54z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Something08.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
