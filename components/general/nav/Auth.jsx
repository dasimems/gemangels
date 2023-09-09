import React, { useState } from 'react'
import Button from '../Button'
import LoginForm from './LoginForm'
import Register from './RegisterForm'

const Auth = () => {
  const formValues = {
    login: "login",
    register: "register"
  }
  const [activeForm, setActiveForm] = useState(formValues.login)
  return (
    <div className='w-full h-full flex items-stretch gap-6'>

      <div className="w-[40%] bg-slate-200 rounded-md hidden md:block">

      </div>

      <div className="flex flex-1 overflow-hidden flex-col gap-6 py-5 pr-5">
        <div className='flex gap-3 items-center'>
          <button className={`pb-1 pt-1 text-sm px-5 rounded-full ${activeForm === formValues.login? "bg-primary-lighter text-white" : "text-slate-300"}`} onClick={() => {setActiveForm(formValues.login)}}>
            Login
          </button>
          <button className={`pb-1 pt-1 text-sm px-5 rounded-full ${activeForm === formValues.register? "bg-primary-lighter text-white" : "text-slate-300"}`} onClick={() => {setActiveForm(formValues.register)}}>
            Sign up
          </button>
        </div>

        <div className="flex">
          <LoginForm show={activeForm === formValues.login} />
          <Register show={activeForm === formValues.register} />

        </div>

      </div>
      
    </div>
  )
}

export default Auth
