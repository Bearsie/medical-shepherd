import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, List, ListItem, Page, PageContent, SwipeoutActions, SwipeoutButton } from 'framework7-react';
import { get, isEmpty, map, orderBy, reject } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { itemTitleWithNoEllipsis } from '../../../styles';
import { Files } from '../../Icons';
import { PagePopup } from '../../PagePopup';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

export const Category = (props) => {
  const [records, setRecords] = useState(orderBy(props.prescriptions, 'date', 'desc'));
  const [areDeletedRecords, setAreDeletedRecords] = useState(false);
  const [viewedPrescription, setViewedPrescription] = useState(undefined);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const handleDeleteRecord = (recordId) => () => {
    setRecords(reject(records, ['date', recordId]));
    setAreDeletedRecords(true);
  };

  const handleSaveChanges = () => {
    // saveToFirebase(records)
    setAreDeletedRecords(false);
  };

  return (
    <Page>
      <Topbar title="Prescriptions" />
      <UnderlinedHeader title={props.category} />
      <PageContent className="no-padding-top">
        {isEmpty(records) && (
          <Block className="text-align-center">
            <Files className={mergeStyles({ width: '100px', height: '100px' })} />
            <BlockTitle className={mergeStyles([
              { fontSize: '18px', wordBreak: 'break-word', whiteSpace: 'pre-wrap', lineHeight: '1.5' },
              'no-margin-top',
              ])}
            >
              No precription records
            </BlockTitle>
          </Block>
        )}
        {areDeletedRecords && (
          <Block>
            <Button
              fill
              onClick={() => handleSaveChanges()}
            >
              Save changes
            </Button>
          </Block>
        )}
        <List>
          {map(records, (result) => (
            <ListItem
              className={itemTitleWithNoEllipsis}
              key={result.date}
              onSwipeoutDeleted={handleDeleteRecord(result.date)}
              swipeout
              link
              onClick={() => setViewedPrescription(result)}
              popupOpen=".prescription-image"
              title={result.title}
              footer={result.category}
              after={moment(result.date).format('DD-MM-YYYY')}
            >
              <SwipeoutActions right>
                <SwipeoutButton
                  delete
                  confirmText="Are you sure you want to delete this record?"
                >
                  Delete
                </SwipeoutButton>
              </SwipeoutActions>
            </ListItem>
          ))}
        </List>
      </PageContent>

      <PagePopup
        header={get(viewedPrescription, 'category', '')}
        name="prescription-image"
      >
        <UnderlinedHeader
          title={get(viewedPrescription, 'title')}
          subtitle={`${get(viewedPrescription, 'category')} | ${moment(get(viewedPrescription, 'date')).format('DD-MM-YYYY')}`}
        />
        <div className={mergeStyles({ width: '100%', height: '100%' })}></div>
      </PagePopup>
    </Page>
  );
};

Category.propTypes = {
  f7router: PropTypes.object,
  category: PropTypes.string,
  prescriptions: PropTypes.object,
};
