import React from "react";

const AuthTitle = ({ title }) => {
  return (
    <h1 className="text-2xl sm:text-4xl md:text-6xl">
      {title}
    </h1>
  );
};

export default AuthTitle;
