import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Lungs = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M471.1 291.4c-5.2-23.3-12.1-46.1-20.7-68.4-4.3-11.1-9.1-22-14.2-32.8-5.2-10.8-10.1-28.8-21.9-34.5-8.6-4.1-18.9 3.1-26.8 6.8-18.6 8.6-36.5 19.4-51.6 33.2l-50.6-40.6V36.7H263v57.7c0 3.9-3.1 7-7 7s-7-3.1-7-7V36.7h-22.2v118.5l-50.6 40.6c-15.1-13.8-33-24.6-51.6-33.2-7.9-3.6-18.2-10.9-26.8-6.8-11.9 5.7-16.7 23.7-21.9 34.5C70.7 201 66 212 61.6 223.1 53 245.3 46 268.2 40.9 291.5c-10.2 46.1-13.4 93.7-9.3 140.7.9 10.5.8 23.5 7.4 32.3 11.8 15.9 45.5 9.8 62.2 9.1 26-1 51.9-3.7 77.5-7.9 16.5-2.8 35.1-7.7 42.8-22.6 4.4-8.4 4.3-18.5 2.5-27.8-1.8-9.3-5.1-18.3-6.8-27.6-5.1-27.8 3.9-56.1 4.6-84.4.6-25.8-6-51.8-18.9-74.2l13.9-13.9L256 176l39.2 39.2L309 229c-12.9 22.4-19.5 48.4-18.9 74.2.7 28.3 9.7 56.6 4.6 84.4-1.7 9.3-5 18.3-6.8 27.6-1.8 9.3-1.9 19.4 2.5 27.8 7.7 14.9 26.3 19.9 42.8 22.6 25.6 4.3 51.5 6.9 77.5 7.9 16.7.6 50.4 6.8 62.2-9.1 6.6-8.9 6.5-21.8 7.4-32.3 4.2-46.9 1-94.6-9.2-140.7zm-369.5-52.8c-7.8 20-14.1 40.9-18.8 62.1-.7 3.3-3.6 5.5-6.8 5.5-.5 0-1-.1-1.5-.2-3.8-.8-6.2-4.6-5.3-8.3 4.8-21.8 11.4-43.4 19.4-64.1 1.4-3.6 5.5-5.4 9.1-4 3.5 1.4 5.3 5.4 3.9 9zm161.3-110c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-1.3 1.3-3.1 2-4.9 2-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-.5 0-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.6-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4 2.3-.4 4.7.3 6.3 1.9 1.3 1.3 2.1 3.1 2.1 4.9-.1.5-.2 1-.2 1.5z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Lungs.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};
