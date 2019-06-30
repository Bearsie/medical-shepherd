import React from 'react'
import PropTypes from 'prop-types';

export const Form = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M435.5 407.6l35.4 35.4c7-9.1 11.1-20.4 11.1-32.8 0-29.7-24.1-53.8-53.8-53.8-2.2 0-4.4.1-6.6.4v53.3c0 17.9-6.8 34.7-19.3 47.5 7.7 4.2 16.5 6.6 25.8 6.6 12.3 0 23.7-4.2 32.8-11.1l-35.4-35.4c-2.7-2.7-2.7-7.2 0-9.9 2.8-2.9 7.3-2.9 10-.2z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M407.6 371.4h-19.5v11.3c0 3.9-3.1 7-7 7s-7-3.1-7-7v-11.3h-74.7v38.5c0 16.4 7.3 31.1 18.8 41 9.5 8.2 21.8 13.1 35.3 13.1 14.5 0 27.7-5.7 37.4-15 10.3-9.9 16.7-23.7 16.7-39.1v-38.5zM388 406.5c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.7-.4.2-.9.3-1.3.4-.5.1-.9.1-1.4.1-.5 0-.9 0-1.4-.1-.5-.1-.9-.2-1.3-.4s-.8-.4-1.2-.7-.7-.6-1.1-.9c-.3-.3-.6-.7-.9-1.1s-.5-.8-.6-1.2c-.2-.4-.3-.9-.4-1.3-.1-.4-.1-.9-.1-1.4 0-.4 0-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.6-.8.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4l1.2.6c.4.3.7.6 1.1.9.3.3.6.7.9 1.1.3.4.5.8.6 1.2.2.4.3.9.4 1.3s.1.9.1 1.4c.2.5.1.9 0 1.4zM299.5 309.9v47.6h108.2v-47.6c0-14.9-6.1-28.5-15.9-38.3-9.8-9.8-23.3-15.8-38.3-15.8-10.1 0-19.5 2.8-27.6 7.6-15.8 9.4-26.4 26.7-26.4 46.5zM245.5 66.9c0-10.5-8.5-18.9-18.9-18.9h-97.2c-10.5 0-18.9 8.5-18.9 18.9v10.4h135.1V66.9h-.1z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M285.5 409.9v-38.5c0-2.6.7-4.9 1.9-7-1.2-2.1-1.9-4.4-1.9-7v-47.6c0-23.9 12.8-46.4 33.3-58.6 2.3-1.4 4.7-2.6 7.2-3.7V126.3c0-19.4-15.7-35-35-35H65c-19.4 0-35 15.7-35 35V429c0 19.3 15.7 35 35 35h225.9c5.9 0 11.5-1.5 16.4-4.1a68.18 68.18 0 0 1-21.8-50zM136.1 381c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2.1-4.9 2.1-1.8 0-3.6-.7-5-2.1l-17.1-17.1L92 390.9c-1.4 1.4-3.2 2.1-4.9 2.1s-3.6-.7-4.9-2.1c-2.7-2.7-2.7-7.2 0-9.9l17.1-17.1L82 346.8c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0L109 354l17.1-17.1c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9l-17 17.1 17.1 17.1zm5.5-111.6l-37 37c-1.4 1.4-3.2 2-4.9 2-1.8 0-3.6-.7-4.9-2l-18.2-18.2c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l13.3 13.3 32.1-32.1c2.7-2.7 7.2-2.7 9.9 0 2.5 2.7 2.5 7.2-.2 9.9zm0-81l-37 37c-1.4 1.4-3.2 2.1-4.9 2.1-1.8 0-3.6-.7-4.9-2.1l-18.2-18.2c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l13.3 13.3 32.1-32.1c2.7-2.7 7.2-2.7 9.9 0 2.5 2.8 2.5 7.2-.2 9.9zm97.7 188.7h-72.9c-3.9 0-7-3.1-7-7s3.1-7 7-7h72.9c3.9 0 7 3.1 7 7 0 3.8-3.2 7-7 7zm0-81h-72.9c-3.9 0-7-3.1-7-7s3.1-7 7-7h72.9c3.9 0 7 3.1 7 7s-3.2 7-7 7zm0-81h-72.9c-3.9 0-7-3.1-7-7s3.1-7 7-7h72.9c3.9 0 7 3.1 7 7s-3.2 7-7 7zM274.2 375c-1.3 1.3-3.1 2.1-4.9 2.1-.5 0-.9-.1-1.4-.1-.5-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-.5 0-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.4 4.7.3 6.3 1.9 1.3 1.3 2.1 3.1 2.1 4.9 0 1.9-.8 3.7-2.1 5zm0-80.9c-1.3 1.3-3.1 2.1-4.9 2.1-.5 0-.9 0-1.4-.1-.5-.1-.9-.2-1.3-.4s-.8-.4-1.2-.7c-.4-.3-.7-.5-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.4-.1-.9-.1-1.4 0-1.8.8-3.6 2-4.9.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.5 4.7.3 6.3 1.9 1.3 1.3 2.1 3.1 2.1 4.9 0 1.8-.8 3.7-2.1 5zm0-81c-1.3 1.3-3.1 2.1-4.9 2.1-.5 0-.9 0-1.4-.1-.5-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.4-.1-.9-.1-1.4 0-.5 0-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.5 4.7.3 6.3 1.9 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Form.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

