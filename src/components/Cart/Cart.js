//imported file
import React from "react";
import NameUpdate from "../NameUpdate/NameUpdate";
//cart component
const Cart = (props) => {
  const { cart } = props;
  const { name } = props.cart;
  let total = 0;
  let arrName = [];
  for (const participant of cart) {
    const names = participant.name;
    if (arrName.includes(names)) {
      arrName = [...arrName];
    } else {
      arrName = [...arrName, names];
      total = total + participant.fee;
    }
  }

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h3>Universities Paid Fees: {arrName.length}</h3>
      </div>
      <div>
        <h3>Total Fund : $ {total} </h3>
      </div>
      <div>
        <NameUpdate nameData={arrName}></NameUpdate>
      </div>
    </div>
  );
};

export default Cart;
