import { Transition } from '@headlessui/react'
import React, { useCallback } from 'react'
import InputField from '../form/InputField'
import Button from '../Button'
import { Login, AddUser } from 'react-iconly'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Register = ({show}) => {
  const className="relative bg-transparent border-t-0 border-l-0 border-r-0 border-b rounded-none border-slate-500"
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onChange"
  })
  const processForm = useCallback((data)=>{console.log(data)}, [])
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
      className="shrink-0 w-full"
    >

      <form onSubmit={handleSubmit(processForm)} className='relative flex flex-col gap-10'>
        <InputField placeholder="Email" type="email" inputClassName={className} {...register("email",{ required: "Please input your email"})} error={errors?.email?.message} />
        <InputField type="password" placeholder="Password" inputClassName={className} {...register("password",{ required: "Please input your password"})} error={errors?.password?.message} />
        <InputField type="password" placeholder="Repeat Password" inputClassName={className} {...register("passwordConfirmation",{ required: "Please repeat password"})} error={errors?.passwordConfirmation?.message} />
        <Button type="primary" className="items-center justify-center gap-1">
          <span><AddUser  /></span>
          <span>Register</span>
          
        </Button>

        <p className="text-slate-500 text-sm">By signing up, you agree that you are above 18 and agreed to our <Link className="text-primary-lighter underline" href="">Terms of Service</Link></p>

      </form>
      
    </Transition>
  )
}

export default Register
