import { List, ListItem, Searchbar } from 'framework7-react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { itemTitleWithNoEllipsis, sticky } from '../styles';

export const MultiSelect = ({ getTitle, items, onChange, selectedItems }) => (
  <>
    <Searchbar
      noShadow
      searchContainer=".search-list"
      searchIn=".item-title"
      className={sticky}
    />
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
  </>
);

MultiSelect.propTypes = {
  getTitle: PropTypes.func,
  items: PropTypes.array,
  onChange: PropTypes.func,
  selectedItems: PropTypes.object,
};