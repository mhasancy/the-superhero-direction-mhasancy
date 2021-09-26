//imported file
import React from "react";
import "./Participant.css";
//participant component
const Participant = (props) => {
  //destructuring
  const { name, type, img, location, established, fee } = props.participant;
  return (
    <div className="single-card">
      <div className="img-participant-single">
        <img src={img} alt="" />
      </div>
      <div className="h-tag-univ">
        <h2>{name}</h2>
      </div>
      <h4>Type: {type}</h4>
      <h4>Located: {location}</h4>
      <h4>Established : {established} BC</h4>
      <h3>
        Program Fee : <strong>${fee}</strong>
      </h3>
      <div className="btn-div">
        <button
          className="btn-general"
          onClick={() => props.handleDonationCart(props.participant)}
        >
          <i className="fas fa-hand-holding-usd"></i> add to cart
        </button>
      </div>
    </div>
  );
};

export default Participant;
