import { mergeStyles } from '@uifabric/merge-styles';
import { Block, Button, List, ListInput, Page, PageContent } from 'framework7-react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { routePath } from '../../../routes';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { COLLECTIONS, FirebaseContext } from '../../Firebase';
import { useValue } from '../../hooks';
import { RadioSelect } from '../../RadioSelect';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';
import RegisterBackButtonActionWithConfirmation from '../../../services/RegisterBackButtonActionWithConfirmation';

const categories = [
  'Allergology',
  'Angiology',
  'Cardiology',
  'Dentistry',
  'Dermatology',
  'Diabetology',
  'Endocrinology',
  'Gastroenterology',
  'Gynecology',
  'Hematology',
  'Hypertensiology',
  'Infectiology',
  'Internal Medicine',
  'Laryngology/ENT',
  'Nephrology',
  'Neurology',
  'Oncology',
  'Ophthalmology',
  'Orthopedics',
  'Other',
  'Psychiatry',
  'Pulmonology',
  'Rheumatology',
  'Surgery',
  'Toxicology',
  'Traumatology',
  'Urology',
  'Venereology',
];

export const AddPrescription = (props) => {
  const firebase = useContext(FirebaseContext);
  const category = useValue('Other');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(undefined);

  console.log('prescriptions', props.prescriptions)

  useEffect(() => {
    RegisterBackButtonActionWithConfirmation(
      props.f7router,
      routePath.Home,
      'Do you want to abort adding prescription?',
    );
  }, []);

  const handleSaveChanges = async () => {
    const newPrescription = {
      category: category.value,
      title,
      ...image,
    };

    try {
      await firebase.setUserData(
        COLLECTIONS.Prescriptions,
        firebase.authUserId,
        { prescriptions: [...props.prescriptions, newPrescription] },
      );
  
      props.f7router.app.dialog.alert('Prescription added!');
      props.f7router.navigate(routePath.PrescriptionList);
    } catch (error) {
      onError(error);
    }
  };

  const onError = (error) => {
    props.f7router.app.dialog.alert('An error occured: ', error.message);
  };

  const takePicture = () => new Promise((resolve) => {
    if (!window.cordova) resolve(undefined);

    navigator.camera.getPicture(
      (imageData) => resolve(imageData),
      (error) => {
        onError(error);
        return resolve(null);
      },
      {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
        targetWidth: 360,
        targetHeight: 640,
      },
    );
  });

  const handleAddPrescription = async () => {
    const imageData = await takePicture();
    if (!imageData) return;

    setImage({
      src: 'data:image/jpeg;base64,' + imageData,
      date: Date.now(),
    });
  };

  return (
    <Page>
      <Topbar title="Prescriptions" />
      <UnderlinedHeader title="Add prescription" />
      <PageContent className="no-padding-top">
        <List>
          <ListInput
            floatingLabel
            label="Title"
            type="text"
            placeholder="Prescription title"
            value={title}
            onInput={(e) => {
              setTitle(e.target.value);
            }}
          />
          <RadioSelect
            title="Category"
            options={categories}
            {...category}
          />
        </List>
        <Block>
          {!isEmpty(image) && <img src={image.src} className={mergeStyles({ width: '100%' })} />}
          <Button
            fill
            onClick={!isEmpty(image) ? () => handleSaveChanges() : () => handleAddPrescription()}
          >
            {!isEmpty(image) ? 'Save' : 'Take picture'}
          </Button>
        </Block>
      </PageContent>
    </Page>
  );
};

AddPrescription.propTypes = {
  f7router: PropTypes.object,
  prescriptions: PropTypes.array,
};
