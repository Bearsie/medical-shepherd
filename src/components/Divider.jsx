import React from 'react';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import PropTypes from 'prop-types';

const getClassNames = (color) => mergeStyleSets({
  divider: {
    backgroundColor: color,
    color: color,
    height: '1px',
    width: '100%',
  },
  root: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 30px 1fr',
  },
  text: { textAlign: 'center' },
});

export const Divider = ({ className, color = 'gray', text }) => {
  const styles = getClassNames(color);

  return (
    <div className={mergeStyles(styles.root, className)} >
      <hr className={styles.divider} />
      <span className={styles.text}>{text}</span>
      <hr className={styles.divider} />
    </div>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};