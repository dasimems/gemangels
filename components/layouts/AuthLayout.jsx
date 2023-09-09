import React from "react";
import PageContainer from "../general/PageContainer";
import Image from "next/image";
import { LoginBackgroundImage, LoginBannerImage } from "@/assets/images";

const AuthLayout = ({
  backgroundImage,
  image,
  children,
  invert,
  className
}) => {
  return (
    <PageContainer className="relative grid min-h-screen grid-cols-1 gap-14 md:grid-cols-2 bg-bg">
      <Image
        alt=""
        fill
        priority
        src={backgroundImage || LoginBackgroundImage}
        className="object-cover object-center opacity-10"
      />
      <div
        className={`${className} relative ${invert
          ? "md:order-2"
          : "md:order-1"} py-20`}
      >
        {children}
      </div>
      <div
        className={`hidden md:block ${invert
          ? "md:order-1"
          : "md:order-2"} min-h-[10rem] relative pt-6`}
      >
        <Image
          priority
          src={image || LoginBannerImage}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </PageContainer>
  );
};

export default AuthLayout;
