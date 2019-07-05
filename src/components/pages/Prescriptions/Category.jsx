import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, List, ListItem, Page, PageContent, SwipeoutActions, SwipeoutButton } from 'framework7-react';
import { get, isEmpty, map, orderBy, reject } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { itemTitleWithNoEllipsis } from '../../../styles';
import { Files } from '../../Icons';
import { PagePopup } from '../../PagePopup';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';
import { FirebaseContext, db } from '../../Firebase';
import { routePath } from '../../../routes';

const prescriptionsCollection = db.collection('prescriptions');

export const Category = (props) => {
  const firebase = useContext(FirebaseContext);
  const [records, setRecords] = useState(orderBy(props.prescriptions, 'date', 'desc'));
  const [areDeletedRecords, setAreDeletedRecords] = useState(false);
  const [viewedPrescription, setViewedPrescription] = useState(undefined);
  const [someRecordWereDeleted, setSomeRecordWereDeleted] = useState(false);
  const [allPrescriptions, setAllPrescriptions] = useState(props.allPrescriptions);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const handleDeleteRecord = (recordId) => () => {
    setRecords(reject(records, ['date', recordId]));
    setAllPrescriptions(reject(allPrescriptions, ['date', recordId]));
    setAreDeletedRecords(true);
  };

  const handleSaveChanges = async () => {
    try {
      await firebase.updateCollection(
        prescriptionsCollection,
        firebase.authUserId,
        { prescriptions: allPrescriptions },
      );
  
      props.f7router.app.dialog.alert('Changes saved!');
      setAreDeletedRecords(false);
      setSomeRecordWereDeleted(true);
    } catch (error) {
      onError(error);
    }
  };

  const onError = (error) => {
    props.f7router.app.dialog.alert('An error occured: ', error.message);
  };

  return (
    <Page>
      <Topbar title="Prescriptions" linkPath={someRecordWereDeleted ? routePath.PrescriptionList : undefined} />
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
                <SwipeoutButton delete>
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
  prescriptions: PropTypes.array,
  allPrescriptions: PropTypes.array,
};
