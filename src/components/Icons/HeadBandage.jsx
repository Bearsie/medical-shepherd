import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const HeadBandage = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M451.1 236.9c.6 6.4.9 12.8.9 19.2 0 19.7-2.9 39.2-8.6 57.9 19.1-3 33.7-19.6 33.7-39.5 0-17.3-10.8-32-26-37.6z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        d="M72 233.9L232.2 73.6C148.5 83.7 82.1 150.1 72 233.9zM254.4 72.3c-1.4 0-2.8 0-4.3.1.1 1.9-.6 3.8-2 5.2L76 249.7c-1.4 1.4-3.2 2.1-4.9 2.1h-.3c0 1.4-.1 2.9-.1 4.3 0 20 3.2 39.3 9.1 57.3L311.7 81.5c-18-6-37.3-9.2-57.3-9.2zM325.5 86.6c-.3.9-.9 1.7-1.6 2.4L87.4 325.6c-.7.7-1.5 1.2-2.4 1.5 6.5 15.5 15.1 29.9 25.4 42.9l258-258c-13-10.3-27.4-18.9-42.9-25.4z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        className="prefix__st0"
        d="M99 379.1l5 5.4-4.6-5.7zM409.9 158.2l-34.1 34.1c-1.4 1.4-3.2 2.1-4.9 2.1s-3.6-.7-5-2.1c-2.7-2.7-2.7-7.2 0-9.9l35.1-35.1c.3-.3.6-.5.9-.7-6.8-9.2-14.4-17.6-22.8-25.4l-.3.3-259 259-.3.3c33.6 36.3 81.6 59 134.9 59 81.4 0 150.4-52.9 174.5-126.2 6-18.1 9.2-37.4 9.2-57.5 0-7.3-.4-14.6-1.3-21.7-3.3-27.8-12.7-53.7-26.9-76.2zM343 206.8c.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9s.8-.5 1.2-.6c.4-.2.9-.3 1.3-.4 2.3-.5 4.7.3 6.3 1.9 1.3 1.3 2 3.1 2 4.9 0 .5 0 .9-.1 1.4-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.6.7-.9 1.1-1.3 1.3-3.1 2.1-5 2.1-.5 0-.9-.1-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1s-.5-.8-.6-1.2c-.2-.4-.3-.9-.4-1.3-.1-.4-.1-.9-.1-1.4s.1-.9.2-1.4zm-50.6 181.7c-1.3 1.1-2.9 1.6-4.5 1.6-2 0-4-.9-5.4-2.5-9.7-11.7-19.2-17.6-28.2-17.6s-18.4 5.9-28.2 17.6a7 7 0 0 1-9.9.9 7 7 0 0 1-.9-9.9c12.5-15 25.6-22.7 38.9-22.7 13.3 0 26.4 7.6 39 22.7 2.6 3 2.2 7.4-.8 9.9zm87.1-109.7c-12.5 15-25.6 22.7-38.9 22.7s-26.4-7.6-38.9-22.7a7 7 0 0 1 .9-9.9 7 7 0 0 1 9.9.9c9.8 11.7 19.2 17.6 28.2 17.6s18.4-5.9 28.2-17.6a7 7 0 0 1 9.9-.9c2.8 2.5 3.2 7 .7 9.9zM56.7 256c0-1.5 0-3.1.1-4.6l.2-9.4.4-3.7c-.1.1-.3.1-.4.2-13.2 6.6-22.2 20.1-22.2 35.8 0 18.7 12.9 34.5 30.3 38.8-4.4-14.5-7.1-29.4-8-44.6-.3-4.1-.4-8.3-.4-12.5z"
      />
    </g>
  </svg>
);

HeadBandage.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

