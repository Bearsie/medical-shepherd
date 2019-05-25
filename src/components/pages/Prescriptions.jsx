import { Page } from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { Topbar } from '../Topbar';

export const Prescriptions = (props) => {
  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  return (
    <Page>
      <Topbar title="Prescriptions" />
    </Page>
  );
};

Prescriptions.propTypes = {
  f7router: PropTypes.object,
};
