import { mergeStyles } from '@uifabric/merge-styles';
import { Block, Button, ListInput, Page, PageContent, List } from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RegisterBackButtonAction from '../../../services/RegisterBackButtonAction';
import { useSelectValue } from '../../hooks';
import { RadioSelect } from '../../RadioSelect';
import { Topbar } from '../../Topbar';
import { UnderlinedHeader } from '../../UnderlinedHeader';

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
  const category = useSelectValue('Other');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const handleSaveChanges = () => {
    const newPrescription = {
      category,
      title,
      ...image,
    };
    //saveToFirebase([...props.prescriptions, newPrescription]);
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
            select={category}
          />
        </List>
        <Block>
          {image && <img src={image.src} className={mergeStyles({ width: '100%' })} />}
          <Button
            fill
            onClick={image ? () => handleSaveChanges() : () => handleAddPrescription()}
          >
            {image ? 'Save' : 'Take picture'}
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
