import { IMAGE_URL } from "../utils/constants";

const MenuCardComponent = ({ name, cuisines, costForTwo, imageInfo }) => {
  return (
    <div className="p-4 m-4 w-[100%] h-24 bg-gray-200 flex justify-between items-center rounded-lg shadow-lg hover:bg-orange-400 transition-colors duration-150 ease-in-out">
      <img
        className="w-[10%] h-10% p-[1%] object-contain rounded-[25px]"
        src={`${IMAGE_URL}/${imageInfo}`}
        alt="restraunt-logo"
      />
      <h3 className="font-extrabold font-[cursive] text-gray-600">{name}</h3>
      <h4 className="font-bold font-[cursive]">{cuisines}</h4>
      <h4 className="font-bold font-[cursive] text-orange-900">{costForTwo}</h4>
    </div>
  );
};

export default MenuCardComponent;
