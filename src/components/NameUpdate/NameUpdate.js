/* import React from "react";

const NameUpdate = (props) => {
  let nameUpdate = "";
  props.name.map((nameObject) => {
    nameUpdate = nameUpdate + nameObject.name;
    return nameUpdate;
  });
  return (
    <div className="name-update">
      <li>{nameUpdate}</li>
    </div>
  );
};

export default NameUpdate;
 */
import React from "react";

const NameUpdate = (props) => {
  console.log(props.university.name);
  return (
    <div>
      <li>{props.university.name}</li>
    </div>
  );
};

export default NameUpdate;
