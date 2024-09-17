import { useEffect, useState, useRef } from "react";
import RestrauntCard from "./RestrauntCard";
import ShimmerComponent from "./ShimmerComponent";
import { DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFilterData } from "../utils/customHooks/useFilterData";
import { Scrollbars } from "react-custom-scrollbars";
import { promotedRestraunt } from "../HOC/RestrauntCardPromoted";

let allRestraunts = [];
const BodyComponent = () => {
  const [filterButtonMessage, setFilterButtonMessage] = useState(
    "Top Rated Restraunts"
  );
  const [restrauntList, setRestrauntList] = useState([]);
  const searchText = useRef(null);
  const RestrauntCardPromoted = promotedRestraunt(RestrauntCard);

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

  const filterRestraunts = (filterBy) => {
    if (filterBy === "Top Rated") {
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
    } else if (filterBy === "Search Results") {
      const filteredRestrauntList = allRestraunts.filter((res) =>
        res.info.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchText?.current?.toLowerCase().split(" ").join(""))
      );
      setRestrauntList(filteredRestrauntList);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <input
            type="text"
            placeholder="Search Restraunts"
            data-testid="search-input"
            className="border border-solid border-gray-400 p-1 m-4 rounded-md pl-1"
            onChange={(event) => {
              searchText.current = event.target.value;
            }}
          />
          <button
            data-testid="search"
            className="px-4 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500"
            onClick={() => filterRestraunts("Search Results")}
          >
            Search
          </button>
          <button
            className="px-4 py-1 ml-4 bg-gray-500 hover:bg-gray-600 rounded-md text-white"
            onClick={() => filterRestraunts("Top Rated")}
          >
            {filterButtonMessage}
          </button>
        </div>
      </div>
      <Scrollbars style={{ height: "calc(100vh - 250px)", width: "100%" }}>
        <div className="flex flex-wrap justify-center">
          {restrauntList.length === 0 ? (
            <ShimmerComponent />
          ) : (
            restrauntList.map((restraunt, index) => (
              <Link
                key={`${restraunt.info.id}${index}`}
                to={`/Restraunt/${restraunt.info.id}`}
              >
                {restraunt.info.avgRating > 4.5 ? (
                  <RestrauntCardPromoted
                    name={restraunt.info.name}
                    imageInfo={restraunt.info.cloudinaryImageId}
                    cuisines={restraunt.info.cuisines.slice(0, 3)}
                    costForTwo={restraunt.info.costForTwo}
                  />
                ) : (
                  <RestrauntCard
                    name={restraunt.info.name}
                    imageInfo={restraunt.info.cloudinaryImageId}
                    cuisines={restraunt.info.cuisines.slice(0, 3)}
                    costForTwo={restraunt.info.costForTwo}
                  />
                )}
              </Link>
            ))
          )}
        </div>
      </Scrollbars>
    </div>
  );
};

export default BodyComponent;
