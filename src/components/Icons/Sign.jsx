import React from 'react'
import PropTypes from 'prop-types';

export const Sign = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#16ade1"
        d="M44.5 288h127c3.9 0 7 3.1 7 7s-3.1 7-7 7h-53.4l53.4 102.6L232.2 288h66.3V34h-254v254zm154 11.9c-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.7-.4.2-.9.3-1.3.4-.5.1-.9.1-1.4.1-1.8 0-3.7-.8-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.8.8-3.6 2-4.9 1.6-1.6 4-2.4 6.3-1.9.4.1.9.2 1.3.4l1.2.6c.4.3.8.5 1.1.9 1.3 1.3 2 3.1 2 4.9.1 1.8-.6 3.6-1.9 4.9zm-95.6-207H146v46.4h51V92.9h43.1v136H197v-46.4h-50.9v46.4H103v-136h-.1z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        className="prefix__st0"
        d="M467.5 33.9v444.2h-49.1V253.2H380v-23.5h-67.5v-37.8H380v-59.1h-67.5V95H380V71.5h38.4V33.9z"
      />
    </g>
  </svg>
);

Sign.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
