import { Page, Button, Col } from 'framework7-react';
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
 

  return (
    <Page>
      <Topbar title="Profile" />
      <Col className={mergeStyles({ textAlign: '-webkit-center'})}>


  <div className={mergeStyles({ width: '250px', height: '150px' })}>
  <div className="item-title">Age</div>
      <div className="block block-strong">
       <div className="range-slider range-slider-init" data-label="true" data-value-left="18" data-value-right="122" >
  <input type="range" min="18" max="122" step="1" value="10" />
       </div>
      </div>
      </div>
      
      <div className={mergeStyles({ width: '100px', height: '150px' })}>
      <div className="item-content item-input"></div>
        <div className="item-inner">
        <div className="item-title item-label">Sex</div>
        <div className="block block-strong">
          <div className="item-input-wrap input-dropdown-wrap">
            <select name="gender">
              <option value="male" >Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          </div>
      </div>
      </div>

      <div className={mergeStyles({ width: '250px', height: '250px' })}>
      <div className="block-title">Weight(kg)</div>
      <div className="block block-strong">
       <div className="range-slider range-slider-init" data-label="true" data-value-left="30" data-value-right="200" >
  <input type="range" min="30" max="200" step="1" value="10" />
       </div>
      </div>

      <div className="block-title">Height(cm)</div>
      <div className="block block-strong">
       <div className="range-slider range-slider-init" data-label="true" data-value-left="130" data-value-right="220" >
  <input type="range" min="130" max="220" step="1" value="10" />
       </div>
      </div>

        <div className="item-content item-input"></div>
        <div className="item-inner">
        <div className="item-title item-label">Place of Residence</div>
        <div className="block block-strong">
          <div className="item-input-wrap input-dropdown-wrap">
            <select placeholder="Please choose...">
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
          
          </div>
          </div>
          </div>

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">High Cholesterol</div>
      </div>
  </a>
</div>
</li>

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">High Cholesterol</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">High Cholesterol</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Diabetes</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Hypertension</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Smoking</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Frequent alcohol consumption</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Coronary disease</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Contact lenses</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Chronic obstructive pulmonary disease</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Asthma</div>
      </div>
  </a>
</div>
</li> 

<li>
<div className="item-input-wrap input-dropdown-wrap">
  <a className="smart-select smart-select-init">
    <select name="High Cholesterol">
      <option value="unknown" selected>Unknown</option>
      <option value="yes">Yes</option>
      <option value="pear">No</option>
    </select>
      <div className="item-inner">
        <div className="item-title">Atherosclerosis</div>
      </div>
  </a>
</div>
</li> 
  
  <Button
            fill
            onClick={Save}
            className={mergeStyles({ width: '50%'})}
          >
            Apply
          </Button>

      </div>
      
      </Col>
      </Page>


)
 };




Profile.propTypes = {
  f7router: PropTypes.object,
};
