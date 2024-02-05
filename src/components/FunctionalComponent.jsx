import React from "react";
import Button from "./Button";

function GuestGreeting(props) {
  const role = "user";
  // const { userName, image } = props;

  return (
    <div>
      <h1>Hello {props.userName}</h1>
      <img src={props.image} alt={props.userName} width={500} />
      {/* <button onClick={() => props.getRole(role)}>Get Role</button> */}

      {/* <Button
        onClick={() => props.getRole(role)}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Get Role
      </Button> */}
    </div>
  );
}

export default GuestGreeting;
