import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/
export const InterviewCard = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill={colorSecondary}
        d="M387.2 85.4h-45.3v34.5c0 23.8-19.4 43.1-43.1 43.1h-85.4c-23.8 0-43.1-19.4-43.1-43.1V85.4H125c-13.2 0-23.8 10.7-23.8 23.8v349.1c0 13.2 10.7 23.8 23.8 23.8h262.3c13.2 0 23.8-10.7 23.8-23.8V109.2c-.1-13.1-10.8-23.8-23.9-23.8zm-26.3 363.3H342V409c0-3.9-3.1-7-7-7s-7 3.1-7 7v39.7H151.1v-95.2h61.6c2.4 0 4.6-1.2 5.9-3.3l23.3-37v92.4c0 3.1 2 5.8 5 6.7.7.2 1.4.3 2 .3 2.3 0 4.5-1.1 5.8-3.1l42.9-64.2h63.2v103.4h.1zm0-117.3h-67c-2.3 0-4.5 1.2-5.8 3.1l-32.2 48.1V289c0-3.1-2.1-5.9-5.1-6.7-3-.9-6.2.4-7.9 3l-34.1 54.2h-57.7v-91.8h209.7v83.7h.1zm0-111.4H151.1v-31.8h209.7V220h.1z"
        className="prefix__st0"
      />
      <path
        fill={colorSecondary}
        d="M341.4 384.6l-.6-1.2c-.3-.4-.5-.7-.9-1.1-.3-.3-.7-.6-1.1-.9-.4-.3-.8-.5-1.2-.7-.4-.2-.9-.3-1.3-.4-.9-.2-1.8-.2-2.7 0-.4.1-.9.2-1.3.4s-.8.4-1.2.7c-.4.3-.8.5-1.1.9-.3.3-.6.7-.9 1.1-.3.4-.5.8-.6 1.2-.2.4-.3.9-.4 1.3-.1.5-.1.9-.1 1.4 0 1.8.8 3.6 2 4.9.3.3.7.6 1.1.9.4.3.8.5 1.2.6.4.2.9.3 1.3.4.5.1.9.1 1.4.1.5 0 .9 0 1.4-.1.5-.1.9-.2 1.3-.4l1.2-.6c.4-.3.7-.5 1.1-.9 1.3-1.3 2.1-3.1 2.1-4.9 0-.5 0-.9-.1-1.4-.2-.4-.4-.9-.6-1.3z"
        className="prefix__st0"
      />
      <path
        fill={colorPrimary}
        d="M213.3 136.6h85.4c9.2 0 16.7-7.5 16.7-16.7V85.4H289V62.8c0-18.2-14.8-33-33-33s-33 14.8-33 33v22.6h-26.5v34.5c0 9.2 7.5 16.7 16.8 16.7z"
        className="prefix__st1"
      />
    </g>
  </svg>
)

InterviewCard.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};