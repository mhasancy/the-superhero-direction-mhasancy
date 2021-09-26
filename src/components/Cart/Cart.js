//imported file
import React from "react";
import NameUpdate from "../NameUpdate/NameUpdate";
//cart component
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const participant of cart) {
    total = total + participant.fee;
  }
  return (
    <div>
      <div>
        <h3>{props.cart.name}</h3>
        <h3>University Joined: {props.cart.length}</h3>
      </div>
      <div>
        <h3>Total Fund : $ {total} </h3>
      </div>
      <div>
        {cart.map((participant) => (
          <NameUpdate
            key={participant.key}
            participant={participant}
          ></NameUpdate>
        ))}
      </div>
    </div>
  );
};

export default Cart;
