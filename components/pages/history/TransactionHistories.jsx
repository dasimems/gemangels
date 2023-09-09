import { winners } from "@/utils/general";
import { Transition } from "@headlessui/react";
import React from "react";

const TransactionHistories = ({ show }) => {
  const columnClassName = "py-5 px-5 min-w-[14rem]";

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
      className="w-full origin-bottom"
    >
      <div className="w-full overflow-x-auto special-scroll-two">
        <table className="w-full border-collapse text-left mt-5">
          <thead className="text-left text-slate-300 bg-[rgba(255,255,255,.05)] rounded-sm">
            <tr>
              <th className={columnClassName}>ID</th>
              <th className={columnClassName}>Type</th>
              <th className={columnClassName}>Date</th>
              <th className={columnClassName}>Dscription</th>
              <th className={columnClassName}>Amount (&#8358;)</th>
            </tr>
          </thead>

          <tbody className="text-slate-400">
            {winners.map(
              ({ game, time, player, amount, prediction, payout }, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 1
                      ? "bg-[rgba(255,255,255,.05)] rounded-sm"
                      : ""
                  }
                >
                  <td className={columnClassName}>#H79GGD9D98</td>
                  <td className={`${columnClassName} text-green-600`}>
                    Credit
                  </td>
                  <td className={`${columnClassName}`}>20th, August 2023</td>
                  <td className={`${columnClassName}`}>
                    Aute mollit consequat tempor aute esse duis.
                  </td>
                  <td className={`${columnClassName} text-green-600`}>5000</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Transition>
  );
};

export default TransactionHistories;
