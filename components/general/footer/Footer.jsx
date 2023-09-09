import { siteName } from "@/utils/general";
import PageContainer from "../PageContainer";
import FooterSocials from "./FooterSocials";
import Logo from "../Logo";
import DesktopNav from "../nav/DesktopNav";
import AccountLink from "../nav/AccountLInks";
import ContactLink from "../nav/ContactLink";
import { useEffect, useState } from "react";
import GameLink from "./GameLinks";

const FooterContentLayout = ({ children, removeMaxWidth, className }) => {
  return (
    <div
      className={`${className} flex flex-col items-start gap-6 text-sm w-full sm:w-[40%] md:w-[25%] ${removeMaxWidth
        ? ""
        : "max-w-[250px]"}`}
    >
      {children}
    </div>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <h1 className="font-bold uppercase text-white relative after:absolute after:w-[15px] after:h-[2px] after:bg-primary-lighter after:top-1/2 after:-translate-1/2 after:left-[107%]">
      {title}
    </h1>
  );
};

const Footer = () => {
  const date = new Date();
  const [siteRef, setSiteRef] = useState();

  useEffect(() => {
    if (window && window.location && window.location.origin) {
      setSiteRef(window.location.origin);
    }
  }, []);

  return (
    <div className="relative flex flex-col gap-10 pt-20 bg-primary-100">
      <PageContainer>
        <hr className="border-slate-500" />
      </PageContainer>
      <PageContainer className="flex flex-wrap items-start justify-between gap-10 text-slate-300">
        <FooterContentLayout className="min-w-full md:min-w-[auto]">
          <Logo imageSize={70} />

          <p className="text-sm text-slate-200">
            Welcome to {siteName}, Where Gaming Meets Winning! Engage and earn
            real money prizes that recognize your dedication and triumphs.
          </p>

          <FooterSocials />
        </FooterContentLayout>

        <FooterContentLayout>
          <FooterHeader title="Links" />

          <DesktopNav footer />
        </FooterContentLayout>
        <FooterContentLayout removeMaxWidth>
          <FooterHeader title="Helps" />
          {<ContactLink />}
        </FooterContentLayout>
      </PageContainer>
      <PageContainer className="">
        <div className="flex flex-col items-center justify-between w-full gap-4 py-5 duration-300 border-t border-t-slate-500 sm:flex-row">
          <p>
            Copyrights &copy; {siteName} {date.getFullYear()}
          </p>
          <p>
            Designed and Developed by{" "}
            <a
              aria-label="Developer website - Dasimems"
              href={`https://dasimems.com?ref=${siteRef}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary-lighter hover:underline"
            >
              Dasimems
            </a>
          </p>
        </div>
      </PageContainer>
    </div>
  );
};

export default Footer;
