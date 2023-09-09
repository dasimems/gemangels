import React from "react";
import { Plus } from "react-iconly";

const AboutList = ({ text, className, ...props }) => {
  return (
    <div className={`${className} flex items-start gap-3`} {...props}>
      <span className="text-primary">
        <Plus />
      </span>
      <p>
        {text}
      </p>
    </div>
  );
};

export default AboutList;
