import { useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useNavigate, useParams } from "react-router-dom";
import useFetchRestrauntMenu from "../utils/customHooks/useFetchRestrauntMenu";
import CategoryComponent from "./CategoryComponent";
import Scrollbars from "react-custom-scrollbars";

const RestrauntComponent = () => {
  const { resId } = useParams();
  const navigate = useNavigate();
  const [showIndex, setShowIndex] = useState(null);

  const restrauntMenu = useFetchRestrauntMenu(resId);

  if (!restrauntMenu) return <ShimmerComponent from="menu" />;

  const { name } = restrauntMenu.data.cards[2].card.card.info || "Loading...";

  const categories =
    restrauntMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="px-12 py-6">
      <div className="flex">
        <div
          className="flex items-center cursor-pointer mb-12"
          onClick={backToHomePage}
        >
          <p>
            <i className="fa-solid fa-backward my-auto text-2xl" />
          </p>
          <p className="ml-3 font-[cursive] text-lg">
            Back to other Restraunts
          </p>
        </div>
        <div className="text-center ml-[25%]">
          <h1 className="text-orange-600 text-4xl font-bold font-[cursive]">
            {name}
          </h1>
          <h2 className="text-gray-500 mt-2 text-2xl font-[cursive]">Menu</h2>
        </div>
      </div>
      <Scrollbars style={{ height: "calc(100vh - 290px)", width: "100%" }}>
        <ul className="flex flex-wrap flex-col px-[10%]">
          {categories?.map((item, index) => (
            <li key={item?.card?.card?.title}>
              <CategoryComponent
                info={item?.card?.card}
                showItem={index === showIndex}
                setShowIndex={() => {
                  setShowIndex(showIndex === index ? null : index);
                }}
              />
            </li>
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default RestrauntComponent;
