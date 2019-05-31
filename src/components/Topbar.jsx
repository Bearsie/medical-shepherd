import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyles } from '@uifabric/merge-styles';
import { Link, Navbar, NavTitle } from 'framework7-react';
import PropTypes from 'prop-types';
import React from 'react';
import { colorSecondary } from '../styles';

const titleStyles = mergeStyles({
  color: colorSecondary,
  right: '24px',
});

export const Topbar = ({ iconName = faChevronLeft, backLink = '/', title ='', panelOpen, panelClose }) => (
  <Navbar noShadow noHairline>
    <Link href={backLink} panelOpen={panelOpen} panelClose={panelClose}>
        <FontAwesomeIcon icon={iconName} />
    </Link>
    <NavTitle className={titleStyles}>{title}</NavTitle>
  </Navbar>
);

Topbar.propTypes = {
  iconName: PropTypes.object,
  backLink: PropTypes.string,
  title: PropTypes.string,
  panelOpen: PropTypes.string,
  panelClose: PropTypes.string,
};