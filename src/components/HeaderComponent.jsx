import { useRef } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { useSelector } from "react-redux";
import ModalComponent from "./ModalComponent";

const HeaderComponent = () => {
  const modalRef = useRef(null);
  const isOnline = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const handleOpenCart = () => {
    modalRef?.current?.openModal();
  };
  const navigateBackHome = () => {
    navigate("/");
  };
  return (
    <>
      <ModalComponent ref={modalRef} />
      <div className="flex justify-between bg-orange-600 shadow-lg">
        <div className="flex items-center">
          <img className="w-40" src={LOGO_URL} />
          <label
            className="m-5 text-2xl text-white font-[cursive] cursor-pointer"
            onClick={navigateBackHome}
          >
            Snack Sprint
          </label>
        </div>
        <div className="flex items-center text-white">
          <ul className="flex p-8 font-[cursive] text-lg">
            {isOnline && (
              <>
                <li className="px-5 hover:text-gray-500">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-gray-400" : undefined
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="px-5 hover:text-gray-500">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-gray-400" : undefined
                    }
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="px-5 hover:text-gray-500">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-gray-400" : undefined
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
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
