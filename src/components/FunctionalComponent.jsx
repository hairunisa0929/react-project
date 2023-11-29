import React from "react";
import Button from "./Button";

function GuestGreeting(props) {
  const role = "user";

  return (
    <div>
      <h1>Hello {props.userName}</h1>
      <button onClick={() => props.getRole(role)}>Get Role</button>

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
