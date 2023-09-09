import { SmokeImage, smokeAnimation } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import { Routes, bannerContents } from "@/utils/general";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import SmokeElement from "smoke-effect-react";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    afterChange: index => {
      setActiveSlide(index);
    }
  };
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className=" bg-bg">
      {/* <SmokeElement
          width="100%"
          // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png"
          opacity="1"
          background="transparent"
          smokeSrc={"./smoke.png"}
          smokeOpacity="0.3"
        /> */}

      <Slider className="" {...settings}>
        {bannerContents.map(({ text, image, imagePosition }, index) =>
          <div className="w-full" key={index}>
            <PageContainer
              className="flex flex-col relative gap-10 items-center justify-between md:flex-row h-auto md:h-screen md:max-h-[700px] md:min-h-[550px] overflow-hidden"
              key={index}
            >
              {
                <Image
                  src={smokeAnimation}
                  alt=""
                  className={`absolute left-0 top-0 ${imagePosition === "left"
                    ? "md:right-0 md:left-[unset] md:rotate-[90deg]"
                    : ""}`}
                />
              }
              <div
                className={`py-14 md:py-20 order-1 ${imagePosition === "left"
                  ? "md:order-2"
                  : ""} flex flex-col items-start gap-10 w-full md:w-[45%] shrink-0`}
              >
                {/* <h1 className="text-3xl md:text-5xl text-medium">
                  {text}
                </h1> */}
                {activeSlide === index
                  ? <TypeAnimation
                      sequence={[text, 1000]}
                      wrapper="h1"
                      speed={text.length}
                      className="relative text-3xl md:text-5xl text-medium"
                    />
                  : <h1 className="text-3xl md:text-5xl text-medium">
                      {text.trim().slice(0, 1)}
                    </h1>}

                <Button
                  type="conic-rainbow-2"
                  buttonDescription="Become a member of Gem Angels"
                  link={Routes.SignUp.path}
                >
                  Join Us
                </Button>
              </div>

              <Image
                priority
                src={image}
                alt=""
                className={`order-2 ${imagePosition === "left"
                  ? "md:order-1"
                  : ""} ${activeSlide === index
                  ? "scale-up"
                  : ""}  object-contain w-full h-full md:h-[110%] relative max-w-[45%] mix-blend-screen`}
              />
            </PageContainer>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Banner;
