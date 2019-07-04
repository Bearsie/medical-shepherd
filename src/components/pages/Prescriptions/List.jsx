import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { Block, Button, Link, Page, Row } from 'framework7-react';
import { groupBy, keys, map } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { Alarm, Bandage, Bootle, BrokenLeg, Clock, CrossedPills, Crutches, Doctor, Drip, Dropper, Head, HeartBeat, HospitalBed, InterviewCard, Lungs, Microscope, OpenPills, Pills, Plus, Scalpel, Search, Sex, Shield, Sign, Stethoscope, Stomach, Syringe, Tooth, Torch } from '../../Icons';
import { Topbar } from '../../Topbar';

const mockedPrescriptions = [
  {
    date: 1561492575569,
    category: 'Psychiatry',
    title: 'dr John Doe',
    src: 'tesktjakiś',
  },
  {
    date: 1561499667349,
    category: 'Psychiatry',
    title: 'hospital care'
  },
  {
    date: 1561499167349,
    category: 'Dentistry',
    title: 'nutritional recommendations'
  },
];

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
  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const prescriptionsGroupedByCategory = groupBy(mockedPrescriptions, 'category');
  const categories = keys(prescriptionsGroupedByCategory);

  return (
    <Page>
      <Topbar title="Prescriptions" />
      <Block className="margin-top-half">
        <Row className={mergeStyles({ justifyContent: 'flex-start'})}>
          <Link
            className={styles.category}
            animate
            href={routePath.PrescriptionCategory}
            key="Recent"
            routeProps={{
              category: 'Recent',
              prescriptions: mockedPrescriptions,
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
            prescriptions: mockedPrescriptions,
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
