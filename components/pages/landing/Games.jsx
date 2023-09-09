import { GamePadImage } from "@/assets/images";
import PageContainer from "@/components/general/PageContainer";
import Image from "next/image";
import React from "react";
import GameCard from "./inner/GameCard";
import { gameList } from "@/utils/general";

const Games = () => {
  return (
    <PageContainer className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-slate-200">
        <Image src={GamePadImage} alt="" className="" />
        <h1>Games</h1>
      </div>

      <div className="grid grid-cols-1 min-[350px]:grid-cols-2  md:grid-cols-4 gap-4 md:gap-6">
        {gameList.map((data, index) => (
          <GameCard
            {...data}
            className={"h-[20rem] min-[350px]:h-[16rem]"}
            key={index}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default Games;
