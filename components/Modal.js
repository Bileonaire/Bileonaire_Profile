import React from "react";
import { useAppContext } from "../context/Context";
import CancelIcon from "@mui/icons-material/Cancel";
import Auth from "./AuthForm";

const Modal = () => {
  const { modalContent, setShowModal, showModal } = useAppContext();
  return (
    <>
      {showModal && (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full p-4 flex items-center justify-center">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="w-full flex justify-end">
              <CancelIcon
                onClick={() => setShowModal(false)}
                className="text-red-600 text-3xl cursor-pointer"
              />
            </div>
            {modalContent === "signin" && <Auth />}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
