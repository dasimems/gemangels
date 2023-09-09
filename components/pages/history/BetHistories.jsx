import { winners } from "@/utils/general";
import { Transition } from "@headlessui/react";
import React from "react";

const BetHistories = ({ show }) => {
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
      className="w-full origin-top"
    >
      <div className="w-full overflow-x-auto special-scroll-two">
        <table className="w-full border-collapse text-left mt-5">
          <thead className="text-left text-slate-300 bg-[rgba(255,255,255,.05)] rounded-sm">
            <tr>
              <th className={columnClassName}>ID</th>
              <th className={columnClassName}>Game</th>
              <th className={columnClassName}>Date</th>
              <th className={columnClassName}>Bet Amount (&#8358;)</th>
              <th className={columnClassName}>Prediction</th>
              <th className={columnClassName}>Win Amount (&#8358;)</th>
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
                  <td className={columnClassName}>
                    <div className="flex items-center gap-3">
                      <div className="w-[2.2rem] h-[2.2rem] bg-slate-200 rounded-md"></div>
                      <p>Game Name</p>
                    </div>
                  </td>
                  <td className={`${columnClassName}`}>20th, August 2023</td>
                  <td className={`${columnClassName} text-green-600`}>
                    {amount}
                  </td>
                  <td className={`${columnClassName} text-green-600`}>
                    {prediction}
                  </td>
                  <td className={`${columnClassName} text-green-600`}>
                    {payout}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Transition>
  );
};

export default BetHistories;
