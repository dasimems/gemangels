import React, { useState } from "react";
import InputField from "../form/InputField";
import { Transition } from "@headlessui/react";
import Button from "../Button";
import { ArrowLeft, Plus } from "react-iconly";
import BankList from "./BankList";
import AddBank from "./AddBank";

const Bank = ({ show }) => {
  const className =
    "relative bg-transparent border-t-0 border-b border-l-0 border-r-0 rounded-none border-slate-500 placeholder:text-slate-500";
  const action = {
    add: "add",
    view: "view",
  };
  const [activeAction, setActiveAction] = useState(action.view);
  return (
    <Transition
      as={"div"}
      show={show}
      enter="ease-out duration-300"
      enterFrom="translate-x-[100%]"
      enterTo="translate-x-0"
      leave="ease-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-[100%]"
      className="flex flex-col w-full gap-6 shrink-0"
    >
      <div className="flex flex-1 gap-6 items-end">
        {activeAction === action.add ? (
          <button
            onClick={() => {
              setActiveAction(action.view);
            }}
            className="text-primary-lighter inline-flex items-center gap-2"
          >
            <span>
              <ArrowLeft set="bold" />
            </span>
            <span>Back</span>
          </button>
        ) : (
          <>
            <InputField
              className="flex-1"
              placeholder="Search banks"
              inputClassName={className}
            />
            <button
              onClick={() => {
                setActiveAction(action.add);
              }}
              className="text-primary-lighter inline-flex items-center gap-2"
            >
              <span>Add New</span>
              <span>
                <Plus />
              </span>
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col">
        <BankList show={activeAction === action.view} />
        <AddBank show={activeAction === action.add} />
      </div>
    </Transition>
  );
};

export default Bank;
