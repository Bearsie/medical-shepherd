import React from 'react'
import PropTypes from 'prop-types';

export const Brokenbone = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M225.3 197.6l-24.2 35.8c-1.4 2-3.6 3.1-5.8 3.1-1.4 0-2.7-.4-3.9-1.2-3.2-2.2-4-6.5-1.9-9.7l28.5-42.2c1.1-1.7 2.9-2.7 4.8-3l-.3-2-18.1 10.2 1.8-19.6-19.6 8.4-25 40.6L88 337.3c-2.3-2.8-5.1-5.3-8.2-7.4-17.5-11.6-41.1-6.8-52.7 10.7-11.6 17.5-6.8 41.1 10.7 52.7 12.7 8.4 28.6 8.2 40.8.7l5.6 3.7c-2.1 14.1 3.9 28.9 16.6 37.3 17.5 11.6 41.1 6.8 52.7-10.7 11.6-17.5 6.8-41.1-10.7-52.7-3.3-2.2-6.8-3.8-10.5-4.8L220.2 243l28-39.4-21.2 5.5-1.7-11.5zm-36.9 50.9c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.6.7-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.4.1-.9.1-1.4.1s-.9 0-1.4-.1c-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1s-.5-.8-.6-1.2c-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-.5.1-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.2-.4.6-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.7.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4s.8.4 1.2.7c.4.3.7.5 1.1.9s.6.7.9 1.1c.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.4.1.9.1 1.4.1.5.1.9 0 1.4z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M484.9 340.7c-11.6-17.5-35.2-22.3-52.7-10.7-3.2 2.1-5.9 4.6-8.2 7.4L350.5 218l-25-40.6-19.6-8.4 1.8 19.6-18.1-10.2-4.5 30.7-21.2-5.4 28 39.4 87.9 123.8c-3.6 1-7.1 2.7-10.5 4.8-17.5 11.6-22.3 35.2-10.7 52.7s35.2 22.3 52.7 10.7c12.7-8.4 18.7-23.2 16.6-37.3l5.6-3.7c12.2 7.5 28.1 7.7 40.8-.7 17.4-11.6 22.2-35.2 10.6-52.7z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M163.6 117.7c1.3 2.3 3.7 3.6 6.1 3.6 1.2 0 2.4-.3 3.4-.9 3.4-1.9 4.5-6.2 2.6-9.5l-23-40.7c-1.9-3.4-6.2-4.6-9.5-2.6-3.4 1.9-4.5 6.2-2.6 9.5l23 40.6zM251.9 64.1c-3.9 0-7 3.1-7 7l-.2 38.2c0 3.9 3.1 7 7 7s7-3.1 7-7l.2-38.2c0-3.8-3.1-7-7-7zM324.8 114.2c1.3 1 2.8 1.4 4.2 1.4 2.1 0 4.2-1 5.6-2.8l28.8-38c2.3-3.1 1.7-7.5-1.3-9.8-3.1-2.3-7.5-1.7-9.8 1.3l-28.8 38c-2.3 3.2-1.7 7.6 1.3 9.9z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Brokenbone.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

