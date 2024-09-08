import { IMAGE_URL } from "../utils/constants";

const RestrauntCard = ({ name, cuisines, costForTwo, imageInfo }) => {
  return (
    <div className="p-4 m-4 w-[250px] h-[400px] bg-gray-300 rounded-lg shadow-lg hover:bg-orange-400 transition-colors duration-150 ease-in-out">
      <div className="relative">
        <img
          className="w-[100%] h-[200px] object-cover rounded-sm"
          src={`${IMAGE_URL}/${imageInfo}`}
          alt="restraunt-logo"
        />
        <div className="flex flex-col p-1 h-full">
          <h3 className="text-center py-0.5 text-gray-600 font-bold">{name}</h3>
          <ul className="mt-auto font-[cursive] text-center text-black">
            {cuisines.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <h4 className="absolute top-[350px] left-1/4 font-semibold text-orange-900">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
