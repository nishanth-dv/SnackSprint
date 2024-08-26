import RestrauntCard from "./RestrauntCard";

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restraunts</button>
      </div>
      <div className="restraunt-container">
        <RestrauntCard restraunt="Meghana Foods" />
      </div>
    </div>
  );
};

export default BodyComponent;
