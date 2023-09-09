"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

const Modal = ({
  opened,
  onClose,
  children,
  title,
  contentClassName,
  dialogEnterFromAnimation,
  dialogEnterTransition,
  dialogEnterToAnimation,
  dialogLeaveTransition,
  dialogLeaveFromAnimation,
  dialogLeaveToAnimation,
  className,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  // if(!onClose){
  //     onClose = () => {
  //         setModalOpened(false);
  //     }
  // }

  useEffect(() => {
    setModalOpened(opened || false);
  }, [opened]);

  useEffect(() => {
    if (modalOpened) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [modalOpened]);

  return (
    <>
      <Transition appear show={modalOpened} as={Fragment}>
        <Dialog
          as="div"
          className="relative  z-[9999]"
          onClose={() => {
            if (onClose && typeof onClose === "function") {
              onClose();
            } else {
              setModalOpened(false);
            }
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[10px]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className={`h-full w-full ${className}`}>
              <Transition.Child
                as={Fragment}
                enter={dialogEnterTransition || "ease-out duration-300"}
                enterFrom={dialogEnterFromAnimation || "opacity-0 scale-95"}
                enterTo={dialogEnterToAnimation || "opacity-100 scale-100"}
                leave={dialogLeaveTransition || "ease-in duration-200"}
                leaveFrom={
                  dialogLeaveFromAnimation ||
                  dialogEnterToAnimation ||
                  "opacity-100 scale-100"
                }
                leaveTo={
                  dialogLeaveToAnimation ||
                  dialogEnterFromAnimation ||
                  "opacity-0 scale-95"
                }
              >
                <Dialog.Panel
                  className={`w-full max-h-full overflow-y-auto transform overflow-hidden text-left align-middle transition-all ${contentClassName}`}
                >
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
