//imported file
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Participant from "../Participant/Participant";
import "./ParticipantCartContainer.css";
//Participant Cart Container component
const ParticipantCartContainer = () => {
  //use state
  const [cart, setCart] = useState([]);
  const [participants, setParticipants] = useState([]);
  //fetching data with use effect
  useEffect(() => {
    fetch("./participants.json")
      .then((res) => res.json())
      .then((data) => setParticipants(data));
  }, []);
  //button handler
  const handleDonationCart = (participant) => {
    const newCart = [...cart, participant];
    setCart(newCart);
  };

  return (
    <div className="container-main">
      <div className="participant-container">
        {participants.map((participant) => (
          <Participant
            key={participant.id}
            participant={participant}
            handleDonationCart={handleDonationCart}
          ></Participant>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ParticipantCartContainer;
