import React from 'react'
import PropTypes from 'prop-types';

export const Hearbeat = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#1b3954"
        d="M190.4 308.5h-108c19.5 28.2 51.8 59.7 104.5 93.8 21.5 13.9 46 20.8 70.6 20.8 2.3 0 4.7-.1 7-.2l-54.3-154.4-19.8 40zM320.8 302l-54 120.8c21.3-1.5 42.4-8.4 61.1-20.5 44.3-28.7 73.9-55.5 93.6-80.2h-90.6L320.8 302z"
        className="prefix__st0"
      />
      <path
        fill="#16ade1"
        className="prefix__st1"
        d="M363.5 269.5l-45.4-90.6-46.9 104.9-53.1-151.1-60.5 123.2H24.4v38.6h157.3l30.5-62.1L267 388.1l53.1-118.9 19.5 38.9h148v-38.6z"
      />
      <path
        fill="#1b3954"
        d="M148.9 241.9l71.3-145.3 52.6 149.5 44.6-99.9 54.7 109.4h83.5c3-12.8 3.8-24.3 3.8-34.5 0-3.6-.2-7.2-.5-10.8h-.7l-49.3.4h-.1c-3.8 0-7-3.1-7-6.9 0-3.9 3.1-7 6.9-7.1l48.2-.4c-11.6-59.9-64.3-105.2-127.6-105.2-26.5 0-51.1 7.9-71.6 21.5-21.1-14.9-46.9-23.7-74.8-23.7-71.8 0-130 58.2-130 130 0 7 .4 14.7 1.6 23h94.4zm227.6-39.8c.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4l1.2.6c.4.3.7.6 1.1.9 1.3 1.3 2 3.1 2 4.9 0 .5 0 .9-.1 1.4-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.5.1-.9.1-1.4.1-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.5-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.5-.1-.9-.1-1.4 0-.4.1-.9.2-1.3z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Hearbeat.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

