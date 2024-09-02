import { IMAGE_URL } from "../utils/constants";

const MenuCardComponent = ({ name, cuisines, costForTwo, imageInfo }) => {
  return (
    <div className="restraunt-card">
      <img
        className="restraunt-logo"
        src={`${IMAGE_URL}/${imageInfo}`}
        alt="restraunt-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default MenuCardComponent;
