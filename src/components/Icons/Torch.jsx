import React from 'react'
import PropTypes from 'prop-types';

export const Torch = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill="#16ade1"
        d="M174.2 105.7c1.1-4.9 1.7-10.8 1.7-18.1 0-32.7-27-59.1-27-59.1s-27 26.5-27 59.1c0 7.3.6 13.2 1.7 18.1h50.6zM208.2 139c-3.8 5.3-10 8.7-16.9 8.8l-4.1 147.9-.1 2.9c75.6 12.2 148.6-62.3 225.2-19.7V118c-69.5-38.7-135.9 19-204.1 21zm127 81.5H311v24.2h-36.5v-24.2h-24.2V184h24.2v-24.2H311V184h24.2v36.5z"
        className="prefix__st1"
      />
      <path
        fill="#1b3954"
        d="M198.1 126.7c0-3.9-3.1-7-7-7h-84.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h13.5l10.3 349.8h36.8l5.9-188.3 4.4-159.6.1-1.9h13.5c3.8 0 6.9-3.1 6.9-7zm-42.2 58.4c0 3.9-3.1 7-7 7s-7-3.1-7-7v-.9c0-3.9 3.1-7 7-7s7 3.1 7 7v.9zm0-26.3c0 3.9-3.1 7-7 7s-7-3.1-7-7v-25.1h14v25.1z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Torch.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

