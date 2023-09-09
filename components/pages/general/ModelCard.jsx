import Image from "next/image";
import Link from "next/link";
import React from "react";

const ModelCard = ({ name, image, description, className }) => {
  return (
    <div
      className={`${className} h-[300px] cursor-pointer group/model-card relative md:h-[calc((100vw-(2.5rem*2))/3)] flex flex-col border border-[rgba(255,255,255,.2)] rounded-lg p-2`}
    >
      <div className="relative h-full overflow-hidden rounded-md bg-slate-400">
        <Image
          src={image}
          alt={`${name} - Gem Angels`}
          className="object-cover w-full h-full duration-300 group-hover/model-card:scale-110"
        />

        <div className="absolute w-full h-full bg-[rgba(0,0,0,.3)] top-0 left-0 z-[1] opacity-0 group-hover/model-card:opacity-100" />

        {/* this is the card content */}
        <div className="absolute bottom-0 z-10 w-full overflow-hidden rounded-b-md">
          <div className="overflow-hidden">
            <div className="inline-flex -translate-x-[calc(100%+35px)] duration-300 group-hover/model-card:translate-x-0 items-center px-5 h-[50px] relative bg-primary after:absolute after:w-[50px] after:h-[50px] after:-left-[25px] after:rotate-45 after:bg-white before:absolute before:w-[50px] before:h-[50px]  before:-right-[25px] before:rotate-45 before:bg-primary before:top-[55%] before:-translate-y-1/2">
              <h1 className="relative z-10 font-medium pl-[23px]">
                {name}
              </h1>
            </div>
          </div>
          <div className="w-full bg-[rgba(0,0,0,.5)]">
            <div className="w-full duration-300 group-hover/model-card:h-[73px] h-0 overflow-hidden">
              <p className="p-2 text-sm text-slate-300">
                {description}
              </p>
            </div>
            <Link
              href=""
              className="flex items-center justify-center py-3 text-sm"
            >
              <span className="inline-block group-hover/model-card:hidden">
                {name}
              </span>
              <span className="hidden group-hover/model-card:inline-block">
                View Profile
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
