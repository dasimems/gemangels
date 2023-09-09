import { navHeight } from '@/utils/general'
import React from 'react'

const GeneralLayout = ({children}) => {
  return (
    <div className='w-full h-auto flex flex-col gap-10' style={{
        paddingTop: `${navHeight}px`
    }}>

        {children}
      
    </div>
  )
}

export default GeneralLayout
