import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import ShimmerComponent from "./ShimmerComponent";
import { DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFilterData } from "../customHooks/useFilterData";

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
    const response = await fetch(DATA_URL);
    const restrauntData = await response.json();
    const filteredData = useFilterData(
      restrauntData?.data?.cards.map(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
    );
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
          <Link
            key={`${restraunt.info.id}${index}`}
            to={`/Restraunt/${restraunt.info.id}`}
          >
            <RestrauntCard
              name={restraunt.info.name}
              imageInfo={restraunt.info.cloudinaryImageId}
              cuisines={restraunt.info.cuisines.join(", ")}
              costForTwo={restraunt.info.costForTwo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
