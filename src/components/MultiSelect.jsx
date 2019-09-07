import { Block, List, ListItem, Searchbar } from 'framework7-react';
import { filter, includes, lowerCase, map, take } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { itemTitleWithNoEllipsis, sticky } from '../styles';
import { ItemsCounter } from './ItemsCounter';

const renderedItemsPerScroll = 20;

export const MultiSelect = ({ getTitle, items, onChange, selectedItems }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isMoreItemsToRender, setIsMoreItemsToRenderStatus] = useState(false);
  const [renderedItems, setRenderedItems] = useState(take(filteredItems, renderedItemsPerScroll));
  const [itemsCounterId, setItemsCounterId] = useState(null);

  const handleChangeSearchInput = (event) => {
    setSearchInputValue(event.target.value);
    showItemsCounter();
  };

  const handleClearSearchInput = () => {
    setSearchInputValue('');
  };

  useEffect(() => {
    if (searchInputValue) {
      setFilteredItems(filter(items, (item) => includes(lowerCase(item.common_name), searchInputValue)));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchInputValue]);

  useEffect(() => {
    setRenderedItems(take(filteredItems, renderedItemsPerScroll));
  }, [filteredItems]);

  useEffect(() => {
    setIsMoreItemsToRenderStatus(filteredItems.length > renderedItemsPerScroll);
  }, [filteredItems.length]);

  const renderMoreItems = () => {
    if (renderedItems.length >= filteredItems.length) {
      setIsMoreItemsToRenderStatus(false);
      return;
    }

    setRenderedItems(take(filteredItems, renderedItems.length + renderedItemsPerScroll));
  };

  const showItemsCounter = () => {
    window.clearTimeout(itemsCounterId);
    setItemsCounterId(setTimeout(() => {
      setItemsCounterId(null);
    }, 2000));
  };

  return (
    <>
      <Searchbar
        noShadow
        className={sticky}
        onChange={handleChangeSearchInput}
        onClickClear={handleClearSearchInput}
      />
      {!renderedItems.length && <Block>Nothing found</Block>}
      <InfiniteScroll
        dataLength={renderedItems.length}
        next={renderMoreItems}
        hasMore={isMoreItemsToRender}
        loader={<Block>Loading...</Block>}
        height={700}
        onScroll={showItemsCounter}
      >
        <List className="no-margin-top">
          {map(renderedItems, (item) => (
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
      </InfiniteScroll>
      {itemsCounterId && <ItemsCounter current={renderedItems.length} max={filteredItems.length} />}
    </>
  );
};

MultiSelect.propTypes = {
  getTitle: PropTypes.func,
  items: PropTypes.array,
  onChange: PropTypes.func,
  selectedItems: PropTypes.object,
};