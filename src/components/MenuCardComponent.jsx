import { IMAGE_URL } from "../utils/constants";

const MenuCardComponent = ({
  name,
  cuisines,
  costForTwo,
  imageInfo,
  description,
}) => {
  return (
    <div className="p-4 mx-4 my-3 w-[100%] h-28 bg-gray-200 flex items-center rounded-lg shadow-lg">
      <img
        className="w-[10%] h-10% p-[1%] object-contain rounded-[25px]"
        src={`${IMAGE_URL}/${imageInfo}`}
        alt="restraunt-logo"
      />
      <div>
        <h3 className="font-extrabold font-[cursive] text-orange-500">
          {name} - Rs.{costForTwo}
        </h3>
        <h4 className="text-sm font-bold font-[cursive] py-2">{cuisines}</h4>
        <p className="text-xs font-[cursive] font-semibold text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MenuCardComponent;
