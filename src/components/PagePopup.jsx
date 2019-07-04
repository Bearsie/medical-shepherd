import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyles } from '@uifabric/merge-styles';
import { Link, Navbar, NavTitle, Page, Popup, PageContent } from 'framework7-react';
import PropTypes from 'prop-types';
import React from 'react';
import { colorSecondary } from '../styles';

export const PagePopup = ({ children, header, name }) => (
  <Popup className={name}>
    <Page>
      <Navbar noShadow noHairline>
        <Link popupClose>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <NavTitle className={mergeStyles({ color: colorSecondary, right: '24px' })}>
          {header}
        </NavTitle>
      </Navbar>
      <PageContent className="no-padding-top">
        {children}
      </PageContent>
    </Page>
  </Popup>
);

PagePopup.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  name: PropTypes.string,
};