import { useState } from "react";
import MenuCardComponent from "./MenuCardComponent";

const CategoryComponent = ({ info, showItem, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <>
      <div
        className="cursor-pointer select-none p-4 m-4 w-[100%] h-16 bg-gray-200 flex justify-between items-center rounded-lg shadow-lg hover:bg-orange-400 transition-colors duration-150 ease-in-out"
        onClick={handleClick}
      >
        <span className="font-bold font-[cursive] text-lg text-gray-600">
          {info.title} ({info?.itemCards?.length})
        </span>
        <i
          className={`fa-solid fa-circle-chevron-down text-md ${
            showItem && `rotate-180`
          }`}
        />
      </div>
      {info?.itemCards?.map(
        (item, index) =>
          showItem && (
            <div key={item.card.info.imageId + index}>
              <MenuCardComponent
                name={item.card.info.name}
                imageInfo={item.card.info.imageId}
                cuisines={item.card.info.category}
                costForTwo={
                  item.card.info.defaultPrice / 100 || item.card.info.price
                }
                description={item.card.info.description}
              />
            </div>
          )
      )}
    </>
  );
};

export default CategoryComponent;
