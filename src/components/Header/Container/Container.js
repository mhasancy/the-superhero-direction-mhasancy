import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import University from "../../University/University";
import "./Container.css";
const Container = () => {
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    fetch("./universities.json")
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, []);

  const handleDonationCart = (university) => {
    const newCart = [...cart, university];
    setCart(newCart);
  };

  return (
    <div className="container-main">
      <div className="university-container">
        {universities.map((university) => (
          <University
            key={university.id}
            university={university}
            handleDonationCart={handleDonationCart}
          ></University>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Container;
