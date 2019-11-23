import React from "react";
import { dynamicHandleChange } from "../../Utils/Function";
export default props => {
  return (
    <div className="modal-container">
      <input
        type="text"
        name="location"
        value={props.location}
        onChange={event => dynamicHandleChange(event, props.component)}
        onKeyUp={props.showCities}
        placeholder="Enter your location"
      />
      <div className="autocomplete-wrapper">{props.displayAllCities()}</div>
    </div>
  );
};
