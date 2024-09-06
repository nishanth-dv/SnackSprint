import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { useFilterData } from "../customHooks/useFilterData";
import MenuCardComponent from "./MenuCardComponent";

const RestrauntComponent = () => {
  const [restrauntMenu, setRestrauntMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_URL}${resId}`);

    const menuItems = await response.json();

    setRestrauntMenu(menuItems);
  };

  if (!restrauntMenu) return <ShimmerComponent />;

  const { name } = restrauntMenu.data.cards[2].card.card.info;

  const itemCards = useFilterData(
    restrauntMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
      (c) => c?.card?.card.itemCards
    )
  );

  return (
    <div className="name">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul className="menu-container">
        {itemCards?.map((item) => (
          <MenuCardComponent
            key={item.card.info.id}
            name={item.card.info.name}
            imageInfo={item.card.info.imageId}
            cuisines={item.card.info.category}
            costForTwo={
              item.card.info.defaultPrice / 100 || item.card.info.price
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default RestrauntComponent;
