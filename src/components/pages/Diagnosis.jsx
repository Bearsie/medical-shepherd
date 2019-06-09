import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialogs } from '@ionic-native/dialogs';
import { mergeStyles } from '@uifabric/merge-styles';
import { Block, BlockTitle, Button, Chip, Col, Link, List, ListItem, Navbar, NavTitle, Page, PageContent, Popup, Row, Searchbar } from 'framework7-react';
import { isEmpty, map, omit } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getSymptoms } from '../../api/api';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { colorSecondary } from '../../styles';
import { BrokenArm } from '../Icons/BrokenArm';
import { Topbar } from '../Topbar';

export const Diagnosis = (props) => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [popupOpened, togglePopupOpened] = useState(false);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
    fetchSymptoms();
  }, []);

  const showErrorMessage = (error) => {
    console.log(error);
    Dialogs.prompt('Connection with server failed. Unable to load symptoms.', 'Error');
  };

  const fetchSymptoms = async () => {
    try {
      const data = await getSymptoms();
      setSymptoms(data);
    } catch(error) {
      showErrorMessage(error);
    }
  };

  const handleOpenSymptoms = () => {
    togglePopupOpened(true);
  };

  const handleCloseSymptoms = () => {
    togglePopupOpened(false);
  };

  return (
    <Page>
      <Topbar title="Diagnosis" popupClose />
      <Row>
        <Col className={mergeStyles({ textAlign: '-webkit-center'})}>
          <BrokenArm className={mergeStyles({ width: '100px', height: '100px' })} />
          <Button
            fill
            onClick={handleOpenSymptoms}
            className={mergeStyles({ width: '50%'})}
          >
            Add symptoms
          </Button>
        </Col>
      </Row>
      <BlockTitle>Selected symptoms:</BlockTitle>
      <Block noHairlines>
        {map(selectedSymptoms, (symptom) => (
          <Chip
            text={symptom.name}
            key={symptom.id}
            deleteable
            onDelete={() => { setSelectedSymptoms(omit(selectedSymptoms, symptom.id)); }}
            className={mergeStyles({
              height: 'auto',
              margin: '3px',
              lineHeight: '1.5',
              maxWidth: '100%',
              
              selectors: {
                '.chip-label': { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
              },
            })}
          />
        ))}
      </Block>

      <Row className="margin-bottom">
        <Col className={mergeStyles({ textAlign: '-webkit-center'})}>
          <Button
            fill
            className={mergeStyles({
              width: '50%',
              visibility: isEmpty(selectedSymptoms) ? 'hidden' : 'visible',
            })}
          >
            Next
          </Button>
        </Col>
      </Row>

      <Popup opened={popupOpened} onPopupClosed={handleCloseSymptoms}>
        <Page>
          <Navbar noShadow noHairline>
            <Link popupClose>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <NavTitle className={mergeStyles({ color: colorSecondary, right: '24px' })}>
              Symptoms
            </NavTitle>
          </Navbar>
          <Searchbar searchContainer=".search-list" searchIn=".item-title" />
          <PageContent className="no-padding-top">
            <List className="searchbar-not-found">
              <ListItem title="Nothing found" />
            </List>
            <List className="search-list searchbar-found">
              {map(symptoms, (symptom) => (
                <ListItem
                  className={mergeStyles({
                    selectors: {
                      '.item-title': { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
                    },
                  })}
                  checkbox
                  checked={!!selectedSymptoms[symptom.id]}
                  key={symptom.id}
                  title={symptom.name}
                  onChange={
                    () => {
                      if (selectedSymptoms[symptom.id]) {
                        setSelectedSymptoms(omit(selectedSymptoms, symptom.id));
                        return;
                      }

                      setSelectedSymptoms({
                        ...selectedSymptoms,
                        [symptom.id]: symptom,
                      })
                    }
                  }
                />
              ))}
            </List>
          </PageContent>
        </Page>
      </Popup>
    </Page>
  );
};

Diagnosis.propTypes = {
  f7router: PropTypes.object,
};