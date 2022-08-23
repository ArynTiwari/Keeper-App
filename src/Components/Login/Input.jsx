import React from "react";

function Input(props) {
  if (props.placeholder === "a" && props.placeholder === "a") {
    return (
      <>
        <input type={props.type} placeholder={props.placeholder} />
      </>
    );
  }
  else{
    return(
      <>
      <h1>Wrong Id pass</h1>
      </>
    );
  }
}

export default Input;
