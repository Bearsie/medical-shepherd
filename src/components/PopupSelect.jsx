import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyles } from '@uifabric/merge-styles';
import { Link, List, ListItem, Navbar, NavTitle, Page, PageContent, Popup, Searchbar } from 'framework7-react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { colorSecondary, itemTitleWithNoEllipsis } from '../styles';

export const PopupSelect = ({
  getTitle,
  header,
  items,
  onChange,
  onPopupClosed,
  popupOpened,
  selectedItems,
}) => (
  <Popup opened={popupOpened} onPopupClosed={onPopupClosed}>
    <Page>
      <Navbar noShadow noHairline>
        <Link popupClose>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <NavTitle className={mergeStyles({ color: colorSecondary, right: '24px' })}>
          {header}
        </NavTitle>
      </Navbar>
      <Searchbar noShadow searchContainer=".search-list" searchIn=".item-title" />
      <PageContent className="no-padding-top">
        <List className="searchbar-not-found">
          <ListItem title="Nothing found" />
        </List>
        <List className="search-list searchbar-found no-margin-top">
          {map(items, (item) => (
            <ListItem
              className={itemTitleWithNoEllipsis}
              checkbox
              checked={!!selectedItems[item.id]}
              key={item.id}
              title={getTitle && getTitle(item)}
              onChange={() => onChange(item)}
            />
          ))}
        </List>
      </PageContent>
    </Page>
  </Popup>
);

PopupSelect.propTypes = {
  getTitle: PropTypes.func,
  header: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
  onPopupClosed: PropTypes.func,
  popupOpened: PropTypes.boolean,
  selectedItems: PropTypes.object,
};