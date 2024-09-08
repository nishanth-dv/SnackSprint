import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { useFilterData } from "../utils/customHooks/useFilterData";
import useFetchRestrauntMenu from "../utils/customHooks/useFetchRestrauntMenu";
import MenuCardComponent from "./MenuCardComponent";

const RestrauntComponent = () => {
  const { resId } = useParams();

  const restrauntMenu = useFetchRestrauntMenu(resId);

  if (!restrauntMenu) return <ShimmerComponent from="menu" />;

  const { name } = restrauntMenu.data.cards[2].card.card.info;

  const itemCards = useFilterData(
    restrauntMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
      (c) => c?.card?.card.itemCards
    )
  );

  return (
    <div className="p-12">
      <h1 className="text-orange-600 text-4xl font-semibold">{name}</h1>
      <h2 className="text-gray-500 mt-5 text-2xl font-[cursive]">Menu</h2>
      <ul className="flex flex-wrap flex-col px-[10%]">
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <MenuCardComponent
              name={item.card.info.name}
              imageInfo={item.card.info.imageId}
              cuisines={item.card.info.category}
              costForTwo={
                item.card.info.defaultPrice / 100 || item.card.info.price
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntComponent;
