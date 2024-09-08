const ShimmerComponent = ({ from }) => {
  const className =
    from === "menu"
      ? "p-4 m-4 w-[100%] h-24 bg-gray-300 rounded-lg shadow-lg cursor-wait animate-pulse-gray"
      : "p-4 m-4 w-[250px] h-[400px] bg-gray-300 rounded-lg shadow-lg cursor-wait animate-pulse-gray";
  return (
    <div className="flex flex-wrap justify-center">
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
    </div>
  );
};

export default ShimmerComponent;
