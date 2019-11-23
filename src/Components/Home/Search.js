import React from "react";
import { dynamicHandleChange } from "../../Utils/Function";
import Hotel from "./Hotel";
import ModalInput from "../Modal/ModalInput";

const Search = props => {
  const { location, hotel, keyPress } = props;
  return (
    <section className="banner-container">
      <div className="banner-section">
        <h1>
          Find the best restaurants and cafés in
          <span> {JSON.parse(localStorage.cities).city_name}</span>
        </h1>

        <div className="search-holder">
          <div className="hotel-search-box">
            <input
              type="text"
              id="search-hotel"
              className="form-control"
              placeholder="Search Restaurants"
              name="hotel"
              value={hotel}
              onChange={event => dynamicHandleChange(event, props.component)}
              onKeyDown={keyPress}
            />
            <Hotel displayHostels={props.displayHostels} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
