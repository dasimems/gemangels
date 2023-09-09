import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import React from "react";
import Camera from "./Camera";
import Image from "next/image";
import { AboutBackgroundImage } from "@/assets/images";
import { Routes } from "@/utils/general";

const Banner = () => {
  return (
    <PageContainer className="flex items-end justify-between gap-10 bg-bg relative">
      <Image
        src={AboutBackgroundImage}
        fill
        priority
        alt=""
        className="object-cover object-center opacity-10"
      />
      <div className="py-20 w-[11rem]">
        <h1 className="text-2xl sm:text-4xl md:text-6xl">
          We are a unique worldwide adult agency.
        </h1>
      </div>
      <Camera />
      <div className="py-20 flex flex-col items-end text-right w-[11rem] gap-4 shrink-0">
        <p className="flex flex-col gap-2 text-slate-300">
          <span>Join us now</span> <span>for exclusive contents</span>
        </p>
        <Button
          buttonDescription="Join Us Now"
          link={Routes.SignUp.path}
          className="w-full justify-center"
          type="conic-rainbow-2"
        >
          Sign Up
        </Button>
      </div>
    </PageContainer>
  );
};

export default Banner;
