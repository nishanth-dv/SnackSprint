import React from "react";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
    };
  }
  render() {
    const { name, city, contact } = this.props;
    const { rating } = this.state;
    return (
      <div className="user-info">
        <h2>Name: {name}</h2>
        <h4>City: {city}</h4>
        <h4>Contact: {contact}</h4>
        <p>Rating: {rating}</p>
        <button
          onClick={() => {
            this.setState({
              rating: rating + 1,
            });
          }}
        >
          Rate
        </button>
      </div>
    );
  }
}

export default UserComponent;
