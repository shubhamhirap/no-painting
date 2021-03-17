import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import DropdownList from "../components/DropdownList";
import Input from "../components/Input";
import Label from "../components/Label";
import RadioButton from "../components/RadioButton";

const FormatContainer = () => {
  return (
    <div id="format-container">
      <div id="close-icon-format">
        <GiCrossedBones />
      </div>
      <div className="formatContainer mt-3">
        <h6 className="format-heading">Sign Size</h6>
        <fieldset id="format-group1">
          <RadioButton id={`inch`} name={`group1`} />
          <Label htmlFor={`inch`} labelText={`Inch`} />
          <RadioButton id={`feet`} name={`group1`} />
          <Label htmlFor={`feet`} labelText={`Feet`} />
        </fieldset>
        <DropdownList defaultValue={`6 ft`} extraClass="DropdownList" />

        <div className="mt-3">
          <h6>Material</h6>
          <fieldset id="format-group2">
            <div>
              <RadioButton id={`rubber`} name={`group2`} />
              <Label htmlFor={`rubber`} labelText={`Rubber`} />
            </div>
            <div>
              <RadioButton id={`mesh`} name={`group2`} />
              <Label htmlFor={`mesh`} labelText={`Mesh`} />
            </div>
          </fieldset>
        </div>
        <div className="mt-3">
          <h6>Parameter</h6>
          <fieldset id="format-group3">
            <div>
              <RadioButton id={`value1`} name={`group3`} />
              <Label htmlFor={`value1`} labelText={`Value1`} />
            </div>
            <div>
              <RadioButton id={`value2`} name={`group3`} />
              <Label htmlFor={`value2`} labelText={`Value2`} />
            </div>
          </fieldset>
        </div>
        <div className="mt-3">
          <h6>Background Color</h6>
          <Input type="color" id="color-selector" name="color selector" />
        </div>
      </div>
    </div>
  );
};

export default FormatContainer;
