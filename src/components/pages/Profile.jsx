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


  <div className={mergeStyles({ width: '250px', height: '250px' })}>
  <div className="item-title">Years</div>
      <div className="block block-strong">
       <div className="range-slider range-slider-init" data-label="true" data-value-left="18" data-value-right="122" >
  <input type="range" min="18" max="122" step="1" value="10" />
       </div>
      </div>
      

      <div className="item-content item-input"></div>
        <div className="item-inner">
        <div className="item-title item-label">Sex</div>
        <div className="block block-strong">
          <div className="item-input-wrap">
            <select name="gender">
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          </div>
      </div>

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

<div className="list">
  <ul>
    <li>
      <label className="item-checkbox item-content">
        <input type="checkbox" name="demo-checkbox" value="High Cholesterol"/>
        <i className="icon icon-checkbox"></i>
        <div className="item-inner">
          <div className="item-title">High Cholesterol</div>
        </div>
      </label>
    </li>
    <li>
      <label className="item-checkbox item-content">
        <input type="checkbox" name="demo-checkbox" value="Hypertension"/>
        <i className="icon icon-checkbox"></i>
        <div className="item-inner">
          <div className="item-title">Hypertension</div>
        </div>
      </label>
    </li>
    <li>
      <label className="item-checkbox item-content">
        <input type="checkbox" name="demo-checkbox" value="Diabetes"/>
        <i className="icon icon-checkbox"></i>
        <div className="item-inner">
          <div className="item-title">Diabetes</div>
        </div>
      </label>
    </li>
    <li>
      <label className="item-checkbox item-content">
        <input type="checkbox" name="demo-checkbox" value="Tumor"/>
        <i className="icon icon-checkbox"></i>
        <div className="item-inner">
          <div className="item-title">Tumor</div>
        </div>
      </label>
    </li>
  </ul>
</div>

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
