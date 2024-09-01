import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import ShimmerComponent from "./ShimmerComponent";

let allRestraunts = [];
const BodyComponent = () => {
  const [filterButtonMessage, setFilterButtonMessage] = useState(
    "Top Rated Restraunts"
  );
  const [restrauntList, setRestrauntList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restrauntData = await response.json();
    const filteredData = restrauntData?.data?.cards
      .map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      .filter((res) => res)
      .flat();
    allRestraunts = filteredData;
    setRestrauntList(filteredData);
  };

  const filterRestraunts = () => {
    if (filterButtonMessage === "Top Rated Restraunts") {
      setFilterButtonMessage("Show All Restraunts");
      const topRestraunts = restrauntList.filter(
        (res) => res.info.avgRating >= 4.5
      );
      setRestrauntList(topRestraunts);
    } else {
      setFilterButtonMessage("Top Rated Restraunts");
      setRestrauntList(allRestraunts);
    }
  };

  if (restrauntList.length === 0) return <ShimmerComponent />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-input" />
          <button>Search</button>
        </div>
        <button className="filter-btn" onClick={filterRestraunts}>
          {filterButtonMessage}
        </button>
      </div>
      <div className="restraunt-container">
        {restrauntList.map((restraunt, index) => (
          <RestrauntCard
            key={`${restraunt.info.id}${index}`}
            name={restraunt.info.name}
            imageInfo={restraunt.info.cloudinaryImageId}
            cuisines={restraunt.info.cuisines.join(", ")}
            costForTwo={restraunt.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
