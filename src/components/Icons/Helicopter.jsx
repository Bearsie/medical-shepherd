import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/

export const Helicopter = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M272.8 102.3v52.8h32.6v-52.8c7-5.1 11.5-13.3 11.5-22.6 0-15.4-12.5-27.9-27.9-27.9-15.4 0-27.9 12.5-27.9 27.9.2 9.4 4.7 17.6 11.7 22.6z"
        className="prefix__st0"
      />
      <ellipse
        fill="#16ade1"
        ry={16}
        rx={56.8}
        cy={77}
        cx={182.7}
        className="prefix__st1"
      />
      <ellipse
        fill="#16ade1"
        ry={16}
        rx={56.8}
        cy={77}
        cx={395.5}
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M495.6 431.8c-2.7-2.7-7.2-2.7-9.9 0l-14.3 14.3h-71v-30.8c0-1-.2-1.9-.6-2.7 21.8-5.2 40.9-17.4 54.8-34.2 14.5-17.5 23.1-40 23.1-64.5s-8.7-46.9-23.1-64.5c-2.1-2.5-4.3-4.9-6.5-7.2-18.3-18.3-43.7-29.7-71.7-29.7H355v-33c0-5.8-4.7-10.5-10.5-10.5H233.7c-5.8 0-10.5 4.7-10.5 10.5v33H82.3l-38.4-38.4H14.3v65.4h63c3.9 0 7 3.1 7 7s-3.1 7-7 7h-63v26.2h188.3l40.5 81.8h-68.4v-42.6c-56.2-20.8-104.2 30.5-160.3 9.7v104.3c56.2 20.8 104.1-30.5 160.3-9.7v-47.7H250l19.6 39.7h38V446h-71l-20.8-20.8c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l22.9 22.9c1.3 1.3 3.1 2.1 4.9 2.1h240.6c1.9 0 3.6-.7 4.9-2.1l16.4-16.4c2.8-2.7 2.8-7.1 0-9.8zM124.2 251.5c-1.3 1.3-3.1 2-5 2s-3.6-.8-5-2c-1.3-1.3-2-3.1-2-5s.7-3.6 2-5c1.3-1.3 3.1-2 5-2 1.8 0 3.6.7 5 2 1.3 1.3 2 3.1 2 5s-.7 3.7-2 5zm-7.1 138.6h-12.9v11.5h-28v-11.5H63.3V362h12.9v-11.5h28.1V362h12.9v28.1h-.1zm259.3-140.7c35.6 0 64.5 28.9 64.5 64.5s-28.9 64.5-64.5 64.5h-1.6l-63.8-129h65.4zm-54.8 196.7v-30.8h54.8c3.4 0 6.7-.2 10-.5v31.3h-64.8z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Helicopter.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

