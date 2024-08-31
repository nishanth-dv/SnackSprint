import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
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
    setRestrauntList(filteredData);
  };

  if (restrauntList.length === 0) return <ShimmerComponent />;

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restraunts</button>
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
