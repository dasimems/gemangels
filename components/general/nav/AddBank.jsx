import { Transition } from "@headlessui/react";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import InputField from "../form/InputField";
import { Plus } from "react-iconly";
import Button from "../Button";

const AddBank = ({ show }) => {
  const className =
    "relative bg-transparent border-t-0 border-b border-l-0 border-r-0 rounded-none border-slate-500";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      bankName: "",
      accountName: "",
      accountNumber: "",
    },

    mode: "onChange",
  });
  const processForm = useCallback((data) => {}, []);
  return (
    <Transition
      as={"div"}
      show={show}
      enter="ease-out duration-300"
      enterFrom="scale-y-0"
      enterTo="scale-y-100"
      leave="ease-out duration-300"
      leaveFrom="scale-y-100"
      leaveTo="scale-y-0"
      className="w-full origin-bottom"
    >
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(processForm)}
      >
        <InputField
          placeholder="Account number"
          inputClassName={className}
          {...register("accountNumber", {
            required: "Please input account number",
            minLength: {
              value: 10,
              message: `Invalid account number`,
            },
          })}
          error={errors?.accountNumber?.message}
        />

        <InputField
          type="select"
          placeholder="Select Bank"
          inputClassName={className}
          {...register("bankName", {
            required: "Please select bank name",
          })}
          error={errors?.bankName?.message}
        />
        <InputField
          placeholder="Account name"
          inputClassName={className}
          {...register("accountName", {
            required: "Please input account name",
          })}
          error={errors?.accountName?.message}
        />

        <Button
          className="justify-center items-center gap-1 text-sm font-medium rounded-md"
          type="primary"
        >
          <span>Add bank</span>
          <span>
            <Plus />
          </span>
        </Button>
      </form>
    </Transition>
  );
};

export default AddBank;
