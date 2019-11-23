import React from "react";
import { dynamicHandleChange } from "../../Utils/Function";
import Filter from "./Filter";

export default props => {
  const { keyPress, component, searchBar } = props;
  return (
    <div className="search-two-container">
      <div className="search-bar">
        <input
          type="text"
          name="searchBar"
          value={searchBar}
          placeholder="Search Restaurants"
          onKeyDown={keyPress}
          onChange={event => dynamicHandleChange(event, component)}
        />
      </div>
      {props.displayHostelsBasedTwo().length > 0 && (
        <Filter
          lowestToHighest={props.lowestToHighest}
          highestToLowest={props.highestToLowest}
        />
      )}
      <div className="hotel-list">{props.displayHostelsBasedTwo()}</div>
    </div>
  );
};
