import React from "react";
import NameUpdate from "../NameUpdate/NameUpdate";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);
  //   console.log(props);

  let total = 0;
  for (const university of cart) {
    total = total + university.donations;
  }
  return (
    <div>
      <div>
        <h3>{props.cart.name}</h3>
        <h3>Item added:{props.cart.length}</h3>
      </div>
      <div>
        <h3>Total:$ {total} </h3>
      </div>
      <div>
        {cart.map((university) => (
          <NameUpdate key={university} university={university}></NameUpdate>
        ))}
      </div>
    </div>
  );
};

export default Cart;
