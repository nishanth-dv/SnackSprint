import { useRef } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { useSelector } from "react-redux";
import ModalComponent from "./ModalComponent";

const HeaderComponent = () => {
  const modalRef = useRef(null);
  const isOnline = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const handleOpenCart = () => {
    modalRef?.current?.openModal();
  };
  return (
    <>
      <ModalComponent ref={modalRef} />
      <div className="flex justify-between bg-orange-600 shadow-lg">
        <div className="logo-placeholder">
          <img className="w-40" src={LOGO_URL} />
        </div>
        <div className="flex items-center text-white">
          <ul className="flex p-8">
            {isOnline && (
              <>
                <li className="px-5 hover:text-gray-500">
                  <Link to="/">Home</Link>
                </li>
                <li className="px-5 hover:text-gray-500">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="px-5 hover:text-gray-500">
                  <Link to="/contact">Contact</Link>
                </li>
                <li
                  className="px-5 hover:text-gray-500 cursor-pointer"
                  onClick={handleOpenCart}
                >
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="p-2 select-none">{cartItems.length}</span>
                </li>
              </>
            )}
            <li className="px-5 text-lg text-[aliceblue] font-[cursive]">
              {!isOnline && "Seems like you're offline!"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
