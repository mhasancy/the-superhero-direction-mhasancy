//imported ifle
import React from "react";
//name update component
const NameUpdate = (props) => {
  console.log(props.participant.name);
  return (
    <div>
      <li>{props.participant.name}</li>
    </div>
  );
};

export default NameUpdate;
