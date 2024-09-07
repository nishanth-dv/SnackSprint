import React from "react";
import { USER_URL } from "../utils/constants";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dummy",
      login: "dummy-xyz",
    };
  }
  async componentDidMount() {
    const response = await fetch(USER_URL);

    const json = await response.json();

    this.setState(json);
  }

  render() {
    const { name, login, avatar_url } = this.state;
    const { city } = this.props;
    return (
      <div className="user-info">
        <img className="profile-image" src={avatar_url} alt="profile-icon" />
        <h2>Name: {name}</h2>
        <h4>City: {city}</h4>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserComponent;
