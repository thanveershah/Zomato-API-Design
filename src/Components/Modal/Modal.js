import React from "react";
import { dynamicHandleChange } from "../../Utils/Function";
import axios from "axios";
import ModalInput from "./ModalInput";

class Modal extends React.PureComponent {
  state = {
    location: "",
    cities: []
  };

  showCities = () => {
    const { location } = this.state;

    axios
      .get(
        `https://developers.zomato.com/api/v2.1/locations?query=${location}&count=2`,
        {
          headers: {
            "Content-type": "application/json",
            "user-key": "864046d202c9dc2a4d136e0219029813"
          }
        }
      )
      .then(response => {
        this.setState({
          cities: response.data.location_suggestions
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  displayAllCities = () => {
    const { cities } = this.state;
    if (cities.length) {
      return cities.map((cities, key) => (
        <div
          className="city-holder"
          key={key}
          onClick={() => this.setCity(cities)}
        >
          <span>{cities.title + "-" + cities.city_name}</span>
        </div>
      ));
    }
  };

  setCity = cities => {
    localStorage.clear();
    localStorage.setItem("cities", JSON.stringify(cities));
    this.props.history.push("/home");
  };

  render() {
    const { location } = this.state;
    return (
      <div className="modal-wrapper">
        <ModalInput
          location={this.state.location}
          component={this}
          showCities={this.showCities}
          displayAllCities={this.displayAllCities}
        />
        <h5>Designed and Developed by Thanveer Shah</h5>
      </div>
    );
  }
}

export default Modal;
