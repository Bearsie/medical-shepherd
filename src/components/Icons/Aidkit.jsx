import React from 'react'
import PropTypes from 'prop-types';

export const Aidkit = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M169.5 103.6c0-7.8 6.4-14.2 14.2-14.2h144.6c7.8 0 14.2 6.4 14.2 14.2V158h38.8v-54.4c0-29.2-23.8-53-53-53H183.7c-29.2 0-53 23.8-53 53V158h38.8v-54.4zM73.8 283.4c-.9 0-1.9 0-2.8-.1v153.1c0 13.8 13.1 25 29.2 25h311.7c16.1 0 29.2-11.2 29.2-25V283.2c-.9.1-1.8.1-2.8.1H73.8v.1zm243.5 115.9H283v34.3h-54v-34.3h-34.3v-54H229V311h54v34.3h34.3v54z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M404.8 201.6h55.7v-7.3c0-12.3-10-22.2-22.2-22.2H73.8c-12.3 0-22.2 10-22.2 22.2v52.8c0 12.3 10 22.3 22.2 22.3h364.5c12.3 0 22.2-10 22.2-22.3v-31.5h-55.7c-3.9 0-7-3.1-7-7s3.1-7 7-7zm-16.9 11.9c-1.3 1.3-3.1 2-4.9 2-1.9 0-3.6-.8-5-2-1.3-1.3-2-3.1-2-5s.8-3.6 2-5c1.3-1.3 3.1-2 5-2s3.6.7 4.9 2c1.3 1.3 2.1 3.1 2.1 5s-.8 3.7-2.1 5z"
        className="prefix__st1"
      />
    </g>
  </svg>
);

Aidkit.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
