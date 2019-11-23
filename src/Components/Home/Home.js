import React from "react";
import Header from "./Header";
import Search from "./Search";
import axios from "axios";
import Modal from "./Modal";
import SearchBaseTwo from "./SearchBaseTwo";
import Filter from "./Filter";

class Home extends React.PureComponent {
  state = {
    location: "",
    hotel: "",
    hotelList: [],
    hotelModal: {},
    modalShow: false,
    searchBar: "",
    hotelListTwo: []
  };

  /**
   * * Gets the list of data from the API Search Based (1)
   *
   */
  showHotelList = () => {
    const { hotel } = this.state;
    axios(`https://developers.zomato.com/api/v2.1/search?q=${hotel}&count=1`)
      .then(response => {
        const { restaurants = false } = response.data;
        if (restaurants) {
          this.setState({
            hotelList: restaurants
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * Gets the list of data from the API Search Based (2)
   *
   */
  showHotelListTwo = () => {
    const { searchBar } = this.state;
    axios(
      `https://developers.zomato.com/api/v2.1/search?q=${searchBar}&count=5`
    )
      .then(response => {
        const { restaurants = false } = response.data;
        if (restaurants) {
          this.setState({
            hotelListTwo: restaurants
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * Function to get the details of the specific hotel
   * @param key
   */
  getHotelDetails = key => {
    axios(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${key}`)
      .then(response => {
        const { data = false } = response;
        if (data) {
          this.setState({
            hotelModal: data,
            modalShow: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * Function to Close modal
   *
   */
  closeModal = () => {
    this.setState({
      modalShow: false,
      hotelModal: {}
    });
  };

  /**
   * Function to display Seach Based (1)
   *
   */

  displayHostels = () => {
    const { hotelList = false } = this.state;
    return hotelList.map((hostel, key) => {
      if (hostel.restaurant.featured_image && hostel.restaurant.name) {
        return (
          <div
            className="hotel-container"
            key={key}
            onClick={() => this.getHotelDetails(hostel.restaurant.id)}
          >
            <div className="hotel-image">
              <img src={hostel.restaurant.featured_image} alt="" />
            </div>
            <div className="hotel-name">
              <div>
                <strong>{hostel.restaurant.name}</strong>
              </div>
              <div>{hostel.restaurant.cuisines.substr(0, 35) + "..."}</div>
            </div>
            <div className="rating">
              <div>{hostel.restaurant.user_rating.aggregate_rating}</div>
            </div>
          </div>
        );
      }
    });
  };

  /**
   * Function to display Seach Based (2)
   *
   */

  displayHostelsBasedTwo = () => {
    const { hotelListTwo = false } = this.state;
    return hotelListTwo.map((hostel, key) => {
      if (hostel.restaurant.featured_image && hostel.restaurant.name) {
        return (
          <div
            className="container"
            key={key}
            onClick={() => this.getHotelDetails(hostel.restaurant.id)}
          >
            <div className="hotel-image">
              <img src={hostel.restaurant.featured_image} alt="" />
            </div>
            <div className="section-holder">
              <div className="hotel-name">
                <div>
                  <strong>{hostel.restaurant.name}</strong>
                </div>
                <div>{hostel.restaurant.cuisines.substr(0, 35) + "..."}</div>
              </div>
              <div className="rating">
                <div>{hostel.restaurant.user_rating.aggregate_rating}</div>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  /**
   * Sort from lowest to highest
   *
   */
  lowerToHighest = () => {
    let newArray = [...this.state.hotelListTwo];

    newArray.sort((a, b) =>
      a.restaurant.user_rating.aggregate_rating >
      b.restaurant.user_rating.aggregate_rating
        ? 1
        : -1
    );
    this.setState({
      hotelListTwo: newArray
    });
  };

  /**
   * Sort from lowest to highest
   *
   */
  lowestToHighest = () => {
    let newArray = [...this.state.hotelListTwo];

    newArray.sort((a, b) =>
      a.restaurant.user_rating.aggregate_rating >
      b.restaurant.user_rating.aggregate_rating
        ? 1
        : -1
    );
    this.setState({
      hotelListTwo: newArray
    });
  };

  /**
   * Sort from highest to lowest
   *
   */
  highestToLowest = () => {
    let newArray = [...this.state.hotelListTwo];

    newArray.sort((a, b) =>
      a.restaurant.user_rating.aggregate_rating <
      b.restaurant.user_rating.aggregate_rating
        ? 1
        : -1
    );
    this.setState({
      hotelListTwo: newArray
    });
  };

  render() {
    return (
      <main className="home-wrapper">
        <Header />
        <Search
          location={this.state.location}
          hotel={this.state.hotel}
          keyPress={this.showHotelList}
          component={this}
          displayHostels={this.displayHostels}
        />
        {this.state.modalShow && (
          <Modal
            hotelModal={this.state.hotelModal}
            modalShow={this.state.modalShow}
            closeModal={this.closeModal}
          />
        )}

        <SearchBaseTwo
          displayHostelsBasedTwo={this.displayHostelsBasedTwo}
          component={this}
          keyPress={this.showHotelListTwo}
          searchBar={this.state.searchBar}
          lowestToHighest={this.lowestToHighest}
          highestToLowest={this.highestToLowest}
        />
      </main>
    );
  }
}

export default Home;
