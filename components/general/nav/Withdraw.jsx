import { Transition } from '@headlessui/react'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import InputField from '../form/InputField'
import { ArrowRight, Plus } from 'react-iconly'

const Withdraw = ({show}) => {
  const depositAmounts = ["2000", "3000", "4000", "5000", "6000", "7000"];
  const className="relative bg-transparent border-t-0 border-b border-l-0 border-r-0 rounded-none border-slate-500 placeholder:text-slate-500"
  const {register, handleSubmit, formState:{errors}, setValue, watch } = useForm({
    defaultValues: {
      amount: "0",
      bank: ""
    },

    mode: "onChange"
  })
  const amountValue = watch("amount");
  const processForm = useCallback((data)=>{}, [])
  
  return (
    <Transition
      as={"div"}
      show={show}
      enter="ease-out duration-300"
      enterFrom="translate-x-[100%]"
      enterTo="translate-x-0"
      leave="ease-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-[100%]"
      className="flex flex-col w-full gap-6 shrink-0"
    >
        <h1 className="font-medium text-slate-300">Balance (&#8358;0)</h1>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit(processForm)}>
            <InputField placeholder="Withdrawal amount" inputClassName={className} {...register("amount",{ required: "Please input or select amount", min: {
              value: 2000,
              message: `withdrawal amount can't be less than 2000`,
            },
            valueAsNumber: true
            
          })} error={errors?.amount?.message} />

          <InputField type="select" placeholder="Select Bank" inputClassName={className} {...register("bank",{ required: "Please Select your bank"
          
        })} error={errors?.bank?.message} />

          <div className="flex items-center justify-between text-xs">
            <button type="button" className="inline-flex items-center gap-1 text-primary-lighter">
                <span>Add new</span>
                <span><Plus /></span>
            </button>
              <p className="text-green-600 ">Minimum withdrawal: (&#8358;2000)</p>
            </div>

            <Button className="justify-center gap-1 text-sm font-medium" type="primary">
            <span>
              Proceed to withdraw &#8358;{amountValue}
            
            </span>
            <span><ArrowRight set="bold" /></span>
            </Button>
        </form>
    </Transition>
  )
}

export default Withdraw