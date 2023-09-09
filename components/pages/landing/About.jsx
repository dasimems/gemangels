import { RainbowBackground } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { Routes, services } from "@/utils/general";
import Image from "next/image";
import React from "react";
import AboutList from "./inner/AboutList";

const About = () => {
  return (
    <PageContainer className="relative flex flex-col gap-10 py-20 pt-14 bg-bg md:flex-row">
      <Image
        src={RainbowBackground}
        fill
        priority
        className="object-cover object-center opacity-10"
        alt=""
      />
      <div className="w-full md:w-[30%] flex flex-col gap-4 items-start shrink-0">
        <SectionHeader title="About Us" />

        <div className="w-full bg-slate-200 relative h-[300px] overflow-hidden rounded-md">
          <Image
            src=""
            alt="About Gem Angels"
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="text-slate-300">
          We are a unique worldwide adult agency that stands apart from the rest
          having commitment to beginner models. We don&apos;t require you to
          have a massive social media following or invest in paid advertising
          upfront.
        </p>

        <Button
          buttonDescription="About us"
          link={Routes.About.path}
          type="conic-rainbow-2"
        >
          Read more
        </Button>
      </div>

      <div className="flex flex-col items-start flex-1 gap-6">
        <SectionHeader title="Our Services" />

        <p className="text-slate-300">
          We have a lot of experience providing the following outstanding
          services
        </p>

        {services.map((service, index) =>
          <AboutList text={service} key={index} />
        )}

        <div className="" />
      </div>
    </PageContainer>
  );
};

export default About;
