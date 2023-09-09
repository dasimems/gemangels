import Image from "next/image";
import React from "react";

const AdsCard = ({ image }) => {
  return (
    <div className="w-full bg-slate-200 h-[15rem] rounded-md relative overflow-hidden">
      <Image
        src={image}
        alt="Stake Six"
        className="w-full h-full object-cover object-bottom"
      />
    </div>
  );
};

export default AdsCard;
