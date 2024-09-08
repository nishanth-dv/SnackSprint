import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import ShimmerComponent from "./ShimmerComponent";
import { DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFilterData } from "../utils/customHooks/useFilterData";

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
    <div>
      <div className="flex justify-center">
        <div>
          <input
            type="text"
            className="border border-solid border-gray-400 p-1 m-4 rounded-md"
          />
          <button className="px-4 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500">
            Search
          </button>
          <button
            className="px-4 py-1 ml-4 bg-gray-500 hover:bg-gray-600 rounded-md text-white"
            onClick={filterRestraunts}
          >
            {filterButtonMessage}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {restrauntList.map((restraunt, index) => (
          <Link
            key={`${restraunt.info.id}${index}`}
            to={`/Restraunt/${restraunt.info.id}`}
          >
            <RestrauntCard
              name={restraunt.info.name}
              imageInfo={restraunt.info.cloudinaryImageId}
              cuisines={restraunt.info.cuisines.slice(0, 3)}
              costForTwo={restraunt.info.costForTwo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
