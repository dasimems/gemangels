import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import React from "react";
import ModelCard from "../general/ModelCard";

const ModelList = ({ title, list, className }) => {
  return (
    <PageContainer className={`${className} bg-bg`}>
      <hr className="border-slate-500" />

      <div className="flex flex-col gap-10 py-10">
        <SectionHeader title={title || "Models"} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {list &&
            Array.isArray(list) &&
            list.map((data, index) => <ModelCard {...data} key={index} />)}
        </div>
      </div>
    </PageContainer>
  );
};

export default ModelList;
