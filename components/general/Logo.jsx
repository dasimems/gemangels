import { Favicon, LogoImage, LogoImageCropped } from "@/assets/images";
import { siteName } from "@/utils/general";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  textHidden,
  imageHidden,
  imageSize,
  textClassName,
  className,
  showFullName
}) => {
  if (!imageSize) {
    imageSize = 50;
  }
  

  return (
    <Link
      aria-label={siteName}
      href="/"
      className={`flex items-center text-black text-xs font-bold uppercase ${className}`}
    >
      {!textHidden &&
        <h1 className={`${textClassName} text-white font-bold`}>
          {siteName}
        </h1>}
    </Link>
  );
};

export default Logo;
