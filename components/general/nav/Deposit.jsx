import { Transition } from "@headlessui/react";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import InputField from "../form/InputField";
import { ArrowRight } from "react-iconly";

const Deposit = ({ show }) => {
  const depositAmounts = ["2000", "3000", "4000", "5000", "6000", "7000"];
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
      amount: depositAmounts[0],
      paymentType: "bank",
    },

    mode: "onChange",
  });
  const amountValue = watch("amount");
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
      <h1 className="font-medium text-slate-300">
        Select or input your deposit amount below
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {depositAmounts.map((amount, index) => (
          <Button
            key={index}
            className={`bg-transparent border rounded-md text-sm items-center justify-center ${
              amountValue === amount
                ? "text-primary-lighter font-medium border-primary-lighter "
                : "text-slate-400 border-slate-500 font-normal"
            }`}
            action={() => {
              setValue("amount", amount);
            }}
          >
            &#8358;{amount}
          </Button>
        ))}
      </div>

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(processForm)}
      >
        <InputField
          placeholder="Deposit amount"
          inputClassName={className}
          {...register("amount", {
            required: "Please input or select amount",
            min: {
              value: parseInt(depositAmounts[0]),
              message: `Deposit amount can't be less than ${depositAmounts[0]}`,
            },
            valueAsNumber: true,
          })}
          error={errors?.amount?.message}
        />
        <div className="flex justify-end text-xs text-green-600">
          <p>Bonus Token: (&#8358;0)</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-slate-300">Payment method</h1>
          <InputField
            type="radio"
            label="Bank"
            value="bank"
            {...register("paymentType")}
          />
        </div>

        <Button
          className="justify-center gap-1 text-sm font-medium"
          type="primary"
        >
          <span>Continue to pay &#8358;{amountValue}</span>
          <span>
            <ArrowRight set="bold" />
          </span>
        </Button>
      </form>
    </Transition>
  );
};

export default Deposit;
