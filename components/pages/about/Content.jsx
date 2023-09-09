import { RainbowBackground } from "@/assets/images";
import Button from "@/components/general/Button";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { services } from "@/utils/general";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (

    <>
    <PageContainer className="relative flex flex-col gap-10 py-20 pt-14 bg-bg md:flex-row">
     
      <div className="w-full order-2 md:order-1 md:w-[30%] flex flex-col gap-4 items-start shrink-0">
        <SectionHeader title="Who we are" />

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
      </div>

      <div className="flex flex-col items-start flex-1 order-1 gap-6 md:order-2">
        <SectionHeader title="What we are" />

        <div className="flex flex-col gap-3">
          <p className="text-slate-300">
            We are a unique worldwide adult agency specializing in traffic,
            marketing, management and customer acquisition for new models, on a
            global scale.
          </p>
          <p className="text-slate-300">
            Unlike most agencies (that are essentially SMMA & regular marketing
            agencies) that only work with established models with large social
            media following. This, because of their lack of skills to promote
            someone without a following already. We don’t require you to have
            one. We don’t need paid advertising, to funnel traffic and users to
            you.
          </p>
          <p className="text-slate-300">
            We specifically specialize in adult marketing for beginner models.
            This is because our personalized approach, with a special focus on
            high-converting traffic sources, we funnel into OnlyFans, Fansly,
            Fancentro, Snapchat, Twitter, and other adult platforms, and this
            sets us apart from the rest.
          </p>
          <p className="text-slate-300">
            As well as our psychology, mass-compliance methodology, FBI
            negotiations tactics & casino gambling technology for conversion,
            upselling & brand loyalty. We understand, listen and appreciate your
            individual needs and build strategies, accordingly.
          </p>
          <p className="text-slate-300">
            Aside from our paranoid thinking, we take your privacy extremely
            serious, ensuring all client information is protected by a “Hard
            Vacuum” seal (higher than military grade encryption). Where no data
            can be stolen, swiped or “brute-forced”. As well as DMCA takedowns
            and content crawling 24/7 for content leaks. We work with ICANN and
            law enforcement, to take down any leaked content, copyright
            infringements, IP (intellectual property), trademarks &
            servicemarks. We crack down on ISP’s (internet service provides),
            hosts (that host the website putting up your content illegaly), as
            well as cease and desist. To top it off, legal action towards the
            perpetrator. All our staff are subjected to NDA’s (non-disclosure
            agreements), before they start on your project.
          </p>
        </div>
      </div>
    </PageContainer>
    <PageContainer className="relative flex flex-col gap-10 py-20 pt-14 bg-bg md:flex-row">
      
      <Image
        src={RainbowBackground}
        fill
        priority
        className="object-cover object-center opacity-10"
        alt=""
      />
      <div className="flex flex-col items-start flex-1 gap-6">
        <SectionHeader title="Services we offer" />

        <div className="flex flex-col gap-3">
          <p className="text-slate-300">
          We have a lot of experience providing the following outstanding
          services
          </p>
        </div>
      </div>

      <div className="w-full md:w-[30%] flex flex-col gap-4 items-start shrink-0">
        {/* <SectionHeader title="Who we are" /> */}

        <div className="w-full bg-slate-200 relative h-[300px] overflow-hidden rounded-md">
          <Image
            src=""
            alt="Gem Angels Services"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

    </PageContainer>
    
    </>
  );
};

export default Content;
