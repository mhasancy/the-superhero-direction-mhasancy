import React from "react";
import "./University.css";
const University = (props) => {
  const { name, type, img, location, established, donations } =
    props.university;
  return (
    <div className="single-card">
      <div className="img-uni-single">
        <img src={img} alt="" />
      </div>
      <div className="h-tag-univ">
        <h2>{name}</h2>
      </div>
      <h4>Type: {type}</h4>
      <h4>Located: {location}</h4>
      <h4>Established : {established} BC</h4>
      <h3>
        Donation : <strong>${donations}</strong>
      </h3>
      <div className="btn-div">
        <button
          className="btn-general"
          onClick={() => props.handleDonationCart(props.university)}
        >
          <i class="fas fa-hand-holding-usd"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default University;
