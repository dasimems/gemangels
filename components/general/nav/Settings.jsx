import { actionList } from "@/utils/general";
import React, { useState } from "react";
import SettingsContent from "./SettingsContent";
import Bank from "./Bank";

const Settings = ({ active }) => {
  const [activeContent, setActiveContent] = useState(
    active || actionList.settings
  );
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <button
          className={`pb-1 outline-none pt-1 text-sm px-5 rounded-full ${
            activeContent === actionList.settings
              ? "bg-primary-lighter text-white"
              : "text-slate-300"
          }`}
          onClick={() => {
            setActiveContent(actionList.settings);
          }}
        >
          Settings
        </button>
        <button
          className={`pb-1 outline-none pt-1 text-sm px-5 rounded-full ${
            activeContent === actionList.bank
              ? "bg-primary-lighter text-white"
              : "text-slate-300"
          }`}
          onClick={() => {
            setActiveContent(actionList.bank);
          }}
        >
          Banks
        </button>
      </div>

      <div className="flex">
        <SettingsContent show={activeContent === actionList.settings} />
        <Bank show={activeContent === actionList.bank} />
      </div>
    </div>
  );
};

export default Settings;
