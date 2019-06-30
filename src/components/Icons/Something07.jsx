import React from 'react'
import PropTypes from 'prop-types';

export const Something07 = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#16ade1"
        d="M385 472.5H277.5c-8 0-14.5-6.5-14.5-14.5v-45.5h24.5v-24h-63v24H249V458c0 15.7 12.8 28.5 28.5 28.5H385c3.9 0 7-3.1 7-7s-3.1-7-7-7z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M346.3 359.5v-21.6c0-6.6 4.2-12.4 10.5-14.3 16.8-5.4 28.3-21 28.3-38.6V88.1c0-30.7-24.9-55.6-55.6-55.6H182.6c-30.7 0-55.6 24.9-55.6 55.6v196.8c0 17.7 11.4 33.3 28.3 38.6 6.2 2 10.5 7.8 10.5 14.3v21.6c0 8.3 6.7 15 15 15h150.4c8.3.1 15.1-6.6 15.1-14.9zm-5-208.2c.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.5 4.7.3 6.3 1.9 1.3 1.3 2.1 3.1 2.1 4.9 0 .5 0 .9-.1 1.4-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-1.3 1.3-3.1 2-4.9 2-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.2-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4-.1-1.8.6-3.6 1.9-4.9zm-1.9 46.8c.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.6-.7.9-1.1.3-.3.7-.6 1.1-.9s.8-.5 1.2-.6c.4-.2.9-.3 1.3-.4 2.3-.4 4.7.3 6.3 1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.5.1.9.1 1.4 0 .5 0 .9-.1 1.4-.1.5-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.8-.9 1.1-1.3 1.3-3.1 2-4.9 2-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.4-.1-.9-.1-1.4 0-.5 0-.9.1-1.4zm0 43.3c.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.6-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.5 4.7.3 6.3 1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.5.1.9.1 1.4 0 1.8-.8 3.6-2.1 4.9-1.3 1.3-3.1 2.1-4.9 2.1-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.5-1.1-.9-1.3-1.3-2-3.1-2-4.9.1-.6.1-1.1.2-1.5zm-173.6-1.1c-.8-15.9 4.7-31.6 12.8-45.3 8.5-14.3 20.9-25.3 30.3-38.8 9.4 13.5 21.8 24.5 30.3 38.8 8.1 13.7 13.6 29.4 12.8 45.3-.8 15.9-8.6 31.9-22.2 40.1-6.3 3.8-13.6 5.7-20.9 5.7-7.3 0-14.6-1.9-20.9-5.7-13.6-8.2-21.4-24.2-22.2-40.1zm140.4 99.4H205.8c-3.9 0-7-3.1-7-7s3.1-7 7-7h100.3c3.9 0 7 3.1 7 7s-3.1 7-6.9 7zm15.4-46.7h-39c-3.9 0-7-3.1-7-7s3.1-7 7-7h39c3.9 0 7 3.1 7 7s-3.1 7-7 7zm0-43.2h-39c-3.9 0-7-3.1-7-7s3.1-7 7-7h39c3.9 0 7 3.1 7 7s-3.1 7-7 7zm0-43.3h-39c-3.9 0-7-3.1-7-7s3.1-7 7-7h39c3.9 0 7 3.1 7 7s-3.1 7-7 7zm0-43.3h-39c-3.9 0-7-3.1-7-7s3.1-7 7-7h39c3.9 0 7 3.1 7 7s-3.1 7-7 7zm-.8-55H191.2c-7.2 0-13-5.8-13-13V82.8c0-7.2 5.8-13 13-13h129.7c7.2 0 13 5.8 13 13v12.3c-.1 7.2-5.9 13.1-13.1 13.1z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Something07.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
