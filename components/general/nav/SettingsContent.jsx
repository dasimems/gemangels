import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import InputField from "../form/InputField";
import { Transition } from "@headlessui/react";
import Button from "../Button";
import { Check } from "lucide-react";

const SettingsContent = ({ show }) => {
  const className =
    "relative bg-transparent border-t-0 border-b border-l-0 border-r-0 rounded-none border-slate-500";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      password: "",
      repeatPassword: "",
    },
    mode: "onChange",
  });

  const processForm = useCallback((data) => {}, []);
  return (
    <Transition
      as={"div"}
      show={show}
      enter="ease-out duration-300"
      enterFrom="-translate-x-[100%]"
      enterTo="translate-x-0"
      leave="ease-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-[100%]"
      className="flex flex-col w-full gap-6 shrink-0"
    >
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(processForm)}
      >
        <InputField
          type="password"
          placeholder="Old password"
          inputClassName={className}
          {...register("oldPassword", {
            required: "Please provide your old password",
          })}
          error={errors?.oldPassword?.message}
        />
        <InputField
          type="password"
          placeholder="New password"
          inputClassName={className}
          {...register("password", {
            required: "Please provide your new password",
          })}
          error={errors?.password?.message}
        />
        <InputField
          type="password"
          placeholder="Repeat password"
          inputClassName={className}
          {...register("repeatPassword", {
            required: "Please repeat your new password",
          })}
          error={errors?.repeatPassword?.message}
        />

        <Button type="primary" className="items-center justify-center gap-1">
          <span>Update</span>
          <span>
            <Check />
          </span>
        </Button>
      </form>
    </Transition>
  );
};

export default SettingsContent;
