import { mergeStyles } from '@uifabric/merge-styles';
import { AccordionContent, Block, BlockTitle, Button, Gauge, List, ListItem, Page, PageContent, SwipeoutActions, SwipeoutButton } from 'framework7-react';
import { isEmpty, map, orderBy, reject, round } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { colorPrimary, itemTitleWithNoEllipsis } from '../../styles';
import { Files } from '../Icons';
import { Topbar } from '../Topbar';

import mockedDiagnosisData from '../../api/mockedResponses/diagnosisData';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minutes: 'numeric',
};

const orderedResults = orderBy(mockedDiagnosisData, 'date', 'desc');

export const History = (props) => {
  const [records, setRecords] = useState(orderedResults);
  const [areDeletedRecords, setAreDeletedRecords] = useState(false);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const handleDeleteRecord = (recordId) => () => {
    setRecords(reject(records, ['date', recordId]));
    setAreDeletedRecords(true);
  };

  const handleSaveChanges = () => {
    console.log('recordsToSave', records);
    setAreDeletedRecords(false);
  };

  return (
    <Page>
      <Topbar title="History of diseases" />
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
                <SwipeoutButton
                  delete
                  confirmText="Are you sure you want to delete this record?"
                >
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
