import { cameraImages } from "@/utils/general";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

const Camera = () => {
  const [changing, setChanging] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    beforeChange: index => {
      setChanging(true);
      setTimeout(() => {
        setChanging(false);
        setShowFlash(true);
      }, 600);
    },
    afterChange: index => {
      setChanging(false);
      setShowFlash(false);
    }
  };
  return (
    <div className="relative self-center ">
      {showFlash &&
        <div className="bg-white w-[200px] h-[200px] absolute rounded-full -top-[80px] -right-[80px] flash" />}

      <div className="shrink-0 border-4 px-20 py-10 rounded-3xl border-primary relative bg-bg">
        <div
          className={`${changing
            ? "camera-changing"
            : ""} w-[50px] h-[35px] border-4 border-primary border-b-0 left-3 -top-[35px] absolute rounded-lg`}
        />
        <div className="w-[25px] h-[25px] border-primary border-4 rounded-full absolute right-2 top-2" />
        <div className="w-[150px] h-[150px] border-4 border-primary rounded-md overflow-hidden">
          <Slider className="" {...settings}>
            {cameraImages.map((image, index) =>
              <div className="" key={index}>
                <div className="w-[150px] h-[150px] relative overflow-hidden">
                  <Image
                    fill
                    src={image}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Camera;
