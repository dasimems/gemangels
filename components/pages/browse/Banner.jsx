import { BrowseBannerImage } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { browseImages } from "@/utils/general";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);

  const setElementHeight = useCallback(() => {
    const element = containerRef.current;
    if (element) {
      setHeight(element.clientHeight);
    }
  }, []);

  useEffect(
    () => {
      if (window) {
        setElementHeight();
      }
    },
    [setElementHeight]
  );
  return (
    <PageContainer className=" bg-bg" ref={containerRef}>
      <div className="w-full flex flex-col items-start justify-center py-20 px-20 relative md:h-screen md:max-h-[500px] rounded-lg overflow-hidden">
        <Image
          priority
          src={BrowseBannerImage}
          alt=""
          fill
          className="object-cover object-center opacity-30"
        />

        <div className="flex flex-col items-start justify-center w-full gap-6 max-w-[700px]">
          <TypeAnimation
            sequence={[
              "Unleash Your Potential, Become a Model Today!",
              1000,
              "Your Journey Starts Here, Embrace Modeling",
              1000,
              "Modeling Dreams Await, Join Us Now",
              1000,
              "Elevate Your Profile, Take a Chance, Be a Model",
              1000
            ]}
            wrapper="h1"
            speed={50}
            deletionSpeed={50}
            repeat={Infinity}
            className="relative text-3xl md:text-5xl text-medium"
          />
          <p className="text-slate-300">
            Become a part of our community of aspiring models and go out on a
            quest for knowledge, inspiration, and opportunity. Launch a modeling
            career today to show off your potential.
          </p>

          <Button type="conic-rainbow-2">Become a model today</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Banner;
