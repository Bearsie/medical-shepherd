import { Page, Block, Button, Col, List, ListItem, ListItemCell, BlockTitle, Range} from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { Topbar } from '../Topbar';
import {routePath} from '../../routes';
import { mergeStyles } from '@uifabric/merge-styles';


 export const Profile = (props) => {
  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []); 


  const Save = () => {
    props.f7router.navigate(routePath.Home);
  }

  const [age, setAge] = React.useState(18);
  const [weight, setWeight] = React.useState(30);
  const [height, setHeight] = React.useState(130);
  const [sex,setSex] = React.useState("Male");
  const [place,setPlace] = React.useState("Europe");
  const [diabetes,setDiabetesChoice] = React.useState("unknown");
  const [hypertension,setHypertensionChoice] = React.useState("unknown");
  const [cholesterol,setCholesterolChoice] = React.useState("unknown");
  const [smoking,setSmokingChoice] = React.useState("unknown");
  const [alcohol,setAlcoholChoice] = React.useState("unknown");
  const [coronary,setCoronaryChoice] = React.useState("unknown");
  const [lenses,setLensesChoice] = React.useState("unknown");
  const [pulmonary,setPulmonaryChoice] = React.useState("unknown");
  const [asthma,setAsthmaChoice] = React.useState("unknown");
  const [atherosclerosis,setAtherosclerosisChoice] = React.useState("unknown");
  const [aneurysm,setAneurysmChoice] = React.useState("unknown");
  const [vascular,setVascularChoice] = React.useState("unknown");
  const [hemophilia,setHemophiliaChoice] = React.useState("unknown");
 

  const handleChange = (setState) => (event) => { setState(event.target.value); }


return (
    <Page>
      <Topbar title="Profile" />
      <Col className={mergeStyles({ textAlign: '-webkit-center'})}>

       
    <div className={mergeStyles({ width: '300px', height: '100px' })}>
      <BlockTitle className="display-flex justify-content-space-between"><b>Age: {age}</b></BlockTitle>
        <List simpleList>
          <ListItem>
            <ListItemCell className="width-auto flex-shrink-0">
            </ListItemCell>
            <ListItemCell className="flex-shrink-3">
              <Range
                min={18}
                max={122}
                step={1}
                value={age}
                label={true}
                color="blue"
                onRangeChange={setAge.bind(this)}
              ></Range>
            </ListItemCell>
          </ListItem>
        </List>
    </div>
      
  <div className={mergeStyles({ width: '300px', height: '70px' })}>
    <List>
      <ListItem
        title="Sex"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="sex" defaultValue="Male" value = {sex} onChange={handleChange(setSex)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </ListItem>
    </List>
  </div>

    <div className={mergeStyles({ width: '300px', height: '100px' })}>
      <BlockTitle className="display-flex justify-content-space-between"><b>Weight(kg): {weight}</b></BlockTitle>
        <List simpleList>
          <ListItem>
            <ListItemCell className="width-auto flex-shrink-0">
            </ListItemCell>
            <ListItemCell className="flex-shrink-3">
              <Range
                min={30}
                max={200}
                step={1}
                value={weight}
                label={true}
                color="blue"
                onRangeChange={setWeight.bind(this)}
              ></Range>
            </ListItemCell>
          </ListItem>
        </List>
    </div>

    <div className={mergeStyles({ width: '300px', height: '100px' })}>
      <BlockTitle className="display-flex justify-content-space-between"><b>Height(cm): {height}</b></BlockTitle>
        <List simpleList>
          <ListItem>
            <ListItemCell className="width-auto flex-shrink-0">
            </ListItemCell>
            <ListItemCell className="flex-shrink-3">
              <Range
                min={130}
                max={220}
                step={1}
                value={height}
                label={true}
                color="blue"
                onRangeChange={setHeight.bind(this)}
              ></Range>
            </ListItemCell>
          </ListItem>
        </List>
    </div>

      <div className={mergeStyles({ width: '400px', height: '70px' })}>
    <List>
      <ListItem
        title="Place of Residence"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="placeOfResidence" defaultValue="Europe" value = {place} onChange={handleChange(setPlace)}>
              <option value="United States or Canada">United States or Canada</option>
              <option value="Latin or South America">Latin or South America</option>
              <option value="Europe">Europe</option>
              <option value="Northern Africa">Northern Africa</option>
              <option value="Central Africa">Central Africa</option>
              <option value="Southern Africa">Southern Africa</option>
              <option value="Australia and Oceania">Australia and Oceania</option>
              <option value="Russia, Kazakhstan or Mongolia">Russia, Kazakhstan or Mongolia</option>
              <option value="Southwestern Asia">Southwestern Asia</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="High Cholesterol"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="High Cholesterol" defaultValue="unknown" value = {cholesterol} onChange={handleChange(setCholesterolChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Diabetes"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Diabetes" defaultValue="unknown" value = {diabetes} onChange={handleChange(setDiabetesChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Hypertension"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Hypertension" defaultValue="unknown" value = {hypertension} onChange={handleChange(setHypertensionChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Smoking"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Smoking" defaultValue="unknown" value = {smoking} onChange={handleChange(setSmokingChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Frequent alcohol consumption"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Frequent alcohol consumption" defaultValue="unknown" value = {alcohol} onChange={handleChange(setAlcoholChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Coronary disease"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Coronary disease" defaultValue="unknown" value = {coronary} onChange={handleChange(setCoronaryChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Contact lenses"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Contact lenses" defaultValue="unknown" value = {lenses} onChange={handleChange(setLensesChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Obstructive pulmonary disease"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Obstructive pulmonary disease" defaultValue="unknown" value = {pulmonary} onChange={handleChange(setPulmonaryChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Asthma"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Asthma" defaultValue="unknown" value = {asthma} onChange={handleChange(setAsthmaChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Atherosclerosis"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Atherosclerosis" defaultValue="unknown" value = {atherosclerosis} onChange={handleChange(setAtherosclerosisChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Aortic aneurysm"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Aortic aneurysm" defaultValue="unknown" value = {aneurysm} onChange={handleChange(setAneurysmChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Peripheral vascular disease"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Peripheral vascular disease" defaultValue="unknown" value = {vascular} onChange={handleChange(setVascularChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

  <div className={mergeStyles({ width: '400px', height: '20px' })}>
    <List>
      <ListItem
        title="Hemophilia"
        smartSelect
        smartSelectParams={{openIn: 'sheet'}}
      >
        <select name="Hemophilia" defaultValue="unknown" value = {hemophilia} onChange={handleChange(setHemophiliaChoice)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unknown">Unknown</option>
        </select>
      </ListItem>
    </List>
  </div>

      <Block> 
        <Button
            large fill
            onClick={Save}
            
          >
            Apply
        </Button>
      </Block>  
     
     </Col>
      </Page>
)
 };

Profile.propTypes = {
  f7router: PropTypes.object,
};
