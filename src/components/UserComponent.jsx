const UserComponent = (props) => {
  return (
    <div className="user-info">
      <h2>Name: {props.name}</h2>
      <h4>City: {props.city}</h4>
      <h4>Contact: {props.contact}</h4>
    </div>
  );
};

export default UserComponent;
