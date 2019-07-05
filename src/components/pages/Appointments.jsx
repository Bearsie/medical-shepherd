import { Page, Block, BlockTitle, PageContent } from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { Topbar } from '../Topbar';
import { Files } from '../Icons';
import { mergeStyles } from '@uifabric/merge-styles';
import { isEmpty } from 'lodash';

export const Appointments = (props) => {
  const [records] = useState([]);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  return (
    <Page>
      <Topbar title="Appointments" />
      <PageContent className="no-padding-top">
        {isEmpty(records) && (
          <Block className="text-align-center">
            <Files className={mergeStyles({ width: '100px', height: '100px' })} />
            <BlockTitle className={mergeStyles([
              { fontSize: '18px', wordBreak: 'break-word', whiteSpace: 'pre-wrap', lineHeight: '1.5' },
              'no-margin-top',
              ])}
            >
              No records
            </BlockTitle>
          </Block>
        )}
      </PageContent>
    </Page>
  );
};

Appointments.propTypes = {
  f7router: PropTypes.object,
};
