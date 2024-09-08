export const promotedRestraunt = (RestrauntCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute p-[1px] ml-[17px] z-10 text-white bg-black rounded-lg">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};
