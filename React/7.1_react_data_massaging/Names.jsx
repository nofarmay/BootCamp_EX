import React from "react";

function Names({names}) {
  // console.log(names);
  return (
    <div>
      {names.map((name) => {
        return <h3>{name}</h3>;
      })}
    </div>
  );
}

export default Names;
