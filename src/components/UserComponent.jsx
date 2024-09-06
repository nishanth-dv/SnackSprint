import { useEffect, useState } from "react";

const UserComponent = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(count);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [count]);
  return (
    <div className="user-info">
      <h1>{count}</h1>
      <h2>Name: {props.name}</h2>
      <h4>City: {props.city}</h4>
      <h4>Contact: {props.contact}</h4>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default UserComponent;
