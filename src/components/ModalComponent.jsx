import { forwardRef, useImperativeHandle, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";

const ModalComponent = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  const cartItems = useSelector((store) => store.cart.items);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      modalRef?.current?.showModal();
    },
    closeModal: () => {
      modalRef?.current?.close();
    },
  }));

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
        <h2 className="text-2xl font-semibold text-gray-800" onClick={handleClose}>
          Cart
        </h2>
        <i className="fa-solid fa-x text-lg" />
      </div>
      <Scrollbars style={{ height: "100vh - 100px", width: "100%" }}>
        <ul>
          {cartItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Scrollbars>
    </dialog>
  );
});

export default ModalComponent;
