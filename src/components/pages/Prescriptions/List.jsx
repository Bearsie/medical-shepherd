import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { Block, Button, Link, Page, Row } from 'framework7-react';
import { groupBy, keys, map } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { routePath } from '../../../routes';
import Platform from '../../../services/Platform';
import { COLLECTIONS, FirebaseContext } from '../../Firebase';
import { Alarm, Bandage, Bootle, BrokenLeg, Clock, CrossedPills, Crutches, Doctor, Drip, Dropper, Head, HeartBeat, HospitalBed, InterviewCard, Lungs, Microscope, OpenPills, Pills, Plus, Scalpel, Search, Sex, Shield, Sign, Stethoscope, Stomach, Syringe, Tooth, Torch } from '../../Icons';
import { Topbar } from '../../Topbar';

const iconMapper = {
  Allergology: Pills,
  Angiology: Syringe,
  Cardiology: HeartBeat,
  Dentistry: Tooth,
  Dermatology: Dropper,
  Diabetology: CrossedPills,
  Endocrinology: Microscope,
  Gastroenterology: Stomach,
  Gynecology: InterviewCard,
  Hematology: Plus,
  Hypertensiology: OpenPills,
  Infectiology: Doctor,
  'Internal Medicine': Stethoscope,
  'Laryngology/ENT': Alarm,
  Nephrology: Sign,
  Neurology: Head,
  Oncology: Drip,
  Ophthalmology: Search,
  Orthopedics: BrokenLeg,
  Other: Shield,
  Psychiatry: HospitalBed,
  Pulmonology: Lungs,
  Rheumatology: Crutches,
  Surgery: Scalpel,
  Toxicology: Bootle,
  Traumatology: Bandage,
  Urology: Torch,
  Venereology: Sex,
  Recent: Clock,
};

const styles = mergeStyleSets({
  addButton: {
    borderRadius: '100%',
    bottom: '15px',
    display: 'flex',
    height: '60px',
    position: 'fixed',
    right: '15px',
    width: '60px',
  },
  category: [
    {
      borderRadius: '10px',
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderWidth: '1px',
      display: 'block',
      fontSize: '17px',
      fontWeight: 700,
      height: '115px',
      margin: '5px 0',
      padding: '5px 0',
      width: '160px',
    },
    'border-color-primary',
    'text-color-secondary',
    'text-align-center',
  ],
  categoryIcon: {
    height: '80px',
    width: '80px',
  },
});

export const List = (props) => {
  const firebase = useContext(FirebaseContext);
  const [prescriptions, setPrescriptions] = useState([]);
  
  useEffect(() => {
    Platform.registerBackButtonAction(event => {
      event.preventDefault();
      props.f7router.navigate(routePath.Home);

      return false;
    }, 101);
  }, []);

  useEffect(() => {
    const getPrescriptionsCollection = async () => {
      const prescriptionsData = await firebase.getUserData(COLLECTIONS.Prescriptions, firebase.authUserId);

      if (prescriptionsData) {
        setPrescriptions(prescriptionsData.prescriptions);
      }
    };

    getPrescriptionsCollection();
  }, []);

  const prescriptionsGroupedByCategory = groupBy(prescriptions, 'category');
  const categories = keys(prescriptionsGroupedByCategory);

  return (
    <Page>
      <Topbar title="Prescriptions" linkProps={{ href: routePath.Home }} />
      <Block className="margin-top-half">
        <Row className={mergeStyles({ justifyContent: 'flex-start'})}>
          <Link
            className={styles.category}
            animate
            href={routePath.PrescriptionCategory}
            key="Recent"
            routeProps={{
              category: 'Recent',
              prescriptions,
              allPrescriptions: prescriptions,
            }}
          >
              <div>Recent</div>
              <Head className={styles.categoryIcon} />
          </Link>
        </Row>
        <Row className={mergeStyles({ justifyContent: 'space-between'})}>
          {map(categories, (category) => {
            const Icon = iconMapper[category];

            return (
              <Link
                className={styles.category}
                href={routePath.PrescriptionCategory}
                key={category}
                routeProps={{
                  category,
                  prescriptions: prescriptionsGroupedByCategory[category],
                  allPrescriptions: prescriptions,
                }}
              >
                  <div>{category}</div>
                  <Icon className={styles.categoryIcon} />
              </Link>
            );
          })}
        </Row>
        <Button
          className={styles.addButton}
          fill
          href={routePath.PrescriptionAdd}
          routeProps={{
            prescriptions,
          }}
          raised
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </Button>
      </Block>
    </Page>
  );
};

List.propTypes = {
  f7router: PropTypes.object,
};
