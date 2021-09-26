//imported file
import React from "react";
//name update component
const NameUpdate = (props) => {
  let updatedName = "";
  for (const nameSingle of props.nameData) {
    if (updatedName === "") {
      updatedName = updatedName + nameSingle;
    } else {
      updatedName = updatedName + ", " + nameSingle;
    }
  }
  return <div>{updatedName}</div>;
};

export default NameUpdate;
