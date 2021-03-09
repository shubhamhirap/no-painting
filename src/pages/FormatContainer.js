import React from "react";
import DropdownList from "../components/DropdownList";
import Input from "../components/Input";

const FormatContainer = () => {
  return (
    <div className="formatContainer mt-5">
      <h6 className="format-heading">Sign Size</h6>
      <fieldset id="format-group1">
        <Input
          type="radio"
          id="inch"
          name="group1"
          htmlFor="inch"
          labelText="Inch"
        />
        <Input
          type="radio"
          id="feet"
          name="group1"
          htmlFor="feet"
          labelText="Feet"
        />
      </fieldset>
      <DropdownList defaultValue={`6 ft`} extraClass="DropdownList" />

      <div className="mt-3">
        <h6>Material</h6>
        <fieldset id="format-group2">
          <div>
            <Input
              type="radio"
              id="rubber"
              name="group2"
              htmlFor="rubber"
              labelText="Rubber"
            />
          </div>
          <div>
            <Input
              type="radio"
              id="mesh"
              name="group2"
              htmlFor="mesh"
              labelText="Mesh"
            />
          </div>
        </fieldset>
      </div>
      <div className="mt-3">
        <h6>Parameter</h6>
        <fieldset id="format-group3">
          <div>
            <Input
              type="radio"
              id="value1"
              name="group3"
              htmlFor="value1"
              labelText="Value1"
            />
          </div>
          <div>
            <Input
              type="radio"
              id="value2"
              name="group3"
              htmlFor="value2"
              labelText="Value2"
            />
          </div>
        </fieldset>
      </div>
      <div className="mt-3">
        <h6>Background Color</h6>
        <Input type="color" id="color-selector" name="color selector" />
      </div>
    </div>
  );
};

export default FormatContainer;
