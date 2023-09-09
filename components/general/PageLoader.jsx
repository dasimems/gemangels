import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Lottie from "react-lottie-player";
import { PageLoadingAnimation } from "@/assets/lotties";
import { useRouter } from "next/router";

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setShowLoader(true);
    };
    const handleRouteComplete = () => {
      setShowLoader(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeError", handleRouteComplete);
    router.events.on("routeChangeComplete", handleRouteComplete);
  }, [router]);
  return (
    <Modal
      className="flex items-center justify-center"
      contentClassName="flex items-center justify-center"
      opened={showLoader}
    >
      <Lottie
        loop
        animationData={PageLoadingAnimation}
        play
        className="w-[200px] h-[200px]"
      />
    </Modal>
  );
};

export default PageLoader;
