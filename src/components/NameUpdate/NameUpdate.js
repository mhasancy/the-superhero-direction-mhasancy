//imported file
import React from "react";
//name update component
const NameUpdate = (props) => {
  let updatedName = "";
  for (const nameSingle of props.nameData) {
    updatedName = updatedName + nameSingle + ",";
  }
  return <div>{updatedName}</div>;
};

export default NameUpdate;
