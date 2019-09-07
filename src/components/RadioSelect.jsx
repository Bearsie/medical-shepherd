import { mergeStyles } from '@uifabric/merge-styles';
import { Link, List, ListItem, PageContent, Sheet, Toolbar } from 'framework7-react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { itemTitleWithNoEllipsis } from '../styles';

export const RadioSelect = ({ title, value, onChange, options }) => { 
  const [sheetOpened, setSheetOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value])

  return (
    <>
      <List className="no-margin">
        <ListItem
          className={itemTitleWithNoEllipsis}
          link
          onClick={() => setSheetOpened(true)}
          title={title}
        >
          <span className={mergeStyles({ maxWidth: '100px', textAlign: 'right' })} slot="after-title">
            {selectedOption}
          </span>
        </ListItem>
      </List>
    
      <Sheet
        className={`radio-select-${title}`}
        opened={sheetOpened}
        onSheetClosed={() => { setSheetOpened(false) }}
      >
        <Toolbar>
          <div className="left margin-left">{title}</div>
          <div className="right">
            <Link sheetClose>Close</Link>
          </div>
        </Toolbar>
        <PageContent>
          <List className="no-margin">
            {map(options, (option) => (
              <ListItem
                radio
                checked={option === selectedOption}
                key={option}
                title={option}
                onChange={() => { onChange(option) }}
              />
            ))}
          </List>
        </PageContent>
      </Sheet>
    </>);
  };
  
  RadioSelect.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
  };