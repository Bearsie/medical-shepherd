import { mergeStyleSets } from '@uifabric/merge-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { colorPrimary } from '../styles';

const styles = mergeStyleSets({
  firstLine: { border: `1px solid ${colorPrimary}`, width: '60%', marginBottom: '2px' },
  secondLine: { border: `1px solid ${colorPrimary}`, width: '50%' },
  uderlineWrapper: [{ flexDirection: 'column' }, 'display-flex', 'align-items-center', 'margin-bottom'],
});

export const UnderlinedHeader = ({ title, subtitle }) => (
  <>
    <h3 className="text-align-center no-margin-top no-margin-bottom">{title}</h3>
    {subtitle && <h4 className="text-align-center no-margin-top no-margin-bottom">{subtitle}</h4>}
    <div className={styles.uderlineWrapper}>
      <div className={styles.firstLine} />
      <div className={styles.secondLine} />
    </div>
  </>
);

UnderlinedHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
