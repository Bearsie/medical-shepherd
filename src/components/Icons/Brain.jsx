import React from 'react'
import PropTypes from 'prop-types';

export const Brain = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M167 77c-40.3 0-73 32.7-73 73 0 3.8.3 7.5.8 11.2-1.5-.1-3-.2-4.5-.2-37.7 0-68.3 30.6-68.3 68.3 0 25.6 14.1 47.8 34.9 59.6-8.9 10.6-14.2 24.2-14.2 39.1 0 29.5 20.9 54.1 48.7 59.8 5.2 26.9 28.8 47.2 57.3 47.2 2.2 0 4.4-.1 6.6-.4l.2.4h44.3v-52c0-3.9 3.1-7 7-7s7 3.1 7 7v52H240V150c0-40.3-32.7-73-73-73zM52 229.3c0-21.1 17.2-38.3 38.3-38.3 3.9 0 7 3.1 7 7s-3.1 7-7 7C76.9 205 66 215.9 66 229.3c0 8.8 4.8 16.9 12.4 21.2 3.4 1.9 4.6 6.2 2.7 9.5-1.3 2.3-3.7 3.6-6.1 3.6-1.2 0-2.3-.3-3.4-.9C59.5 256 52 243.1 52 229.3zm53.7 123.6c-.7 3.3-3.6 5.6-6.8 5.6-.5 0-.9 0-1.4-.1-14.3-2.9-24.7-15.7-24.7-30.4 0-9.3 3.9-15.9 7.2-19.9a7 7 0 0 1 9.9-.9 7 7 0 0 1 .9 9.9c-1.8 2.2-3.9 5.8-3.9 10.9 0 8.1 5.7 15.1 13.5 16.7 3.6.7 6 4.4 5.3 8.2zm46.2 51.9c-1.1.1-2.2.2-3.2.2-13.6 0-25.3-9.6-27.8-22.9-.7-3.8 1.8-7.5 5.5-8.2 3.8-.7 7.5 1.8 8.2 5.5 1.3 6.7 7.2 11.6 14.1 11.6.5 0 1.1 0 1.7-.1 3.8-.4 7.3 2.3 7.7 6.2.4 3.8-2.4 7.3-6.2 7.7zM167 121c-16 0-29 13-29 29 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-23.7 19.3-43 43-43 3.9 0 7 3.1 7 7s-3.1 7-7 7zm27 195.7c0 3.9-3.1 7-7 7s-7-3.1-7-7V243c0-3.9 3.1-7 7-7s7 3.1 7 7v73.7zm17.6 39.8c-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.7-.4.2-.9.3-1.3.4s-.9.1-1.4.1c-.5 0-.9 0-1.4-.1-.5-.1-.9-.2-1.3-.4s-.8-.4-1.2-.7c-.4-.3-.7-.5-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-.4 0-.9.1-1.4.1-.4.2-.9.4-1.3s.4-.8.7-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4l1.2.6c.4.3.7.6 1.1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3.1.5.1.9.1 1.4.2 1.9-.6 3.7-1.9 5z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M490 229.3c0-37.7-30.6-68.3-68.3-68.3-1.5 0-3 .1-4.5.2.6-3.6.9-7.4.9-11.2 0-40.3-32.7-73-73-73s-73 32.7-73 73v285h84.6l.2-.4c2.1.2 4.3.4 6.6.4 28.4 0 52.1-20.3 57.3-47.2 27.8-5.7 48.7-30.3 48.7-59.8 0-14.9-5.3-28.5-14.2-39.1 20.6-11.7 34.7-34 34.7-59.6zm-158 87.4c0 3.9-3.1 7-7 7s-7-3.1-7-7V243c0-3.9 3.1-7 7-7s7 3.1 7 7v73.7zm6-202.7c0-3.9 3.1-7 7-7 23.7 0 43 19.3 43 43 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-16-13-29-29-29-3.9 0-7-3.1-7-7zm53.1 268.1c-2.6 13.3-14.3 22.9-27.8 22.9-1 0-2.1-.1-3.2-.2-3.8-.4-6.6-3.9-6.2-7.7.4-3.8 3.9-6.6 7.7-6.2.6.1 1.2.1 1.7.1 6.9 0 12.8-4.9 14.1-11.6.7-3.8 4.4-6.3 8.2-5.5 3.8.7 6.3 4.4 5.5 8.2zm23.5-23.7c-.5.1-.9.1-1.4.1-3.3 0-6.2-2.3-6.8-5.6-.8-3.8 1.7-7.5 5.5-8.3 7.8-1.6 13.5-8.6 13.5-16.7 0-5.1-2.1-8.7-3.9-10.9a7 7 0 0 1 .9-9.9 7 7 0 0 1 9.9.9c3.3 3.9 7.2 10.6 7.2 19.9-.2 14.8-10.6 27.5-24.9 30.5zm25.8-95.6c-1.1.6-2.3.9-3.4.9-2.4 0-4.8-1.3-6.1-3.6-1.9-3.4-.7-7.6 2.7-9.5 7.7-4.3 12.4-12.5 12.4-21.2 0-13.4-10.9-24.3-24.3-24.3-3.9 0-7-3.1-7-7s3.1-7 7-7c21.1 0 38.3 17.2 38.3 38.3 0 13.7-7.5 26.6-19.6 33.4z"
        className="prefix__st1"
      />
    </g>
  </svg>
);

Brain.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

