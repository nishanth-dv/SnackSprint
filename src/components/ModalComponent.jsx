import { forwardRef, useImperativeHandle, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  clearCart,
  deleteItem,
} from "../utils/redux/store-slices/cartSlice";
import { useDispatch } from "react-redux";

const ModalComponent = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      modalRef?.current?.showModal();
    },
    closeModal: () => {
      modalRef?.current?.close();
    },
  }));

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleDelete = (item) => {
    dispatch(deleteItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleClose = () => {
    modalRef?.current?.close();
  };

  return (
    <dialog
      id="modal-dialog"
      className="p-6 bg-gray-300 rounded-lg shadow-lg w-2/4 h-2/4"
      ref={modalRef}
    >
      <div className="flex justify-between items-center font-[cursive] mb-4">
        <h2
          className="text-2xl font-semibold text-gray-800"
          onClick={handleClose}
        >
          Cart
        </h2>
        <i
          className="fa-solid fa-x text-lg cursor-pointer"
          onClick={handleClose}
        />
      </div>
      {cartItems.length > 0 ? (
        <>
          <Scrollbars style={{ height: "calc(45vh - 100px)" }}>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-center my-2"
                >
                  <div className="p-2 w-[95%] bg-gray-400 rounded-lg font-[cursive] font-semibold text-gray-800 flex justify-between cursor-default">
                    {item.name} X {item.quantity}
                    <div>
                      <i
                        className="fa-solid fa-plus text-gray-700 cursor-pointer mx-4 hover:text-gray-900"
                        onClick={() => handleAdd(item.name)}
                      />
                      <i
                        className="fa-solid fa-minus text-gray-700 cursor-pointer mx-2 hover:text-gray-900"
                        onClick={() => handleRemove(item.name)}
                      />
                    </div>
                  </div>
                  <i
                    className="fa-solid fa-trash text-gray-700 text-lg cursor-pointer mx-5 hover:text-gray-900"
                    onClick={() => handleDelete(item.name)}
                  />
                </li>
              ))}
            </ul>
          </Scrollbars>
          <footer className="float-right">
            <button
              className="p-2 mr-2 select-none text-gray-700 border-none font-[cursive]"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button className="p-2 rounded-lg bg-orange-500 select-none text-white border-none cursor-not-allowed font-[cursive]">
              Procced to Payment
              <i className="fa-solid fa-truck-fast ml-2" />
            </button>
          </footer>
        </>
      ) : (
        <div className="text-center py-16 font-[cursive]">
          <h2 className="text-2xl">It's empty here!</h2>
          <h2 className="mt-3">Add items to your cart to start with.</h2>
        </div>
      )}
    </dialog>
  );
});

export default ModalComponent;
