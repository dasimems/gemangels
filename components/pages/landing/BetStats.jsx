import PageContainer from "@/components/general/PageContainer";
import { winners } from "@/utils/general";
import React from "react";

const BetStats = () => {
  const columnClassName = "py-5 px-5 min-w-[14rem]";
  return (
    <PageContainer className="">
      <div className="p-5 rounded-md bg-[rgba(255,255,255,.05)]">
        <div className="flex items-center gap-4">
          <h1>Wins</h1>
        </div>

        <div className="w-full overflow-x-auto special-scroll-two">
          <table className="w-full border-collapse text-left mt-5">
            <thead className="text-left text-slate-300 bg-[rgba(255,255,255,.05)] rounded-sm">
              <tr>
                <th className={columnClassName}>Game</th>
                <th className={columnClassName}>Time</th>
                <th className={columnClassName}>Player</th>
                <th className={columnClassName}>Bet Amount (&#8358;)</th>
                <th className={columnClassName}>Prediction</th>
                <th className={columnClassName}>Payout (&#8358;)</th>
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
                    <td className={columnClassName}>
                      <div className="flex items-center gap-3">
                        <div className="w-[2.2rem] h-[2.2rem] bg-slate-200 rounded-md"></div>
                        <p>{game?.name}</p>
                      </div>
                    </td>
                    <td className={columnClassName}>{time}</td>
                    <td className={`${columnClassName} text-white`}>
                      {player}
                    </td>
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
      </div>
    </PageContainer>
  );
};

export default BetStats;
