import React from "react";
import { Edit, Delete } from "react-iconly";

const BankCard = () => {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="w-[3rem] h-[3rem] bg-slate-200 rounded-md"></div>

      <div className="flex flex-col gap-1 flex-1 text-xs md:text-sm">
        <h1 className="font-bold text-sm md:text-base">Account Name</h1>
        <p className="text-green-400">123****890</p>
        <p className="text-slate-500">Bank Name</p>
      </div>

      <div className="flex flex-col gap-4 justify-between items-end self-stretch ">
        <button className="p-2 rounded-md hover:bg-primary-lighter-100 hover:text-primary-lighter">
          <Edit size={17} />
        </button>
        <button className="p-2 rounded-md text-red-400 hover:bg-[rgba(255,0,0,.1)] hover:text-red-600">
          <Delete size={17} />
        </button>
      </div>
    </div>
  );
};

export default BankCard;
