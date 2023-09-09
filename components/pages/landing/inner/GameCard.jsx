import { Routes, siteName } from '@/utils/general'
import Link from 'next/link'
import React from 'react'
import { Play } from 'react-iconly'

const GameCard = ({className, name}) => {
  return (
    <Link href={`${Routes.Games.path}/${name}`} className={`relative flex min-h-[16rem] group/game bg-slate-200 rounded-md overflow-hidden ${className}`}>

        <div className="absolute backdrop-blur-[15px] opacity-0 -top-[50%] duration-300 group-hover/game:top-0 group-hover/game:opacity-100 h-1/2 left-0 w-full bg-[rgba(0,0,0,.1)] flex flex-col gap-6 items-center justify-end">
            <h1>Game Name</h1>
            <span className='text-primary-lighter -mb-[20px] relative z-10'>
                <Play size={40} set="bold" />
            </span>
        </div>
        <div className="absolute backdrop-blur-[15px] opacity-0 -bottom-[50%] duration-300 group-hover/game:bottom-0 group-hover/game:opacity-100 h-1/2 left-0 w-full bg-[rgba(0,0,0,.1)] flex flex-col gap-6 items-center justify-start">
            <span className='text-primary-lighter -mt-[20px]'>
                <Play set="bold" size={40} />
            </span>
            <p className="text-primary-lighter">{siteName}</p>
        </div>
      
    </Link>
  )
}

export default GameCard
