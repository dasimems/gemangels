import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";

export default function SelectBox({
  options,
  className,
  placeholder,
  value,
  onChange,
  buttonClassName,
  optionsClassName,
  activeClassName,
  selectedClassName,
  unActiveClassName,
  unSelectedClassName,
  ...props
}) {
  if (!options || !Array.isArray(options)) {
    options = [];
  }
  options = [{ label: placeholder || "Select Option", value: "" }, ...options];
  const [selected, setSelected] = useState(options[0]);

  console.log(selected);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(selected);
    }
  }, [selected]);

  return (
    <div className={`${className}`} {...props}>
      <Listbox
        value={selected}
        onChange={(value) => {
          console.log(value);
          setSelected(value);
        }}
      >
        <div className="relative">
          <Listbox.Button
            className={`${buttonClassName} relative w-full flex items-center cursor-default py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-lighter-300 sm:text-sm`}
          >
            <span className="block truncate">{selected?.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FaAngleDown />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              placeholder={placeholder || "Select Option"}
              className={`${optionsClassName} absolute z-[999] special-scroll right-0 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {options &&
                Array.isArray(options) &&
                options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-3 px-6 ${
                        selected === option
                          ? selectedClassName ||
                            "font-medium text-primary-lighter bg-primary-lighter-200"
                          : unSelectedClassName || "text-slate-300 font-normal"
                      } ${
                        active
                          ? activeClassName ||
                            "text-primary-lighter bg-primary-lighter-100"
                          : unActiveClassName || "text-slate-300"
                      }  `
                    }
                    value={option}
                  >
                    <span className={`block truncate`}>{option.label}</span>
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
