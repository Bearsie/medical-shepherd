import { Block, Button, Page, PageContent } from 'framework7-react';
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
  const prescritionCategory = useSelectValue('Other');
  const [newPrescription, setNewPrescription] = useState(undefined);

  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  const handleSaveChanges = () => {
    //saveToFirebase([...props.prescriptions, newPrescription]);
  };

  const takePicture = (category) => {
    if (!window.cordova) return;

    navigator.camera.getPicture(
      (imageURI) => {
        setNewPrescription({
          category,
          imageURI,
          date: Date.now(),
        });
      },
      (error) => {
        props.f7router.app.dialog.alert(error.message);
      },
      {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 300,
        targetHeight: 400,
      }
    )
  }

  const handleAddPrescription = () => {
    takePicture(prescritionCategory);
  };

  console.log(newPrescription);

  return (
    <Page>
      <Topbar title="Prescriptions" />
      <UnderlinedHeader title="Add prescription" />
      <PageContent className="no-padding-top">
        <RadioSelect
          title="Category"
          options={categories}
          select={prescritionCategory}
        />
        {!newPrescription && 
          <Block>
            <Button
              fill
              onClick={() => handleAddPrescription()}
            >
              Scan prescription
            </Button>
          </Block>
        }
        {newPrescription &&
          <Block>
            <img src={newPrescription.imageURI} width={300} height={400} />
            <Button
              fill
              onClick={() => handleSaveChanges()}
            >
              Save changes
            </Button>
          </Block>
        }
      </PageContent>
    </Page>
  );
};

AddPrescription.propTypes = {
  f7router: PropTypes.object,
  prescriptions: PropTypes.array,
};
