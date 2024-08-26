import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-placeholder">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
