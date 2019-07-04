import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Gauge, List, ListItem, Page, PageContent } from 'framework7-react';
import { filter, get, includes, isEmpty, keyBy, map, round } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getConditions } from '../../../api';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { colorPrimary, itemTitleWithNoEllipsis } from '../../../styles';
import { Skull } from '../../Icons';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

export const Results = (props) => {
	const [conditions, setConditions] = useState(props.conditions)

	useEffect(() => {
    RegisterBackButtonAction(props.f7router);
    fetchConditions();
  }, []);

  const fetchConditions = async () => {
		try {
      const { data } = await getConditions();
      const diagnosedConditionsIds = map(props.conditions, 'id');
      const diagnosedConditionsDetails = keyBy(filter(
        data,
        (conditionDetalis) => includes(diagnosedConditionsIds, conditionDetalis.id),
      ), 'id');
      const diagnosedConditionsWithDetails = map(
        props.conditions,
        (condition) => ({ ...condition, ...diagnosedConditionsDetails[condition.id] }),
      );
      setConditions(diagnosedConditionsWithDetails);
		} catch(error) {
			showErrorMessage(error);
		}
  };

	const showErrorMessage = (error) => {
		console.log(error);
		Dialogs.prompt('Connection with server failed. Unable to load results.', 'Error');
  };

  const [bestMatchCondition, ...otherConditions] = conditions;

  console.log(props.evidence, conditions)

	return (
    <Page>
      <Topbar title="Diagnosis" />
      <UnderlinedHeader title="Results" />
      {bestMatchCondition &&
        <PageContent className="no-padding-top">
          <List className="no-margin-top">
            <ListItem
              className={itemTitleWithNoEllipsis}
              title="Best match diagnosis"
              groupTitle
            />
            <ListItem
              className={itemTitleWithNoEllipsis}
              title={bestMatchCondition.common_name}
            >
              <Gauge
                slot="after"
                type="circle"
                value={round(bestMatchCondition.probability, 2)}
                size={35}
                borderColor={colorPrimary}
                borderWidth={3}
                valueText={`${round(bestMatchCondition.probability * 100)}%`}
                valueFontSize={12}
              />
            </ListItem>
            <ListItem
              className={itemTitleWithNoEllipsis}
              header="Hint:"
              title={get(bestMatchCondition, 'extras.hint')}
            />
          </List>
          <Block>
            <Button
              fill
              href={routePath.Home}
            >
              Save and quit diagnosis
            </Button>
          </Block>
          {!isEmpty(otherConditions) &&
            <List className="no-margin-top">
              <ListItem
                className={itemTitleWithNoEllipsis}
                title="Other diagnosis"
                groupTitle
              />
              {map(otherConditions, (condition) => (
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
              ))}
            </List>
          }
        </PageContent>
      }
      {!bestMatchCondition &&
        <PageContent className="no-padding-top padding-left padding-right text-align-center">
          <Skull className={mergeStyles({ width: '100px', height: '100px' })} />
          <BlockTitle className={mergeStyles([
            { fontSize: '18px', wordBreak: 'break-word', whiteSpace: 'pre-wrap', lineHeight: '1.5' },
            'no-margin-top',
            'text-align-justify',
            ])}
          >
            Sorry, we were not able to find the right diagnosis.
          </BlockTitle>
          <Button
            fill
            href={routePath.Home}
          >
            Quit diagnosis
          </Button>
        </PageContent>
      }
    </Page>
  )
}

Results.propTypes = {
  f7router: PropTypes.object,
  age: PropTypes.number,
  conditions: PropTypes.array,
  evidence: PropTypes.object,
  sex: PropTypes.string,
};