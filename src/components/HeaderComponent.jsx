import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-placeholder">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
