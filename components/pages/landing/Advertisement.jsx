import React from "react";
import AdsCard from "./inner/AdsCard";
import PageContainer from "@/components/general/PageContainer";
import { AdsBackgroundImage } from "@/assets/images";
import Image from "next/image";
import SectionHeader from "@/components/general/SectionHeader";
import Button from "@/components/general/Button";

const Advertisement = () => {
  return (
    <PageContainer className="relative flex flex-col gap-6 py-20 bg-bg">
      <Image
        src={AdsBackgroundImage}
        fill
        priority
        alt=""
        className="object-cover object-top opacity-5"
      />
      <div className="w-full h-full absolute top-0 left-0 z-[1]" />
      <div className="relative z-10 flex flex-col items-start gap-4 max-w-[700px]">
        <SectionHeader className="uppercase" title="Dare to Dream" />
        <h1 className="text-2xl font-bold uppercase md:text-4xl">
          Start Your Journey as a Model
        </h1>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button buttonDescription="Become a model" type="conic-rainbow-2">
          Get Started Now
        </Button>
      </div>
    </PageContainer>
  );
};

export default Advertisement;
