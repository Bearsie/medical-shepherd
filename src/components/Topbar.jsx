import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { Link, Navbar, NavTitle } from 'framework7-react';
import PropTypes from 'prop-types';
import React from 'react';
import { colorSecondary, sticky } from '../styles';

const styles = mergeStyleSets({
  bar: sticky,
  title: {
    color: colorSecondary,
    right: '24px',
  },
});

export const Topbar = ({ iconName = faChevronLeft, title ='', linkProps = { back: true } }) => (
  <Navbar noShadow noHairline className={styles.bar} >
    <Link {...linkProps}>
        <FontAwesomeIcon icon={iconName} />
    </Link>
    <NavTitle className={styles.title}>{title}</NavTitle>
  </Navbar>
);

Topbar.propTypes = {
  children: PropTypes.object,
  iconName: PropTypes.object,
  title: PropTypes.string,
  linkProps: PropTypes.object,
};