import React from "react";

export default props => {
  return (
    <div className="filter-section">
      <button onClick={props.lowestToHighest}>Lowest</button>
      <button onClick={props.highestToLowest}>Highest</button>
    </div>
  );
};
