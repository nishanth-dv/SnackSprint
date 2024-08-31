const RestrauntCard = ({
  name,
  cuisines,
  costForTwo,
  imageInfo,
  averageRating,
}) => {
  return (
    <div className="restraunt-card">
      <img
        className="restraunt-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageInfo}`}
        alt="restraunt-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestrauntCard;
