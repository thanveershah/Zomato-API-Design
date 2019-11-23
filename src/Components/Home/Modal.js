import React from "react";

const Modal = props => {
  return (
    <div
      className={`hotel-modal-wrapper ${
        props.modalShow ? "animate-modal" : ""
      }`}
    >
      <div className="container">
        <div className="close" onClick={props.closeModal}>
          x
        </div>
        <div className="image">
          <img src={props.hotelModal.featured_image} alt="" />
        </div>
        <div className="detail-container">
          <div className="hotel-name">
            <h2>{props.hotelModal.name}</h2>
            <div className="rating">
              {props.hotelModal.user_rating.aggregate_rating}
            </div>
          </div>
          <h5>
            <i className="fa fa-map-marker"></i>{" "}
            {props.hotelModal.location.locality}
          </h5>
          <h6>{props.hotelModal.location.locality_verbose}</h6>

          <div className="hotel-cussines">
            <p>
              <i className="fa fa-mobile"></i> {props.hotelModal.phone_numbers}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

// name;
// locality - Addr1;
// address - Addr2;
// timings;
// highlights, user_rating;
// aggregate_rating;
// photos_url;
// featured_image;

export default Modal;
