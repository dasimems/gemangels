import { actionList } from '@/utils/general'
import React, { useState } from 'react'
import Deposit from './Deposit'
import Withdraw from './Withdraw'

const Payment = ({active}) => {
    const [activeContent, setActiveContent] = useState(active || actionList.deposit)
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-3'>

          <button className={`pb-1 outline-none pt-1 text-sm px-5 rounded-full ${activeContent === actionList.deposit? "bg-primary-lighter text-white" : "text-slate-300"}`} onClick={() => {setActiveContent(actionList.deposit)}}>
              Deposit
          </button>
          <button className={`pb-1 outline-none pt-1 text-sm px-5 rounded-full ${activeContent === actionList.withdraw? "bg-primary-lighter text-white" : "text-slate-300"}`} onClick={() => {setActiveContent(actionList.withdraw)}}>
            Withdraw
          </button>
        
        </div>
        <div className="flex">

          <Deposit show={activeContent === actionList.deposit} />

          <Withdraw show={activeContent === actionList.withdraw} />
        
        </div>
    </div>
  )
}

export default Payment