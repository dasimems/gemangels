import { Transition } from "@headlessui/react";
import React from "react";
import BankCard from "./BankCard";

const BankList = ({ show }) => {
  return (
    <Transition
      as={"div"}
      show={show}
      enter="ease-out duration-300"
      enterFrom="scale-y-0"
      enterTo="scale-y-100"
      leave="ease-out duration-300"
      leaveFrom="scale-y-100"
      leaveTo="scale-y-0"
      className="w-full origin-top"
    >
      {new Array(4).fill(0).map((_, index) => (
        <BankCard key={index} />
      ))}
    </Transition>
  );
};

export default BankList;
