import { mergeStyles } from '@uifabric/merge-styles';
import { AccordionContent, Block, BlockTitle, Button, Gauge, List, ListItem, Page, PageContent, SwipeoutActions, SwipeoutButton } from 'framework7-react';
import { isEmpty, map, orderBy, reject, round } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { colorPrimary, itemTitleWithNoEllipsis } from '../../styles';
import { Files } from '../Icons';
import { Topbar } from '../Topbar';
import { COLLECTIONS, FirebaseContext } from '../Firebase';
import { routePath } from '../../routes';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minutes: 'numeric',
};

export const History = (props) => {
  const firebase = useContext(FirebaseContext);
  const [records, setRecords] = useState({});
  const [areDeletedRecords, setAreDeletedRecords] = useState(false);
  const [allDiagnosis, setAllDiagnosis] = useState([]);
  const [someRecordWereDeleted, setSomeRecordWereDeleted] = useState(false);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
    getAllDiagnosis();
  }, []);

  const getAllDiagnosis = async () => {
    const diagnosisData = await firebase.getUserData(COLLECTIONS.Diagnosis, firebase.authUserId);

    if (diagnosisData) {
      const orderedResults = orderBy(diagnosisData.diagnosis, 'date', 'desc');
      setRecords(orderedResults);
      setAllDiagnosis(diagnosisData.diagnosis);
    }
  };

  const handleDeleteRecord = (recordId) => () => {
    setRecords(reject(records, ['date', recordId]));
    setAllDiagnosis(reject(allDiagnosis, ['date', recordId]));
    setAreDeletedRecords(true);
  };

  const handleSaveChanges = async () => {
    try {
      await firebase.updateUserData(
        COLLECTIONS.Diagnosis,
        firebase.authUserId,
        { diagnosis: allDiagnosis },
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
      <Topbar title="History of diseases" linkPath={routePath.Home} />
      <PageContent className="no-padding-top">
        {isEmpty(records) && (
          <Block className="text-align-center">
            <Files className={mergeStyles({ width: '100px', height: '100px' })} />
            <BlockTitle className={mergeStyles([
              { fontSize: '18px', wordBreak: 'break-word', whiteSpace: 'pre-wrap', lineHeight: '1.5' },
              'no-margin-top',
              ])}
            >
              No history records
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
        <List accordionList>
          {map(records, (result) => (
            <ListItem
              accordionItem
              key={result.date}
              onSwipeoutDeleted={handleDeleteRecord(result.date)}
              swipeout
              title={new Date(result.date).toLocaleDateString('en-US', dateOptions)}
            >
              <SwipeoutActions right>
                <SwipeoutButton delete>
                  Delete
                </SwipeoutButton>
              </SwipeoutActions>
              <AccordionContent>
                <Block>
                  <ul>
                    <ListItem
                      className={itemTitleWithNoEllipsis}
                      title="Symptoms"
                      groupTitle
                    />
                    <List accordionList>
                      {map(result.symptoms, (symptom) =>
                        <ListItem
                          className={itemTitleWithNoEllipsis}
                          key={symptom.id}
                          title={symptom.common_name}
                        />
                      )}
                    </List>
                    <ListItem
                      className={itemTitleWithNoEllipsis}
                      title="Diagnosis"
                      groupTitle
                    />
                    <List accordionList>
                      {map(result.conditions, (condition) =>
                        <ListItem
                          className={itemTitleWithNoEllipsis}
                          key={condition.id}
                          title={condition.common_name}
                        >
                          <Gauge
                            slot="after"
                            type="circle"
                            value={round(condition.probability, 2)}
                            size={35}
                            borderColor={colorPrimary}
                            borderWidth={3}
                            valueText={`${round(condition.probability * 100)}%`}
                            valueFontSize={12}
                          />
                        </ListItem>
                      )}
                    </List>
                  </ul>
                </Block>
              </AccordionContent>
            </ListItem>
          ))}
        </List>
      </PageContent>
    </Page>
  );
};

History.propTypes = {
  f7router: PropTypes.object,
};
