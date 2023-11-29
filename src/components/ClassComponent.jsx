import React from "react";

class UserGreeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.userName}</h1>
      </div>
    );
  }
}

export default UserGreeting;
